import shell from "shelljs";
import ora from "ora";

export function loader(data, option, initial = 0) {
  if (data.length - 1 == initial) {
    const spinner = ora(option).start();
    let task = shell.exec(`${data[initial].cli}`, { silent: true }).code;

    setTimeout(() => {
      task != 1
        ? spinner.succeed(data[initial].success)
        : spinner.fail(data[initial].err);
    }, 2000);
  } else {
    const spinner = ora(option).start();
    let task = shell.exec(`${data[initial].cli}`, { silent: true }).code;

    setTimeout(() => {
      task != 1
        ? spinner.succeed(data[initial].success)
        : spinner.fail(data[initial].err);
      loader(data, option, ++initial);
    }, 2000);
  }
}
