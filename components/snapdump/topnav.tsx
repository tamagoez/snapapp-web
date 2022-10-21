export default function TopNav({ title }) {
  return (
    <>
      <style jsx>
        {`
          .toppos {
            position: fixed;
            top: 0;
            background-color: white;
            width: 100%;
            height: 50px;
            backdrop-filter: blur(4px);
            background-color: rgba(0, 0, 0, 0.05);
          }

          .topicon {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 7px;
            margin-top: 5px;
          }

          .toptext {
            font-size: 22px;
            font-weight: 500;
            margin-top: 10px;
            margin-left: 9px;
          }

          .topbar1 {
            display: flex;
          }
        `}
      </style>
      <div className="toppos">
        <div className="topbar1">
          <img src="https://placeimg.com/192/192/people" className="topicon" />
          <p className="toptext">{title}</p>
        </div>
      </div>
    </>
  );
}
