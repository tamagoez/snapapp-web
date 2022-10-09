import { useState } from "react";
import { useRouter } from "next/router";
import { signup, isAuthed } from "../../scripts/auth";
import Head from "next/head";
import Link from "next/link";
import Loading from "../../components/loading";
import { useEffect } from "react";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkmail, setCM] = useState(false);

  const [flowto, setFlowto] = useState("/app/leadinit");
  const query = router.query;
  useEffect(() => {
    console.dir(query);
    if (router.isReady) {
      setFlowto(query!.flowto as string);
      if (isAuthed()) {
        router.replace(flowto);
      }
    }
  }, [router]);

  async function signupproc() {
    const signupstatus = await signup(email, undefined, password, undefined);
    console.log(signupstatus);
    if (signupstatus === "success") {
      console.log("success");
      setCM(true);
    }
  }
  return (
    <>
      <Head>
        <title>SnapApp</title>
        <meta name="description" content="All Snap Application unified here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {checkmail ? (
        <Loading
          title="Check your email"
          description="We sent confilmation link to your email."
          status=""
        />
      ) : null}
      <div className="w-full h-full">
        <h2 className="text-3xl font-semibold">Signup</h2>
        <div className="flex flex-col gap-y-2 mt-4">
          <div className="flex flex-col">
            <label className="text-sm">Email address</label>
            <input
              type="email"
              className="w-4/5 py-1 drop-shadow-md hover:drop-shadow-xl bg-slate-100 border-slate-700 rounded"
              placeholder="*****@*****.***"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Password</label>
            <input
              type="password"
              className="w-4/5 py-1 drop-shadow-md hover:drop-shadow-xl bg-slate-100 border-slate-700 rounded"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-1">
          <button
            className="bg-lime-500 hover:drop-shadow-xl drop-shadow-md hover:animate-pulse w-4/5 rounded-md text-white font-semibold py-2"
            onClick={() => signupproc()}
          >
            Signup
          </button>
          <Link href="/app/login">
            <button className="bg-slate-500 hover:drop-shadow-xl drop-shadow-md hover:animate-pulse w-4/5 rounded-md text-white font-semibold py-2">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
