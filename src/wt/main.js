import { Worker } from "node:worker_threads";
import path from "node:path";
import { cpus } from "node:os";

const performCalculations = async () => {
  const cpusAmount = cpus().length;
  const workerPath = path.join(path.resolve(), "src/wt/worker.js");

  const promises = [];
  for (let i = 0; i < cpusAmount; i++) {
    const workerPromise = new Promise((res, rej) => {
      const worker = new Worker(workerPath, {
        workerData: { n: 10 + i },
      });

      worker.on("message", (message) => {
        res(message);
      });
    });

    promises.push(workerPromise);
  }

  const results = (await Promise.allSettled(promises)).map((r) => r.value);
  console.log(results);
};

await performCalculations();
