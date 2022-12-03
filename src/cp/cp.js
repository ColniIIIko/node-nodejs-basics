import { fork } from "node:child_process";
import path from "node:path";

const spawnChildProcess = async (args) => {
  const modulePath = path.join(path.resolve(), "src/cp/files/script.js");
  fork(modulePath, args, { stdio: "inherit" });
};

spawnChildProcess();
