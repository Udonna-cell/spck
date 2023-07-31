#!/bin/bash

clear
figlet "Spck cpanel"
echo "setting spck cli"

# Replace 'package_name' with the name of the package you want to check
PACKAGE_NAME=("figlet") # write the names of commands you need to check for

for package in "${PACKAGE_NAME[@]}"; do
    # Check if the package is installed
    if tr "/" " " <<<"$(pkg list-installed)" | cut -d " " -f 1 ; then
        echo "$PACKAGE_NAME is installed."
    else
        echo "$PACKAGE_NAME is not installed."
    fi
done

if [ -d "repo" ]; then
    echo "found and it is a folder"
else
    # echo "not found"
    mkdir repo
fi
