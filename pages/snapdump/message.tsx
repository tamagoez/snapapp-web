import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthed } from "../../scripts/auth";
import BottomNav from "../../components/snapdump/buttomnav";
import Loading from "../../components/loading";

export default function Message() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    } else {
      router.replace("/snapchat");
    }
  }, [router]);
  return (
    <>
      <BottomNav message={true} />
      <Loading
        title="Redirecting..."
        description="SnapChat"
        status="Wait a moment..."
      />
    </>
  );
}
