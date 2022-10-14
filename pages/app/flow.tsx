import getlang from "../../scripts/lang";
import FlowList from "../../components/flowlist";
//import enlang from "../../files/lang/ja.json";
import { useState } from "react";

export default function Flow() {
  let lang = {};
  if (typeof window !== "undefined") {
    lang = JSON.parse(window.localStorage.getItem("langpack"));
  }
  return (
    <>
      <h1 className="font-bold text-4xl">{lang.flow_title}</h1>
      <FlowList />
    </>
  );
}
