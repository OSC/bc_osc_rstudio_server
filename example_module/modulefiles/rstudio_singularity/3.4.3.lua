help([[
This module loads the RStudio Server environment which utilizes a Singularity
image for portability.
]])

whatis([[Description: RStudio Server environment using Singularity]])

local root = "/users/appl/jnicklas/ondemand/dev/bc_osc_rstudio_server/example_module"
local bin = pathJoin(root, "/bin")
local img = pathJoin(root, "/3.4.3/singularity-rstudio.simg")
local library = pathJoin(root, "/library-3.4")
local host_fs = "/mnt"

local user_library = os.getenv("HOME") .. "/R/library-3.4"

prereq("singularity")
prepend_path("PATH", bin)
setenv("RSTUDIO_IMAGE", img)
setenv("SINGULARITY_HOST_FS", host_fs)
setenv("SINGULARITY_BINDPATH", library .. ":/usr/local/lib/R/site-library,/:" .. host_fs)
setenv("SINGULARITY_CONTAIN", "1")
setenv("SINGULARITY_HOME", os.getenv("HOME"))
setenv("R_LIBS_USER", pathJoin(host_fs, user_library))
