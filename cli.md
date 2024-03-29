
---
title: command line  
layout: default  
---
[the art of command line](https://github.com/jlevy/the-art-of-command-line)  
[awesome-cheatsheets Bash](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/languages/bash.sh)  

### find top larges directories  
[du -hs * | sort -rh | head -5](https://www.tecmint.com/find-top-large-directories-and-files-sizes-in-linux/)  
### clipboard
[`cat ~/Desktop/ded.html | pbcopy`](https://apple.stackexchange.com/questions/15318/how-to-use-terminal-to-copy-a-file-to-the-clipboard#15322) - Mac copy to clipboard  
`pbpaste > ~/Documents/ded.html` -  Mac past from clipboard  
[`xclip -sel c < file`](https://unix.stackexchange.com/questions/211817/copy-the-contents-of-a-file-into-the-clipboard-without-displaying-its-contents#211826) - Linux copy to clipboard  
`file | xclip -sel c` - Linux past from clipboard  



[`sudo disktutil eraseDisk exFat Untitled /dev/disk2`](https://itgirl.tech/2019/08/30/format-usb-drive-mac-terminal/) - format disk on Mac

`cat *.txt > out.txt` - combine all files into one   
`ffmpeg -loop 1 -i image.png -i fullbook.mp3 -c:a copy -c:v libx264 -shortest fullbook.mp4` - convert audio to video    

## Shell history

  `sudo !!` - run the last command as root  
  `id sam` - user info  
  `!<string>` - repead the last command that started with a given string  

  ```
    $ whoami 
    $ uptime
    $ !u
    $ sudo !w
  ```
  `!^` - resue the second word (first argument) from the previous command  

  ```
  $ host www.google.com 8.8.8.8
  $ ping -c1 !^
  ping -c1 www.google.com 
  ```
  `!$` - reuse the last word (last argument) from the previous command  
  ```
    $ unzip tpsreport.zip
    $ rm !$
  ```
  `!!:N` - reuse the Nth word from a privous command  
  
  `^<string1>^<string2>^` - repeat the previous comman while substituting a string  
  ```
   $ grpe jason /etc/passwd 
   $ ^pe^ep
   grep jason /etc/passwd 
  ```
  `!#:N` - reference a word of the current command and reuse it  
  ```
   $ mv Working-with-Files.pdf Chapter-18-!#:1
  ```
  ` script ` - save a copy of your command line session  

  `$ history | awk '{print $2}' | sort | uniq -c | sort -rn | head` - find which command you use most often  
   `history -c` - clear shell history  
   
## Text Procession an Manipulation

  `grep -E -v "^#|^$" file`  - strip out comments and blank lines  
  
  `column -t` - display output in a table
  ```
   $ alias ct='column -t'
   $ command | ct
  ```

  [copy output into clipboard](https://bit.ly/3sEb8ph)

  `cat file | xclip` - copy
  `xclip -o` - past 

  (handy to have `aliases`)
  ```
  alias "c=xclip"
  alias "v=xclip -o"

  ```


  `readlink -f <filename>` - prints full filename path  

