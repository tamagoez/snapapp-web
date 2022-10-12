import { isAuthed, userdata } from "../../scripts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Welcome() {
  const user = userdata();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);
  let userid = "LOADING";
  let username = "LOADING";
  let emailaddress = "LOADING";
  if (user) {
    userid = user.id;
    username = user.email;
    emailaddress = user.email;
  }
  return (
    <>
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <h2>Let&apos;s customize your account!</h2>
      <p>ID: {userid}</p>
      <p>Username: {username}</p>
      <p>Email: {emailaddress}</p>
    </>
  );
}
