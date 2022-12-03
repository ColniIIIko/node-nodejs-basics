import { open, rename as fsRename } from "node:fs/promises";
import path from "node:path";

const isFileExists = async (filePath) => {
  try {
    await open(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

const rename = async () => {
  const filePath = path.join(path.resolve(), "/src/fs/files");
  const oldPath = path.join(filePath, "wrongFilename.txt");
  const newPath = path.join(filePath, "properFilename.md");

  if (!(await isFileExists(oldPath)) || (await isFileExists(newPath))) {
    throw new Error("FS operation failed");
  }

  fsRename(oldPath, newPath);
};

await rename();
