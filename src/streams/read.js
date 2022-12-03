import { createReadStream } from "node:fs";
import path from "path";

const read = async () => {
  const filePath = path.join(
    path.resolve(),
    "src/streams/files/fileToRead.txt"
  );
  const stream = createReadStream(filePath, "utf-8");
  stream.pipe(process.stdout);
};

await read();
