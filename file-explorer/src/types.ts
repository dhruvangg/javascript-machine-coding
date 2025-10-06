export interface FSFile {
  type: "file";
  name: string;
}

export interface FSFolder {
  type: "folder";
  name: string;
  children: FileSystem;
}

export type FileSystem = (FSFile | FSFolder)[];
