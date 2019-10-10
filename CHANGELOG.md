# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
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

[Unreleased]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.8.3...HEAD
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
