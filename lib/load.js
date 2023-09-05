import logUpdate from "log-update"
import shell from "shelljs"
import chalk from 'chalk'

let frames = ['/', '-', '/']
export function loader(data){
  let index = 1
  let load = setInterval(function() {
    let frame = frames[++index % frames.length]
    logUpdate(`${chalk.green(frame)} Hello, Hello`)
  }, 80);
}

