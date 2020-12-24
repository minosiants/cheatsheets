
---
title: command line
layout: default
---
[the art of command line](https://github.com/jlevy/the-art-of-command-line)  
### find top larges directories  
[du -hs * | sort -rh | head -5](https://www.tecmint.com/find-top-large-directories-and-files-sizes-in-linux/)  
### clipboard
[`cat ~/Desktop/ded.html | pbcopy`](https://apple.stackexchange.com/questions/15318/how-to-use-terminal-to-copy-a-file-to-the-clipboard#15322) - Mac copy to clipboard  
`pbpaste > ~/Documents/ded.html` -  Mac past from clipboard  
[`xclip -sel c < file`](https://unix.stackexchange.com/questions/211817/copy-the-contents-of-a-file-into-the-clipboard-without-displaying-its-contents#211826) - Linux copy to clipboard  
`file | xclip -sel c` - Linux past from clipboard  


