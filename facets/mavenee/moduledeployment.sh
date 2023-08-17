#!/bin/bash

echo "step----------------1-0--start"  >> script.log

wildfy_home="/opt/jboss/wildfy"
deployment_folder="$wildfy_home/standalone/deployments"
temp_folder="$wildfy_home/standalone/databackup"

ear_file="meveo.ear"


#----------------module war file & -module config  copy into a meveo.ear -----------------------
rm "$deployment_folder/$ear_file*"
echo "File $file_name removed successfully."
   
echo "step -----------------1 a server reload  start" >> script.log

#-------------------remveo meveo.ear file ---------------------
/$wildfy_home/bin/jboss-cli.sh --connect --command="reload"
#----------------------reload wildfy -----------------------------------
cp "$temp_folder/$ear_file" "$deployment_folder"
echo "step -----------------end---1 -b copy meveo  done" >> script.log

#------------deploymnet new meveo.ear file with module war file
rm -r $temp_folder
#remove databackup dir 


echo "step -----------------end-----1c----  done" >> script.log

