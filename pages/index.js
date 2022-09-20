import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setName(data.name));
  });

  return (
    <div>
      {name === "" ? <p>Hello World.</p> : <p>Hello {name}</p>}
      <Link href="/slideshow">
        <a>Start Slideshow</a>
      </Link>
      /
      <Link href="/editor/61434eed8410f2385d504da1">
        <a>Build Slideshow</a>
      </Link>
    </div>
  );
}
