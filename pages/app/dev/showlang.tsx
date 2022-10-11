// import { useState } from "react";
// https://bobbyhadz.com/blog/javascript-typeerror-object-map-is-not-a-function

export default function ShowLang() {
  let lang;
  let langpack;
  if (typeof window !== "undefined") {
    lang = window.localStorage.getItem("lang");
    langpack = JSON.parse(window.localStorage.getItem("langpack"));
  }
  return (
    <>
      <h1 className="text-4xl font-bold">Show Language Pack</h1>
      <h3 className="text-xl">Downloaded language: {lang}</h3>
      <table className="border-collapse border border-slate-400">
        <tr className="sticky">
          <td>key</td>
          <td>value</td>
        </tr>
        {langpack !== undefined ? (
          Object.entries(langpack).map(([key, value]) => (
            <tr key={key}>
              <td className="border border-slate-300">{key as string}</td>
              <td className="border border-slate-300">{value as string}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>Loading...</td>
            <td></td>
          </tr>
        )}
      </table>
    </>
  );
}
