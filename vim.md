---
title: Vim
layout: default
---
http://vimawesome.com/

*Pretty printing JSON in Vim*

:%!python -m json.tool

*copy paste*
:set paste / nopaste

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
#### close a buffer 
`:bd`  or `:bw`

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

#### add block commetn [from here](https://stackoverflow.com/questions/1676632/whats-a-quick-way-to-comment-uncomment-lines-in-vim)
- ` Ctrl-v` 
- select column  
- press  `Shift I`  
- add comment  
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
`:! {shell command}`

### toggle past
  `set past` 
  `set nopaste` 

### [resize window](https://vim.fandom.com/wiki/Resize_splits_more_quickly)
  `:res +5`  
  `:res -5`  

### [open a new winwow](https://dev.to/iggredible/using-buffers-windows-and-tabs-efficiently-in-vim-56jc)
 `:split /path/to/file`  

### [move cursor to another window](https://cs.oberlin.edu/~kuperman/help/vim/windows.html)
 `ctrl-w ctrl-w`

### registers
 `:reg` - list content of all registers  
 `"add` - delete line into register `a`  
 [`"pq`](https://vim.fandom.com/wiki/Pasting_registers) - past register `q`  

### copy past from one buffer to another or anything
  `"+2dd` - cut 2 lines  
  `"+2yy` - copy 2 lines 
  `"+p` - past line on the line after the cursor  
  `"+P` - past line on the line before the cursor

### [add empty line](https://vim.fandom.com/wiki/Quickly_adding_and_deleting_empty_lines)
  `1o<esc>` - add line after the cursor  
  `1O<esc>` - add line before the cursor  

