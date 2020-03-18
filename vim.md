---
title: Vim
layout: default
---
http://vimawesome.com/

*Pretty printing JSON in Vim*

:%!python -m json.tool

*copy past*
:set past / nopaste

##### swap to letters
`xp`

##### delete till x 
` d t x`

##### move line 1 line above
` :m -2`

##### open file for editing in new buffer 
`:e pat/to/file`

##### buffers navigation
`:b 1`

##### find and replace string
`:s/<search_string>/<replace_string>/g`

##### save read-only files
[article](https://catonmat.net/sudo-vim)

`:w !sudo tee % >/dev/null`
