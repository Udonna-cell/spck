import chalk from "chalk";

export function say(message) {
    console.log(chalk.green(message))
}

module.exports = {
    say
}