#!/bin/bash
 
export MAX=0.0 # Any amplitude greater than this will NOT be listed
OutList=output.list # The name of the file that contains a
# list of file names only of all the
# low-amplitude files.
 
for EACH in ../patterns/*mp3
do
  export AMPLITUDE=$(sox "$EACH" -n stat 2>&1 | grep "Maximum amplitude" | cut -d ":" -f 2 | sed 's/ //g')
  if [[ $(echo "if (${AMPLITUDE} > ${MAX}) 1 else 0" | bc) -eq 0 ]]
  then 
    echo $EACH
  fi
done
