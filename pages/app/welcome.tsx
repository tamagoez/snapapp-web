import { isAuthed, userdata } from "../../scripts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Welcome() {
  const user = userdata();
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);
  return (
    <>
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <h2>Let&apos;s customize your account!</h2>ID: {user!.id}
    </>
  );
}
