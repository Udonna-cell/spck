#!/bin/bash

clear
figlet "Spck cpanel"
echo "setting spck cli"

if [[ ! -d "repo" ]]; then
    mkdir repo
fi

if [[ ! -d "tmp" ]]; then
    mkdir tmp
fi

# Replace 'package_name' with the name of the package you want to check
PACKAGE_NAME=("figlet" "tr" "pv") # write the names of commands you need to check for

for package in "${PACKAGE_NAME[@]}"; do
    INSTALLED_PACKAGE=$(tr "/" " " <<<"$(pkg list-installed)" | cut -d " " -f 1)
    # Check if the package is installed
    if echo "$INSTALLED_PACKAGE" | grep -q "$package"; then
        echo "$package is installed."
    else
        echo "$package is not installed."
    fi
done 2>"tmp/error.txt"
