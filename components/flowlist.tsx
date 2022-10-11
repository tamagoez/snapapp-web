import flowlist from "../files/flowlist.json";
import Link from "next/link";

export default function FlowList() {
  return (
    <>
      {flowlist.map((x) => {
        return (
          <Link href={x.url} key={x.title}>
            <p key={x.title}>{x.title}</p>
          </Link>
        );
      })}
    </>
  );
}

function ListBox({ title, description, url }) {
  return (
    <Link href={url}>
      <div>
        {title}
        {description}
      </div>
    </Link>
  );
}
