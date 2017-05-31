#!/bin/bash -l

# Get current working directory
export OUTPUT_ROOT="${PWD}"

# Get source directory of this script
export STAGED_ROOT="$(dirname "$(readlink -f "${BASH_SOURCE[0]}")")"

# Set working directory to home directory
cd "${HOME}"

#
# Start RStudio Server
#

# Restore the module environment to avoid conflicts
module restore

# Load the require modules
module load ${R_MODULE}
module load ${RSTUDIO_MODULE}

# Launch the RStudio Server
echo "Starting up rserver..."
${PROOT_PATH} -b ${TMPDIR}:/tmp rserver --www-port ${port} --auth-none 0 --auth-pam-helper-path "${STAGED_ROOT}/bin/auth" --auth-encrypt-password 0
