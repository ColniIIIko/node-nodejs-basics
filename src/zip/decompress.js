import { createReadStream, createWriteStream } from "node:fs";
import { createUnzip } from "node:zlib";
import path from "path";

const decompress = async () => {
  const fileSrcPath = path.join(path.resolve(), "/src/zip/files/archive.gz");
  const fileDestPath = path.join(
    path.resolve(),
    "/src/zip/files/fileToCompress.txt"
  );

  const unzip = createUnzip();
  const readStream = createReadStream(fileSrcPath);
  const writeStream = createWriteStream(fileDestPath);

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();
