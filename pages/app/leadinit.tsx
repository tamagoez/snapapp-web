import Loading from "../../components/loading";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Leadinit() {
  // const [status, setStatus] = useState("");
  const router = useRouter();
  const [title, setTitle] = useState("Initializing");
  const [description, setDescription] = useState("Please wait few moments.");
  let status;
  let lang;
  if (typeof window !== "undefined") {
    lang = window.localStorage.getItem("lang");
    if (!lang) {
      window.localStorage.setItem("lang", window.navigator.language);
    }
    deal(window.localStorage.getItem("lang"));
  }
  console.log(lang);
  async function deal(glang) {
    status = "Downloading language package...";
    await fetch(`/api/lang/${glang}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.localStorage.setItem("langpack", JSON.stringify(data));
        setTitle(data.le_title);
        setDescription(data.le_description);
      });
    router.replace("/app/flow");
  }
  return <Loading title={title} description={description} status={status} />;
}
