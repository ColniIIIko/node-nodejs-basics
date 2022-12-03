import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import path from "path";

const compress = async () => {
  const fileSrcPath = path.join(
    path.resolve(),
    "/src/zip/files/fileToCompress.txt"
  );
  const fileDestPath = path.join(path.resolve(), "/src/zip/files/archive.gz");

  const gzip = createGzip();
  const readStream = createReadStream(fileSrcPath);
  const writeStream = createWriteStream(fileDestPath);

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
