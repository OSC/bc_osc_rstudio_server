# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[Unreleased]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.0.2...v0.1.0
[0.0.2]: https://github.com/OSC/bc_osc_rstudio_server/compare/v0.0.1...v0.0.2
