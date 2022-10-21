import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthed } from "../../scripts/auth";
import BottomNav from "../../components/snapchat/buttomnav";

export default function Message() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    } else {router.replace("/snapchat")}
  }, [router]);
  return (
    <>
      <BottomNav message={true} />
      </>
  )}