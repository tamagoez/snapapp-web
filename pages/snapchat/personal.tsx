import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthed,  } from "../../scripts/auth";
import BottomNav from "../../components/snapchat/buttomnav";
import UserList from "../../components/snapchat/userlist";

export default function Personal() {
    const router = useRouter();
    return (
        <><BottomNav personal={true} /></>
    );
}