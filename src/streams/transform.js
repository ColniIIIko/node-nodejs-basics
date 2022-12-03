import { Transform } from "node:stream";
import { EOL } from "node:os";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, cb) {
      this.push(chunk.slice(0, -1).reverse() + EOL);
      cb();
    },
  });

  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
