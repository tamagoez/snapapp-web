import { useRouter } from "next/router";
import { IoHomeOutline, IoHomeSharp } from "react-icons/io5";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import {
  IoMdAdd,
  IoMdNotifications,
  IoMdNotificationsOutline,
} from "react-icons/io";
import { MdMessage, MdOutlineMessage } from "react-icons/md";
export default function BottomNav({
  top,
  notification,
  profile,
  message,
}: {
  top?: boolean;
  notification?: boolean;
  profile?: boolean;
  message?: boolean;
}) {
  const router = useRouter();
  return (
    <>
      <style jsx>{`
        .bottompos {
          position: fixed;
          bottom: 10px;
          center: 0;
          backdrop-filter: blur(5px);
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
          margin-top: 2.5px;
          justify-content: center;
          align-items: center;
          gap: 12%;
        }
        .bottombutton {
          font-size: 30px;
        }
        .bottombuttonadd {
          font-size: 30px;
          border-radius: 50%;
          background-color: #5188b1;
          color: #ffffff;
          border: 10px solid #5188b1;
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
              router.push("/snapdump/home");
            }}
          >
            {top ? <IoHomeSharp /> : <IoHomeOutline />}
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapdump/notification");
            }}
          >
            {notification ? (
              <IoMdNotifications />
            ) : (
              <IoMdNotificationsOutline />
            )}
          </span>
          <span
            className="bottombuttonadd"
            onClick={() => {
              console.log("a");
            }}
          >
            <IoMdAdd />
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapdump/profile");
            }}
          >
            {profile ? <BsPersonFill /> : <BsPerson />}
          </span>
          <span
            className="bottombutton"
            onClick={() => {
              router.push("/snapdump/message");
            }}
          >
            {message ? <MdMessage /> : <MdOutlineMessage />}
          </span>
        </div>
      </div>
    </>
  );
}
