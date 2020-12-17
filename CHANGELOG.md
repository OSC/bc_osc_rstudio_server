# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
## [0.16.0] - 2020-11-18
### Fixed
- Some misspellings [50](https://github.com/OSC/bc_osc_rstudio_server/pull/50)

### Added
- Added the owens-slurm cluster to begin migrating Owens to Slurm in 
  [51](https://github.com/OSC/bc_osc_rstudio_server/pull/51).

## [0.15.1] - 2020-09-21
### Fixed
- [49](https://github.com/OSC/bc_osc_rstudio_server/pull/49)
  - broken links in help message
  - scheduling on owens hugemem
  - versions now show in production deployments

## [0.15.0] - 2020-09-21
### Changed
- PR [48](https://github.com/OSC/bc_osc_rstudio_server/pull/48) pitzer-exp merged into
  the pitzer cluster
  - Removed pitzer-exp as an option.
  - Created new node type pitzer options to accommodate pitzer-exp merging into
    pitzer
  - Changed the help text for node types
  - logic for handling submitting blank cores is again in the submit.yml.erb
    instead of the javascript.

## [0.14.0] - 2020-08-27
### Added
- support for owens, pitzer and pitzer expansion clusters
  - Added javascript to toggle the select options (node_type and version
    availability are different across clusters).
  - PR [45](https://github.com/OSC/bc_osc_rstudio_server/pull/45) merged
    this app with pitzer
  - PR [46](https://github.com/OSC/bc_osc_rstudio_server/pull/46) added
    the pitzer expansion cluster

### Changed
- javascript now populates the num_cores if it's blank (instead of populating
  in the submit.yml.erb).
- min/max number of cores available for a given node type are now found in the
  data attributes instead of being purely defined in javascript.
- min cores is 1 instead of 0.

## [0.13.0] - 2020-07-31
### Added
- added R module 4.0.2

### Fixed
- toggle_visibility now kicks out of the element to toggle is not found. This is when we try
  to toggle tutorials in a reconfigured app (stat.osc.edu) that does not have the tutorial checkbox

## [0.12.4] - 2020-07-16
### Fixed
- Fixed a bug where Rstudio could not create $HOME/.rstudio. We're now back to the rstudio_launcher/centos7
  module where we mount /etc entirely.

## [0.12.3] - 2020-07-13
### Fixed
- Specify TZ to get rid of warnings in Sys.timezone() [#39](https://github.com/OSC/bc_osc_rstudio_server/pull/39)

## [0.12.2] - 2020-07-10
### Changed
- Create a markdown file in a class directory [#38](https://github.com/OSC/bc_osc_rstudio_server/pull/38)

## [0.12.1] - 2020-07-10
### Fixed
- Create SINGULARTIY_HOME in case it doesn't already exist

## [0.12.0] - 2020-07-09
### Changed
- Changed the way tutorials change HOME directory from mounting the
  session (the old way) to changing SINGULARITY_HOME (the new way).
  This is to support the stragey classes will use 
  [#36](https://github.com/OSC/bc_osc_rstudio_server/pull/36).

## [0.11.7] - 2020-06-19
### Changed
- Workshop materials are loaded for 3.6.1 and 3.6.3 from their respective
  directories
- RPM writes out version file so it can be shown in the UI

## [0.11.6] - 2020-05-22
### Changed
- Workshop materials are available for 3.6.1 and 3.6.3.

## [0.11.5] - 2020-05-20
### Changed
- removed the way env gets written and read. It didnt work due to wrong paths and
  when it could find the file, it is not formatted correctly besides.

### Added
loads R_LIBS_SITE environment variable if it is set.

## [0.11.4] - 2020-03-31
### Fixed
- Fixed switch statement in submit

## [0.11.3] - 2020-03-30
### Fixed
- submit.yml.erb actually submits to gpu nodes.

## [0.11.2] - 2020-03-25
### Added 
- R version 3.6.3 can now use GPU nodes

## [0.11.1] - 2020-03-24
### Changed
- Gitlab ci uses clone instead of fetch

## [0.11.0] - 2020-03-24
### Added
- Added R version 3.6.3 which is now a module supplied by SciApps that has all the dependencies

### Changed
- Moved texlive module to the form.yml because moving forward it is being included in the 
  module itself.

## [0.10.0] - 2020-01-13
### Added
- Added loading the `texlive` module so users can create and save Markdown R files.

## [0.9.1] - 2020-01-02
### Fixed
- Fixed bug where workshop mode would not be activated when requested

### Changed
- Changed label for workshop mode to better describe the sandbox

## [0.9.0] - 2020-01-02
### Added
- Added JS to ensure that the tutorial control is only shown if R version 3.6.1 is selected
- Workshop mode sets a custom `R_LIBS_USER`

## [0.8.8] - 2019-12-20
### Fixed
- Fix breaking changes with the way Singularity 3.5.x handles environment variables

## [0.8.7] - 2019-12-17
### Fixed
- Fixed bug which prevented running simultaneous tutorial sessions

## [0.8.6] - 2019-12-09
### Fixed
- Fixed bug where RStudio's history was not cleared when tutorial mode was selected

## [0.8.5] - 2019-12-04
### Added
- Added R 3.6.1
- Added controls to access tutorial materials

## [0.8.4] - 2019-10-11
### Changed
- Removed hardcoded fix that shadowed the module variables

## [0.8.3] - 2019-10-10
### Fixed
- Fixed crash relating to duplicate bind mounts including `/etc` caused by OSC `singularity.conf`

## [0.8.2] - 2019-06-28
### Added
- Added import of xalt to improve software metrics

### Fixed
- Fixed incompatibilities with older R's and newer Intels

## [0.8.1] - 2019-06-26
### Fixed
- Fixed load ordering of mkl module

## [0.8.0] - 2019-06-18
### Added
- Added R 3.6.0

## [0.7.0] - 2019-04-26
### Changed
- Changed Intel compiler version from 16.0.3 to 18.0.3

## [0.6.2] - 2018-02-21
### Changed
- Replace the Proot dependency with Singularity

### Fixed
- Fix the PPN frontend behavior to permit a blank field

## [0.6.1] - 2018-01-09
### Added
- JS to enforce the PPN limits per node type

## [0.6.0] - 2018-08-02
### Added

- A method to optionally set non-standard versions of R to be used with RStudio Server.
- Added R 3.5.0 as an option

## [0.5.0] - 2018-04-18
### Added
- Added debug queue as an option.
- Users can now specify number of cores on the node.

### Changed
- Changed server timeout to 120 seconds to account for running on shared node.

## [0.4.0] - 2018-03-28
### Added
- Add support for using a Singularity image.

### Changed
- Changed "Account" label to "Project".
- Changed icon that appears in the "Connect" button.

## [0.3.0] - 2018-01-31
### Added
- Added support for R 3.4.2 alongside 3.3.2 on Owens.
  [#3](https://github.com/OSC/bc_osc_rstudio_server/issues/3)

### Updated
- Updated the date in `LICENSE.txt`.

### Security
- Fixed permissions on generated script with env vars inside.

## [0.2.1] - 2017-10-20
### Changed
- Moved account input field to top of form.

## [0.2.0] - 2017-10-17
### Added
- Wrapper script used to launch `rsession` in similar environment as original
  batch job. [#8](https://github.com/OSC/bc_osc_rstudio_server/issues/8)

### Changed
- Modified app to take advantage of ERB templates in updated Dashboard.

### Fixed
- Removed need for message to user about waiting for server to start.
  [#6](https://github.com/OSC/bc_osc_rstudio_server/issues/6)

## [0.1.1] - 2017-10-11
### Changed
- Changed the `CHANGELOG.md` formatting.

### Removed
- Removed number of nodes option.
  [#7](https://github.com/OSC/bc_osc_rstudio_server/issues/7)

## [0.1.0] - 2017-06-14
### Changed
- Refactored for the new Batch Connect app API.

## [0.0.2] - 2017-05-02
### Changed
- Set `proot` as an external dependency.
- Use system-installed `proot`.

## 0.0.1 - 2017-01-20
### Added
- Initial release!

[Unreleased]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.16.0...HEAD
[0.16.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.15.1...v0.16.0
[0.15.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.12.3...v0.13.0
[0.12.3]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.12.2...v0.12.3
[0.12.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.7...v0.12.0
[0.11.7]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.6...v0.11.7
[0.11.6]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.5...v0.11.6
[0.11.5]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.4...v0.11.5
[0.11.4]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.3...v0.11.4
[0.11.3]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.2...v0.11.3
[0.11.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.1...v0.11.2
[0.11.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.11.0...v0.11.1
[0.11.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.10.1...v0.11.0
[0.10.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.9.1...v0.10.0
[0.9.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.8...v0.9.0
[0.8.8]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.7...v0.8.8
[0.8.7]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.6...v0.8.7
[0.8.6]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.5...v0.8.6
[0.8.5]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.4...v0.8.5
[0.8.4]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.3...v0.8.4
[0.8.3]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.0.1...v0.0.2
