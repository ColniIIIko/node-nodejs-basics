import { createWriteStream } from "node:fs";
import path from "path";

const write = async () => {
  const filePath = path.join(
    path.resolve(),
    "src/streams/files/fileToWrite.txt"
  );
  const stream = createWriteStream(filePath, "utf-8");
  process.stdin.pipe(stream);
};

await write();
