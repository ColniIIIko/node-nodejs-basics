import { writeFile, open } from "node:fs/promises";
import path from "path";

const isFileExists = async (filePath) => {
  try {
    await open(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

const create = async () => {
  const filePath = path.join(path.resolve(), "/src/fs/files/fresh.txt");
  if (await isFileExists(filePath)) {
    throw new Error("FS operation failed");
  }
  writeFile(filePath, "I am fresh and young");
};

await create();
