import { SyncLoader } from "react-spinners";

export default function Loading({ title, description, status }) {
  return (
    <>
      <style jsx>{`
        .loadbox {
          z-index: 1000;
          position: fixed;
          height: 100%;
          width: 100%;
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.05);
        }

        .load {
          inset: 0;
          margin: auto;
          position: fixed;
          width: 400px;
          height: 250px;
          z-index: 1001;
          text-align: center;
          border-radius: 20px;
        }

        .loadchild {
          display: flex;
          flex-flow: column;
          gap: 2px;
        }

        .loader {
          margin-top: 50px;
          margin-bottom: 5px;
        }

        .loadchild h3 {
          font-weight: bold;
          margin-top: 10px;
        }

        .space {
          height: 10px;
        }
      `}</style>
      <div className="loadbox">
        <div className="load">
          <div className="loadchild">
            <div className="loader">
              <SyncLoader color="#36d7b7" size={20} margin={3} />
            </div>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div className="space" />
            <h5>{status}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
