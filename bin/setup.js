#!/usr/bin/env node
import chalk from 'chalk'
import {loader}  from "../lib/load.js"

let data = {
    shell: "mkdir .config"
}
console.log(chalk.gray('setting up spck-cli...'))
loader(data)