import { isAuthed, userdata } from "../../scripts/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "../../utils/supabase";

export default function Welcome() {
  const user = userdata();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);

  const [username, setUsername] = useState(null);
  const [handlename, setHandlename] = useState(null);
  const [bio, setBio] = useState(null);
  const [avatarid, setAvatarid] = useState(null);

  let userid = "LOADING";
  let emailaddress = "LOADING";
  if (user) {
    userid = user.id;
    emailaddress = user.email;
  }

  async function Spinsert() {
    try {
      const { error } = await supabase.from("user").upsert({
        userid: userid,
        name: username,
        bio: bio,
        iconurl: "default.png",
        handlename: handlename,
      });
      if (error) throw error;
    } catch (error) {
      console.error(error.message);
    }
    try {
      const { data, error } = await supabase.from("avatar_user").upsert({
        name: username,
        originaluser: userid,
      });
      if (error) throw error;
      if (data.id) setAvatarid(data.id);
      console.log(data.id);
    } catch (error) {
      console.error(error.message);
    }
    try {
      const { error } = await supabase
        .from("user")
        .upsert({ defaultavatar: avatarid });
      if (error) throw error;
    } catch (error) {
      console.error(error.message);
    }
    console.log("finished!!");
  }
  return (
    <>
      <style jsx>{`
        .text-divider {
          display: flex;
          align-items: center;
          --text-divider-gap: 1rem;
        }
        .text-divider::before,
        .text-divider::after {
          content: "";
          height: 1px;
          background-color: #333;
          flex-grow: 1;
        }
        .text-divider::before {
          margin-right: var(--text-divider-gap);
        }
        .text-divider::after {
          margin-left: var(--text-divider-gap);
        }
      `}</style>
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <h2>Before using snapapp, please confilm your information!</h2>
      <div className="text-divider">Your account</div>
      <p>
        <label>UUID: </label>
        <input id="id" type="text" value={userid} size={40} readOnly={true} />
      </p>
      <p>
        <label>Email: </label>
        <input
          id="email"
          type="email"
          value={emailaddress}
          size={40}
          readOnly={true}
        />
      </p>
      <div className="text-divider">Please input these information</div>
      <p>
        <label htmlFor="username">Username: </label>
        <input
          id="username"
          type="text"
          size={40}
          maxLength={30}
          readOnly={false}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="ex) SnapApp Official"
        />
      </p>
      <p>
        <label htmlFor="handlename">Handle name: @</label>
        <input
          id="handlename"
          type="text"
          size={40}
          maxLength={15}
          readOnly={false}
          value={handlename}
          onChange={(e) => setHandlename(e.target.value)}
          placeholder="ex) snapapp (only alphabet, number)"
        />
      </p>
      <p>
        <label htmlFor="bio">Bio: </label>
        <textarea
          id="bio"
          rows={5}
          cols={50}
          maxLength={180}
          readOnly={false}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="ex) This is an official account of SnapApp."
        />
      </p>
      <button
        className="mt-5 bg-green-500 hover:drop-shadow-xl drop-shadow-md hover:animate-pulse w-4/5 rounded-md text-white font-semibold py-2"
        onClick={() => Spinsert()}
      >
        Submit!
      </button>
    </>
  );
}
