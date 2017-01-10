# Batch Connect - RStudio Server

![GitHub Release](TODO)
![GitHub License](TODO)

A VNCSim app used for launching RStudio Server under OSC's supercomputer
environment. It is designed to:

  - launch RStudio Server using the
  - provide sensible defaults for the RStudio Server when started under a
    per-user-environment
  - Enable access to an RStudio Server session over a secure session

# TODO Update everything after this

## Bower Install

You can install this in any project using Bower:

```sh
bower install git://github.com/OSC/bc_comsol_server.git --save
```

## Install Independently

1. Git clone this app in the desired location and go into the directory:

  ```sh
  git clone <repo> bc_comsol_server

  cd bc_comsol_server
  ```

2. Checkout the version of the app you want to deploy:

  ```sh
  git checkout <tag>
  ```

## Update

1. Fetch the updated code:

  ```sh
  git fetch
  ```

2. Checkout the desired tag:

  ```sh
  git checkout <tag>
  ```

## Specification

### ROOT

All assets in this package look for dependencies in the specified `$ROOT`
directory. This should be set to correspond to the included `template/`
directory.

An example running the `xstartup` script included in this package:

```sh
# Path where you installed this project
BC_COMSOL_SERVER_DIR="/path/to/bc_comsol_server/template"

# Run the `xstartup` script with proper `$ROOT` set
ROOT="${BC_COMSOL_SERVER_DIR}" ${BC_COMSOL_SERVER_DIR}/xstartup
```

### COMSOL_MODULE

This environment variable describes the specific COMSOL Server version to load.
This also assumes module support through the
[Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
package manager is installed on the running compute node as well as the
requested module in `$COMSOL_MODULE`.

### COMSOL_APP_TOKEN

This namespaces the installation location and runtime environment for the
COMSOL Server. This should be unique across different COMSOL Server instances
otherwise configuration files and installed COMSOL apps will overlap and cause
problems.

Suggestion: Use the app token of the deployed OnDemand app.

### COMSOL_SERVER_PREFS

*Optional*

This environment variable points to a file that holds the default values to use
in the `server.prefs` file under a user's local install. An example can include:

```sh
# xstartup

...

export BC_COMSOL_SERVER_PREFS="${ROOT}/server.prefs.default"

# call the comsol server xstartup here...

...
```

and the `server.prefs.default` can look like:

```
server.general.showbuiltinapplications=off
application.server.enable=off
application.server.allowexternalprocess=on
```

Note: The supplied file's settings will take precedence over the equivalent
settings in this app's [server.prefs.default](template/server.prefs.default).
This is how you override an option that this app sets.

### COMSOL_APP_ROOT

*Optional*

This environment variable points to the directory where you have installed the
COMSOL apps (`*.mph` and `*.mphapp`) that you want to appear in the COMSOL
Server dashboard for your users. This location needs to be readable and
executable by your users. Do not give the users write access to these files.

## Contributing

1. Fork it ( https://github.com/OSC/bc_comsol_server/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
