# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.25.2] - 2023-01-09

- Use correct minimums for huge & large mem nodes in [114](https://github.com/OSC/bc_osc_rstudio_server/pull/114).

## [0.25.1] - 2023-01-09

- Allow for partial nodes huge & large mem nodes in [113](https://github.com/OSC/bc_osc_rstudio_server/pull/113).

## [0.25.0] - 2022-12-16

- Added c18 options back in [111](https://github.com/OSC/bc_osc_rstudio_server/pull/111).
- Use brwap instead of singularity in [112](https://github.com/OSC/bc_osc_rstudio_server/pull/112).

## [0.24.1] - 2022-10-08

- Removed c18 options in [110](https://github.com/OSC/bc_osc_rstudio_server/pull/110).

## [0.24.0] - 2022-12-01

- Added support for R/4.2.1 in [109](https://github.com/OSC/bc_osc_rstudio_server/pull/109).
- Fixed ascend's max cpu in [107](https://github.com/OSC/bc_osc_rstudio_server/pull/107).


## [0.23.2] - 2020-10-24

- Fixed min & max for ascend to be 88 instead of 96 in [106](https://github.com/OSC/bc_osc_rstudio_server/pull/106).

## [0.23.1] - 2020-10-24

- Fixed min & max for ascend and update form labels for R version in [105](https://github.com/OSC/bc_osc_rstudio_server/pull/105).

## [0.23.0] - 2020-10-20

- Added support for Ascend cluster in [104](https://github.com/OSC/bc_osc_rstudio_server/pull/104).

## [0.22.0] - 2020-06-16

### Added

- Added support for apptainer in [103](https://github.com/OSC/bc_osc_rstudio_server/pull/103).

### Changed

- [102](https://github.com/OSC/bc_osc_rstudio_server/pull/102) changed node selector to the new k8s pattern.

## [0.21.9] - 2020-02-09

### Fixed
- [99](https://github.com/OSC/bc_osc_rstudio_server/pull/99) disables R/4.1.0 in k8s even
  though it adds a lot of things to get 4.1.0 to work. See PR for details.

## 0.21.2 - 0.21.8

Lot's of PRs made quickly in this timeframe to get 4.1.0 to actually work with
Rstudio 2021.09. 

## [0.21.1] - 2022-01-21

### Fixed

- Fixed R `app_rstudio/4.1.0` module in [91](https://github.com/OSC/bc_osc_rstudio_server/pull/91).

## [0.21.0] - 2022-01-04

### Added

- Added R 4.1.0 in [89](https://github.com/OSC/bc_osc_rstudio_server/pull/89).

## [0.20.0] - 2012-12-15

### Changed

- Use OnDemand's built-in dynamic javascript in [87](https://github.com/OSC/bc_osc_rstudio_server/pull/87).

## [0.19.6] - 2012-08-27

### Changed

- `cluster` label is now `osc.edu/cluster` in [78](https://github.com/OSC/bc_osc_rstudio_server/pull/78)

## [0.19.5] - 2012-08-19

### Fixed
- [76](https://github.com/OSC/bc_osc_rstudio_server/pull/76) fixed an issue with classrooms where
  classrooms (the `version` attribute) was being hidden. Default now is to show everything and one
  has to explicitly set items to false for it to be hidden.

### Changed

- [75](https://github.com/OSC/bc_osc_rstudio_server/pull/75) Changed memory limits for hyperthreaded
  kubernetes nodes.

## [0.19.4] - 2021-08-18

### Fixed

- [73](https://github.com/OSC/bc_osc_rstudio_server/pull/73) fixed a bug where classrooms could not determine the
  current cluster for toggling email notifications.

## [0.19.3] - 2021-08-02

### Fixed

- classrooms can now start without the project space directories in [71](https://github.com/OSC/bc_osc_rstudio_server/pull/71).

## [0.19.2] - 2021-07-23

### Changed
- Changed the container image to 0.2.0 in [69](https://github.com/OSC/bc_osc_rstudio_server/pull/69)

## [0.19.1] - 2021-07-12

### Fixed
- Fixed classrooms to use the right Singularity home in [68](https://github.com/OSC/bc_osc_rstudio_server/pull/68).
- Fixed k8s clusters clearing the cores field in [66](https://github.com/OSC/bc_osc_rstudio_server/pull/66).

### Changed
- Simplified the title in [67](https://github.com/OSC/bc_osc_rstudio_server/pull/67).

## [0.19.0] - 2021-07-09

### Added
- [64](https://github.com/OSC/bc_osc_rstudio_server/pull/64) added support for kubernetes clusters.

## [0.18.1] - 2021-01-20
### Added
- [62](https://github.com/OSC/bc_osc_rstudio_server/pull/62) added the ability for
  classrooms to populate class materials  in the users' home directory if
  OSC_CLASS_FILES is set.

## [0.18.0] - 2021-01-20
### Changed
- [61](https://github.com/OSC/bc_osc_rstudio_server/pull/61) removed unused
  owens-slurm data attributes
- [60](https://github.com/OSC/bc_osc_rstudio_server/pull/60) changed the account field
  to be a select widget with only valid groups as options

### Added
- [56](https://github.com/OSC/bc_osc_rstudio_server/pull/56) aloows users to load modules
  within the rstudio-server session

## [0.17.0] - 2020-12-28
### Changed
- Removed owens-slurm cluster and torque related configs in
  [55](https://github.com/OSC/bc_osc_rstudio_server/pull/55)

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

[Unreleased]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.25.2...HEAD
[0.25.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.25.1...v0.25.2
[0.25.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.25.0...v0.25.1
[0.25.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.24.1...v0.25.0
[0.24.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.24.0...v0.24.1
[0.24.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.23.1...v0.24.0
[0.23.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.23.1...v0.23.2
[0.23.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.23.0...v0.23.1
[0.23.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.21.9...v0.22.0
[0.21.9]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.21.8...v0.21.9
[0.20.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.20.0...v0.20.1
[0.20.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.6...v0.20.0
[0.19.6]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.5...v0.19.6
[0.19.5]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.4...v0.19.5
[0.19.4]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.3...v0.19.4
[0.19.3]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.2...v0.19.3
[0.19.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.18.1...v0.19.0
[0.18.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.18.0...v0.18.1
[0.18.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.16.0...v0.17.0
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
