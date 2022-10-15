export function Dump({ postid }: { postid? : string; }) {
  return (
    <>
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
      <DumpComponent
        username="tamagoez"
        userid="tamagoez_"
        iconurl=""
        post="This is test."
      />
    </>
  );
}

function DumpComponent({ username, userid, iconurl, post }) {
  return (
    <>
      <style jsx>{`
        #dumpbox {
          width: 100%;
          background-color: #ebebeb;
          border-radius: 10px;
          min-height: 100px;
          margin-bottom: 5px;
        }
        #username {
          font-weight: 700;
        }
        #userid {
          font-weight: 300;
        }
      `}</style>
      <div id="dumpbox">
        <h4 id="username">{username}</h4>
        <h5 id="userid">{userid}</h5>
        <p id="post">{post}</p>
      </div>
    </>
  );
}
