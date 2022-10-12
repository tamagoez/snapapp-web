import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (location.hash.match(/token_type/)) {
      router.replace("/app/welcome");
    }
  }
  return (
    <>
      <Head>
        <title>SnapApp</title>
        <meta name="description" content="All Snap Application unified here." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-5xl font-bold">SnapApp</h1>
        <h3>All Snap Application unified here.💬</h3>
        <Link href="/app/login">
          <p className="font-bold cursor-pointer decoration-solid underline">
            Login
          </p>
        </Link>

        <Link href="/app/signup">
          <p className="font-bold cursor-pointer decoration-solid underline">
            Signup
          </p>
        </Link>

        <Link href="/app/logout">
          <p className="font-bold cursor-pointer decoration-solid underline">
            Logout
          </p>
        </Link>
      </div>
    </>
  );
}
