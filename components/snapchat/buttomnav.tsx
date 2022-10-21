import { useRouter } from "next/router";
import { BiBookmark } from "react-icons/bi";
import { BsPerson, BsPersonFill, BsPeople, BsPeopleFill, BsList } from "react-icons/bs";
import {
  AiOutlineSearch
} from "react-icons/ai";
// import { MdMessage, MdOutlineMessage } from "react-icons/md";
export default function BottomNav({
  personal,
  group,
  search,
  menu,
}: {
  personal?: boolean;
  group?: boolean;
  search?: boolean;
  menu?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <style jsx>{`
        .bottompos {
          position: fixed;
          bottom: 10px;
          center: 0;
          backdrop-filter: blur(4px);
          background-color: rgba(0, 0, 0, 0.05);
          width: 95%;
          height: 55px;
          z-index: 1000;
          border-radius: 10px;
          margin: 0 auto;
          left: 2.5%;
        }
        .bottomflex {
          display: flex;
          margin-top: 3.5px;
          justify-content: center;
          align-items: center;
          gap: 11%;
        }
        .bottombutton {
          font-size: 30px;
          cursor: pointer;
        }
        .bottombuttonadd {
          font-size: 25px;
          border-radius: 50%;
          background-color: #5188b1;
          color: #ffffff;
          border: 11px solid #5188b1;
        }
        .bottombuttonadd: hover {
          background-color: #5188b1;
          border: 10px solid #5188b1;
        }
      `}</style>
      <div className="bottompos">
        <div className="bottomflex">
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapchat/personal");
            }}
          >
           {personal ? <BsPersonFill /> : <BsPerson />}
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapchat/group");
            }}
          >
            {group ? <BsPeopleFill /> : <BsPeople />}
          </span>
          <span
            className="bottombuttonadd"
            onClick={() => {
              router.push("/snapchat/favorite")
            }}
          >
            <BiBookmark />
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapchat/search");
            }}
          >
            {search ? <AiOutlineSearch /> : <AiOutlineSearch />}
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              console.log("a")
            }}
          >
            {menu ? <BsList /> : <BsList />}
          </span>
        </div>
      </div>
    </>
  );
}
