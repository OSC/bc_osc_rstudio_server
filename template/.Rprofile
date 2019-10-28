tutorials_root <- function() {
    path = path.expand(Sys.getenv("TUTORIALS_ROOT"))
    if( path == "" ) { stop("TUTORIALS_ROOT is not set") }
    path
}

source_regular_rprofile <- function() {
    user_rprofile = path.expand("~/.Rprofile")
    if( file.exists(user_rprofile) ) {
        source(user_rprofile)
    }
}

## Main ##
# Attempt to load the user's regular .Rprofile
# source_regular_rprofile()  # Shameema prefers that we do NOT source the user's Rprofile
# Correct the working directory
setwd(tutorials_root())
# Prevent these functions from cluttering the user's environment
rm(tutorials_root, source_regular_rprofile)
