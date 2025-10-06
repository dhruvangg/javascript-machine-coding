import type { FSFile } from "../types";

export default function File({ data, path }: { data: FSFile, path: string }) {
    return (
        <div>{data.name}</div>
    )
}
