#!/bin/bash

#hardcoded : widlfy path,module name,server credentials, credentials issue -- no need pass

USERNAME="masum"
PASSWORD="Masum!2345"
wildfy_home="/opt/alldata/wildfly-18.0.0.Final"
deploymnet_folder="$wildfy_home/standalone/deployments"
temp_folder="$wildfy_home/standalone/databackup"
temp_dir="$wildfy_home/standalone/databackup/temp"
application_xml="META-INF/application.xml"
xml_data="<module id="\"WAR.meveo.myproduct\""><web><web-uri>myproduct.war</web-uri> <context-root>/myproduct</context-root> </web></module>"

ear_file="meveo.ear"
new_ear_file="meveo.ear"
module_war_file="myproduct.war"

##-----------copy meveo.ear file into a temporary place-------------------------------------

mkdir -p "$temp_folder"
cp "$deploymnet_folder/$ear_file" "$temp_folder"

##-----------copy meveo.ear file into a temporary place-------------------------------------
unzip $temp_folder/$ear_file -d $temp_dir  >/dev/null 2>&1

cp $(pwd)/target/$module_war_file  $temp_dir/$module_war_file

sed -i "\#</application>#i \\\t$xml_data" "$temp_dir/$application_xml"

cd $temp_dir
zip -r ../$new_ear_file *  >/dev/null 2>&1

cd ..
rm -rf $temp_dir
echo "File copied inside the EAR file: $new_ear_file"
#----------------module war file & -module config  copy into a meveo.ear -----------------------
rm "$deploymnet_folder/$ear_file"
echo "File $file_name removed successfully."
   
#-------------------remveo meveo.ear file ---------------------
/$wildfy_home/bin/jboss-cli.sh --connect --command="reload"
#----------------------reload wildfy -----------------------------------
cp "$temp_folder/$ear_file" "$deploymnet_folder"
#------------deploymnet new meveo.ear file with module war file
rm -r $temp_folder
#remove databackup dir 

