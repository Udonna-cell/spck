#!/usr/bin/env node

import loader from "../lib/load"

let data = {
    shell: "mkdir .config"
}
loader(data)