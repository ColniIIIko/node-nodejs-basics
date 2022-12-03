const parseArgs = () => {
  const parsed = process.argv.reduce(
    (acc, arg, index) =>
      arg.startsWith("--") && process.argv[index + 1]
        ? [...acc, `${arg.replace("--", "")} is ${process.argv[index + 1]}`]
        : acc,
    []
  );

  console.log(parsed.join(", "));
};

parseArgs();
