#!/bin/bash

echo "step----------------1-0--start"  >> script.log

wildfy_home="wildfypath"
deployment_folder="$wildfy_home/standalone/deployments"
temp_folder="$wildfy_home/standalone/databackup"

ear_file="meveo.ear"


#----------------module war file & -module config  copy into a meveo.ear -----------------------
rm "$deployment_folder/$ear_file*"
echo "File $file_name removed successfully."
   
echo "step ------remove old meveo.ear fie --la-- server reload start" >> script.log

#-------------------remveo meveo.ear file ---------------------
/$wildfy_home/bin/jboss-cli.sh --connect --command="reload"
#----------------------reload wildfy -----------------------------------
cp "$temp_folder/$ear_file" "$deployment_folder"
echo "step ----------------meveo.ear copy to deployment---1b" >> script.log

#------------deploymnet new meveo.ear file with module war file
rm -r $temp_folder


echo "step ------------deployment -----end-----1c----" >> script.log

