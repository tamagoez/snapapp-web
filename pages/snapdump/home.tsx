import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthed } from "../../scripts/auth";
import BottomNav from "../../components/snapdump/buttomnav";
import { Dump } from "../../components/snapdump/dump";
import TopNav from "../../components/snapdump/topnav";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);
  return (
    <>
      <TopNav title="Home" />
      <BottomNav top={true} />
      <h1>Top</h1>
      <Dump />
    </>
  );
}
