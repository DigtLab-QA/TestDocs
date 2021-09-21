#!/bin/bash 

readarray -d '' namesYml < <(find -maxdepth 1 -type d | cut -c 3- | sort -n)

for i in ${namesYml[@]}
	do
		folders+="'"$i"',"
	done

folders=${folders::-1}
number=$(grep -n forcedNavOrder config.js | head -1 | cut -d: -f 1)
nums=$number's'
fullstring="forcedNavOrder["$folders"],"
sudo sed -i -e "$nums;""forcedNavOrder.*;$fullstring;" config.js
