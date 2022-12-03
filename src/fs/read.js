import { readFile, open } from "node:fs/promises";
import path from "path";

const isFileExists = async (filePath) => {
  try {
    await open(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

const read = async () => {
  const filePath = path.join(path.resolve(), "/src/fs/files/fileToRead.txt");
  if (!(await isFileExists(filePath))) {
    throw new Error("FS operation failed");
  }

  const contents = await readFile(filePath, { encoding: "utf8" });
  console.log(contents);
};

await read();
