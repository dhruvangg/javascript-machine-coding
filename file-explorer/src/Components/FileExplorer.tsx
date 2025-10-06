import type { FileSystem } from "../types";
import File from "./File";
import Folder from "./Folder";

interface FileExplorerProps {
    files: FileSystem;
    parent: string;
}

const FileExplorer = ({ files, parent }: FileExplorerProps) => {
    return (
        <div>
            {files.map(el => {
                if (el.type === "file") {
                    return <File data={el} path={`${parent}/${el.name}`}/>
                } else {
                    return <Folder data={el} path={`${parent}/${el.name}`} />
                }
            })}
        </div>
    )
}

export default FileExplorer