# Batch Connect - OSC RStudio Server

![GitHub Release](https://img.shields.io/github/release/osc/bc_osc_rstudio_server.svg)
[![GitHub License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

An interactive app designed for OSC OnDemand that launches an RStudio Server
within an Owens batch job.

## Prerequisites

This Batch Connect app requires the following software be installed on the
**compute nodes** that the batch job is intended to run on (**NOT** the
OnDemand node):

- [Lmod] 6.0.1+ or any other `module restore` and `module load <modules>` based
  CLI used to load appropriate environments within the batch job before
  launching the RStudio Server.

**without Singularity**

- [R] 3.3.2+ (earlier versions are untested but may work for you)
- [RStudio Server] 1.0.136+ (earlier versions are untested by may work for you)
- [PRoot] 5.1.0+ (used to setup fake bind mount)

**or with Singularity**

- [Singularity] 2.4.2+
- A Singularity image similar to [nickjer/singularity-rstudio]
- Corresponding module to launch the above Singularity image (see
  [example_module])

[R]: https://www.r-project.org/
[RStudio Server]: https://www.rstudio.com/products/rstudio-server/
[PRoot]: https://proot-me.github.io/
[Singularity]: http://singularity.lbl.gov/
[Lmod]: https://www.tacc.utexas.edu/research-development/tacc-projects/lmod
[nickjer/singularity-rstudio]: https://www.singularity-hub.org/collections/463
[example_module]: https://github.com/nickjer/singularity-rstudio/blob/master/example_module/

## Install

Use git to clone this app and checkout the desired branch/version you want to
use:

```sh
scl enable git19 -- git clone <repo>
cd <dir>
scl enable git19 -- git checkout <tag/branch>
```

You will not need to do anything beyond this as all necessary assets are
installed. You will also not need to restart this app as it isn't a Passenger
app.

To update the app you would:

```sh
cd <dir>
scl enable git19 -- git fetch
scl enable git19 -- git checkout <tag/branch>
```

Again, you do not need to restart the app as it isn't a Passenger app.

## Contributing

1. Fork it ( https://github.com/OSC/bc_osc_rstudio_server/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

* Documentation, website content, and logo is licensed under
  [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
* Code is licensed under MIT (see LICENSE.txt)o
* RStudio, Shiny and the RStudio logo are all registered trademarks of RStudio.
