import { opendir, mkdir, readdir, copyFile } from "node:fs/promises";
import path from "path";

const isDirExists = async (dirPath) => {
  try {
    await opendir(dirPath);
    return true;
  } catch (e) {
    return false;
  }
};

const list = async () => {
  const dirPath = path.join(path.resolve(), "src/fs/files");

  if (!(await isDirExists(dirPath))) {
    throw new Error("FS operation failed");
  }

  const files = await readdir(dirPath);
  for (const file of files) {
    console.log(file);
  }
};

await list();
