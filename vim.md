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
`:s/search/replace/g` - once
`:8,10 s/search/replace/g ` - range
`:%s/search/replace/g` - entire file 

#### clear search highlight
`:noh`

##### save read-only files
[article](https://catonmat.net/sudo-vim)

`:w !sudo tee % >/dev/null`

#### replace text in column mode
- ` Ctrl-v` 
- select column text
- press `c`
- type new text 
- press `esc`

#### open under cursor link in browser
`gx` 

#### open file under cursor
`gf` (go to file) 

#### search word under cursor
- `/`
- `Ctrl + r`
- `Ctrl + w`
or 
`*` serch forward  
`#` search backward   

#### jump back and forward 
`Ctrl + o` `Ctrl + i` 

#### spwap words 
`dawbP` [swapping](https://vim.fandom.com/wiki/Swapping_characters,_words_and_lines#Related_plugins)  

### run shell command
`:! {shell command`

### toggle past
  `set past` 
  `set nopaste` 
