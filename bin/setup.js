#!/usr/bin/env node
import chalk from 'chalk'
import {loader}  from "../lib/load.js"

let task = [
    {
        cli: "mkdir .config",
        success: "config folder created",
        err: "This base has spck cli setup already"
    },
    {
        cli: "touch .config/spck.config.js",
        success: "config file created",
        err: "This base has spck cli setup already"
    }
]
let option = {
    text: "creating a config folder",
    spinner: "bouncingBar"
  }
console.log(chalk.gray('setting up spck-cli...'))
loader(task,option)
