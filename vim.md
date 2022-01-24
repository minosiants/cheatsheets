---
title: Vim
layout: default
---
http://vimawesome.com/  
[awesome-cheatsheets](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/vim.txt)  
[vim find replace](https://linuxize.com/post/vim-find-replace/)
[copy and paste](https://linuxize.com/post/how-to-copy-cut-paste-in-vim/)  

`y$`        - copy from cursor till end of the line  
`xp`        - swap to letters  
`d t x`     - delete till x   
`:m -2`     - move line 1 line above  
`:e path/to/file` - open file for editing in new buffer   
`:b 1`            - buffers navigation  
`:bd` or `:bw`    - close a buffer   
`:noh`                  - clear search highlight  
`gx`                    - open under cursor link in browser  
`gf`                    - open file under cursor (go to file)  
`*`                     - serch forward  
`#`                     - search backward   
`Ctrl + o` `Ctrl + i`   - jump back and forward 
`dat`                   - [delete the whole tag](https://stackoverflow.com/questions/23698555/cut-or-yank-an-entire-tag-in-vim)   
`/`                    - search word under cursor
`u`         - undo
`U`         - undo all changes on the line
`Ctrl + r`  - redo 
`Ctrl + w`
`Ctrl + g`             - display files name 
`b`         - back to the workd beginning  
`e`         - to the words end  

`dawbP`         -  swap words [swapping](https://vim.fandom.com/wiki/Swapping_characters,_words_and_lines#Related_plugins)  
`:! {shell command}`      - run shell command  
`set past` `set nopaste`  - toggle past   
`:res +5`  `:res -5`      -  [resize window](https://vim.fandom.com/wiki/Resize_splits_more_quickly)   
`:split /path/to/file`    - [open a new winwow](https://dev.to/iggredible/using-buffers-windows-and-tabs-efficiently-in-vim-56jc)  
`ctrl-w ctrl-w`           - [move cursor to another window](https://cs.oberlin.edu/~kuperman/help/vim/windows.html)  
`:40vs +Ex`               - open explorer in a vertical split    
`caw`                     - change around word. Changes the word your cursor is in.
`ds”`                     - delete surrounding double quotes.
`yi[`                     - yank inside square brackets.

vat = select around tag.
##### find and replace string
`:s/search/replace/g` - once  
`:8,10 s/search/replace/g ` - range  
`:%s/search/replace/g` - entire file   

##### save read-only files [article](https://catonmat.net/sudo-vim)  
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

