#!/bin/bash

wildfy_home="wildfypath"
deployment_folder="$wildfy_home/standalone/deployments"
temp_folder="$wildfy_home/standalone/databackup"
ear_file="meveo.ear"

#-------------------remveo meveo.ear file -----------------------------
rm "$deployment_folder/$ear_file*"
#----------------------reload wildfy -----------------------------------
/$wildfy_home/bin/jboss-cli.sh --connect --command="reload"
#---------------------copy meveo.ear filec #-deploymnet new meveo.ear---
cp "$temp_folder/$ear_file" "$deployment_folder"
#------------remove temporary file--------------------------------------
rm -r $temp_folder



