import { useEffect, useState } from "react";
import FileExplorer from "./Components/FileExplorer";
import type { FileSystem } from "./types";
import { getData } from "./data";

export default function App() {
  const [data, setdata] = useState([] as FileSystem)

  useEffect(() => {
    getData().then((d) => {
      setdata(d as FileSystem);
    });
  }, []);

  return (
    <div>
      <FileExplorer files={data} parent="" />
    </div>
  )
}
