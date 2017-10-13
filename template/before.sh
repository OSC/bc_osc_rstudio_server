# Find available port to run server on
port=$(find_port)

# Define a password and password file used for authentication
password="$(create_passwd 12)"
export PASSWORD_FILE="${PWD}/passwd"

# Create password file used by RStudio Server
(umask 077 && echo "${password}" > "${PASSWORD_FILE}")
