#!/bin/bash

COMSOL_COMMAND=$*

# defaults
INPUTFILE=""
NODES=1
PPN=1
WALLTIME=01:00:00

# parse # procs, # nodes, walltime
while (($#)); do
    case "$1" in
    -inputfile)
        shift
        if [ $# -eq 0 ]; then
            echo "ERROR: Missing argument after -inputfile argument." 1>&2
            exit 1
        fi
        INPUTFILE="$1"
        shift
        ;;
    -np)
        shift
        if [ $# -eq 0 ]; then
            echo "ERROR: Missing argument after -np argument." 1>&2
            exit 1
        fi
        PPN="$1"
        shift
        ;;
    -nn)
        shift
        if [ $# -eq 0 ]; then
            echo "ERROR: Missing argument after -nn argument." 1>&2
            exit 1
        fi
        NODES="$1"
        shift
        ;;
    -walltime)
        shift
        if [ $# -eq 0 ]; then
            echo "ERROR: Missing argument after -walltime argument." 1>&2
            exit 1
        fi
        WALLTIME="$1"
        shift
        ;;
    *)
        shift
        ;;
    esac
done

# call qsub
qsub -N "$PBS_JOBNAME/run!" -l nodes=$NODES:ppn=$PPN -l walltime=$WALLTIME -j oe -m be << __EOF__
cd \$PBS_O_WORKDIR

# some debugging info
echo "Original comsol command:"
echo "$COMSOL_COMMAND"
echo ""

# copy over previous environment
export LM_LICENSE_FILE=$LM_LICENSE_FILE
export PATH=$PATH

# run the comsol app in multinode environment
$COMSOL_COMMAND -f <(cat \$PBS_NODEFILE | uniq) -mpirsh rsh

# copy app when done to applications/ root
ln $INPUTFILE $COMSOL_PREFSDIR/applications/.
__EOF__
