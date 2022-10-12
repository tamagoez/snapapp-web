import { useRouter } from "next/router";
import { isAuthed } from "../../scripts/auth";
import { useEffect } from "react";
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    if (!isAuthed()) {
      router.replace(`/app/login?flowto=${router.pathname}`);
    }
  }, [router]);
  return (
    <>
      <h1>SnapDump</h1>
    </>
  );
}
