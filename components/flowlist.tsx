import flowlist from "../files/flowlist.json";

export default function FlowList() {
  return (
    <>
      {flowlist.map((x) => {
        return <p key={x.title}>{x.title}</p>;
      })}
    </>
  );
}

function ListBox({ title, description }) {
  return (
    <div>
      {title}
      {description}
    </div>
  );
}
