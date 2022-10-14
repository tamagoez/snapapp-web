import { useState } from "react";
import Link from "next/link";
import { login, isAuthed } from "../../scripts/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import supabase from "../../utils/supabase";
import { useEffect } from "react";
// import Loading from "../../components/loading";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flowto, setFlowto] = useState("");

  const query = router.query;
  useEffect(() => {
    console.dir(query);
    if (router.isReady) {
      if (query.flowto) {
        setFlowto(query.flowto as string);
      }
      if (isAuthed()) {
        flowtourl();
      }
    }
  }, [router, query]);

  function flowtourl() {
    if (flowto) {
      router.replace(`/app/leadinit?flowto=${flowto}`);
    } else {
      router.replace("/app/leadinit");
    }
  }

  async function loginproc() {
    const loginstatus = await login(email, undefined, password, undefined);
    if (loginstatus === "success") {
      flowtourl();
    }
  }

  const submitOnEnter = (event) => {
    // Watch for enter key
    if (event.keyCode === 13) {
      loginproc();
    }
  };

  const focusOnEnter = (event) => {
    // Watch for enter key
    if (event.keyCode === 13) {
      document.getElementById("pass").focus();
    }
  };

  return (
    <>
      <Head>
        <title>SnapApp</title>
        <meta name="description" content="All Snap Application unified here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-full">
        <h2 className="text-3xl font-semibold">Login</h2>
        <div className="flex flex-col gap-y-2 mt-4">
          <div className="flex flex-col">
            <label className="text-sm">Email address</label>
            <input
              id="email"
              type="email"
              className="w-4/5 py-1 drop-shadow-md hover:drop-shadow-xl bg-slate-100 border-slate-700 rounded"
              placeholder="*****@*****.***"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => focusOnEnter(e)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Password</label>
            <input
              id="pass"
              type="password"
              className="w-4/5 py-1 drop-shadow-md hover:drop-shadow-xl bg-slate-100 border-slate-700 rounded"
              placeholder="**********"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => submitOnEnter(e)}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-y-1">
          <button
            className="bg-green-500 hover:drop-shadow-xl drop-shadow-md hover:animate-pulse w-4/5 rounded-md text-white font-semibold py-2"
            onClick={() => loginproc()}
          >
            Login
          </button>
          <Link href="/app/signup">
            <button className="bg-slate-500 hover:drop-shadow-xl drop-shadow-md hover:animate-pulse w-4/5 rounded-md text-white font-semibold py-2">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
