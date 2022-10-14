import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthed } from "../../scripts/auth";
import BottomNav from "../../components/snapdump/buttomnav";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);
  return (
    <>
      <BottomNav top={true} />
      <h1>Top</h1>
    </>
  );
}
