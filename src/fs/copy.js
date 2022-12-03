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

const copy = async () => {
  const dirPath = path.join(path.resolve(), "src/fs/files");
  const cpyDirPath = path.join(path.resolve(), "src/fs/files_copy");

  if ((await isDirExists(cpyDirPath)) || !(await isDirExists(dirPath))) {
    throw new Error("FS operation failed");
  }

  await mkdir(cpyDirPath);
  const files = await readdir(dirPath);
  for (const file of files) {
    copyFile(path.join(dirPath, file), path.join(cpyDirPath, file));
  }
};

await copy();
