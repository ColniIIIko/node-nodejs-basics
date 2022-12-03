import { open, rm } from "node:fs/promises";
import path from "path";

const isFileExists = async (filePath) => {
  try {
    await open(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

const remove = async () => {
  const filePath = path.join(path.resolve(), "/src/fs/files/fileToRemove.txt");
  if (!(await isFileExists(filePath))) {
    throw new Error("FS operation failed");
  }

  rm(filePath);
};

await remove();
