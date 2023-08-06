# SPCK CLI 💻
"The spck CLI empowers the spck editor to seamlessly interact with Termux files. With the assistance of the spck CLI, you can perform a range of file operations within the Termux spck repository folder, including reading, renaming, deleting, importing, and moving files."
***
## Type of Arguments
They are two types of arguments named and flagged
- Named argument
> The named argument is just an argument that doesn't accept any input 
```bash
spck [argument]
```
- Flagged argument
> The Flagged argument i an argument that accept user input
```bash
spck --[argument name]=[user input]
```
## Available Arguments
spck [argument]
There are several available argument on the spck cli command to accomplish satin tasks like getting update from spck editor, posting/sending updated to spck editor.
The following are the arguments:
### pull (to get updates)
To get update from spck editor to spck cli repository for additional cli excursion process.

**To pull update using the name argument will pull update from the parent project folder relative to the spck cli repo folder**

```bash
spck pull
```

**The pull named argument pulls update depending on the specified name or dot (using the . specified that you eant to update the parent folder relative to your location**

```bash
# this pulls a specific path in the parent folder
spck --pull=todo-app
# or 
# this pull the parent of the current folder 
spck --pull=.
```