# Batch Connect - OSC RStudio Server

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_rstudio_server.svg)
![GitHub License](https://img.shields.io/github/license/osc/bc_osc_rstudio_server.svg)

A VNCSim app used for launching RStudio Server under OSC's supercomputer
environment.

## Install

1. Git clone this app in the desired location and go into the directory:

  ```sh
  $ git clone <repo> bc_osc_rstudio_server

  $ cd bc_osc_rstudio_server
  ```

2. Checkout the version of the app you want to deploy:

  ```sh
  $ git checkout <tag>
  ```
  
3. Run the setup script.

  ```sh
  $ ./setup.sh
  ```

## Update

1. Fetch the updated code:

  ```sh
  $ git fetch
  ```

2. Checkout the desired tag:

  ```sh
  $ git checkout <tag>
  ```

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

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_rstudio_server/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
