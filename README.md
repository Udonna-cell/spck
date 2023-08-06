# SPCK CLI 💻
"The spck CLI empowers the spck editor to seamlessly interact with Termux files. With the assistance of the spck CLI, you can perform a range of file operations within the Termux spck repository folder, including reading, renaming, deleting, importing, and moving files."
***
## Types of Arguments
There are two types of arguments: named and flagged.

- Named Argument
> The named argument is an argument that does not require any input.

```bash
spck [argument]
```
- Flagged Argument
> The flagged argument is an argument that accepts user input.

```bash
spck --[argument name]=[user input]
```
## Available Arguments
spck [argument]

The `spck` CLI offers a variety of available arguments that allow you to execute specific tasks, such as retrieving updates from the spck editor and sending updates to the spck editor.

The following arguments are available:
### pull (to retrieve updates)
Use the `pull` command to fetch updates from the spck editor to the spck CLI repository, facilitating further CLI excursion processes.

**When utilizing the `name` argument to pull updates, the operation will retrieve updates from the parent project folder in relation to the spck CLI repository folder.**

```bash
spck pull
```

**The `pull` command with the `flagged` argument retrieves updates based on the specified name or dot (using `.`), indicating that you intend to update the parent folder relative to your current location.**


```bash
# Pulls a specific path in the parent folder
spck --pull=todo-app

# Or pull the parent of the current folder
spck --pull=.
```