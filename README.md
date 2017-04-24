# Batch Connect - OSC RStudio Server

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_rstudio_server.svg)
![GitHub License](https://img.shields.io/github/license/osc/bc_osc_rstudio_server.svg)

A VNCSim app used for launching RStudio Server under OSC's supercomputer
environment.

## Install

Use git to clone this app and checkout the desired branch/version you want to
use:

```sh
git clone <repo>
cd <dir>
git checkout <tag/branch>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

To update the app you would:

```sh
cd <dir>
git fetch
git checkout <tag/branch>
```

Again, you do not need to restart the app as it isn't a Passenger app.

## Specification

### ROOT

All assets in this package look for dependencies in the specified `$ROOT`
directory. This should be set to correspond to the included `template/`
directory.

An example running the `xstartup` script included in this package:

```sh
# Path where you installed this project
BC_RSTUDIO_SERVER_DIR="/path/to/bc_osc_rstudio_server/template"

# Run the `xstartup` script with proper `$ROOT` set
ROOT="${BC_RSTUDIO_SERVER_DIR}" ${BC_RSTUDIO_SERVER_DIR}/xstartup
```

### R_MODULE

This environment variable describes the specific R version to load. This also
assumes module support through the
[Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
package manager is installed on the running compute node as well as the
requested module in `$R_MODULE`.

### RSTUDIO_MODULE

This environment variable describes the specific RStudio Server version to
load. This also assumes module support through the
[Lmod](https://www.tacc.utexas.edu/research-development/tacc-projects/lmod)
package manager is installed on the running compute node as well as the
requested module in `$RSTUDIO_MODULE`.

### PROOT_PATH

This environment variable holds the path for the `proot` binary used to set up
a fake bind mount for the RStudio Server process.

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_rstudio_server/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
