import { useRouter } from "next/router";
import Loading from "../../components/loading";
import { logout } from "../../scripts/auth";

export default function Logout() {
  const router = useRouter();
  async function deal() {
    const logoutst = await logout();
    console.log(logoutst);
    if (logoutst) router.replace("/");
  }
  deal();
  return (
    <>
      <Loading
        title="Logout"
        description="Thanks for using!"
        status="Logouting..."
      />
    </>
  );
}
