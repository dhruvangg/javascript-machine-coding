import type { FSFolder } from "../types";
import FileExplorer from "./FileExplorer";

export default function Folder({ data, path }: { data: FSFolder, path: string }) {
    return (
        <div className="folder">
            <span>{data.name}</span>
            <FileExplorer files={data.children} parent={data.name} />
        </div>
    )
}
