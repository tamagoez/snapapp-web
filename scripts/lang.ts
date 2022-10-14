import enlang from "../files/lang/en.json";

export default function getlang() {
  if (typeof window !== "undefined") {
    const lang = window.localStorage.getItem("langpack");
    if (lang) {
      return lang;
    } else {
      return enlang;
    }
  } else {
    return enlang;
  }
}
