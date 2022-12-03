import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "path";

const calculateHash = async () => {
  const hash = createHash("sha256");

  const filePath = path.join(
    path.resolve(),
    "/src/hash/files/fileToCalculateHashFor.txt"
  );
  try {
    const content = await readFile(filePath);
    console.log(hash.update(content).digest("hex"));
  } catch (e) {
    throw e;
  }
};

await calculateHash();
