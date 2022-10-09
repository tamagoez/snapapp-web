import { userdata } from "../../scripts/auth";

export default function welcome() {
  const user = userdata();
  return (
    <>
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <h2>Let&apos;s customize your account!</h2>ID: {user.id}
    </>
  );
}
