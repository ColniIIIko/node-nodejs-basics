const parseEnv = () => {
  const variables = Object.keys(process.env)
    .filter((v) => v.startsWith("RSS_"))
    .map((v) => `${v}=${env[v]}`);

  console.log(variables.join("; "));
};

parseEnv();
