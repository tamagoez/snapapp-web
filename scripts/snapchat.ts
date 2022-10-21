import supabase from "../utils/supabase";
import { userdata } from "./auth";

export function belonglist() {
    const authuserdata = userdata()
    const userid = authuserdata.id

}