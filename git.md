
[git-extras](https://github.com/visionmedia/git-extras)  
[gitignore](https://gitignore.io)  
[git-sizer](https://github.com/github/git-sizer)  
[git cheat-sheet](https://gist.github.com/davfre/8313299)  
## Git commands

  `git init` - makes folder to git repo  
  `remote` - connect local repo with remote   
  `git status` - the state of the workspace   
  `git log --oneline -n 2` - shows only 2 last commits  
  `git commit –amend -m  "ADD Feature X, with docs"` - change last commit  
  `git restore .` - make files untracked    
  `.gitegnore`  `!images/*.png` will include png from images folder  
  `git diff <commit1> <commit2>` - shows different between commits  
  `cat .git/refs/heads/<branch name >` - sha of the commit it points to  
  `git branch my-branch master` - creats my-branch  
  `git branch` - shows local branches  
  `git branch --remote` - shows remote branches  
  three way `merge` create `new commit` at the merge point    
  `fast forvad merge` does not create a merge commit  
  `git --all --graph --oneline` shows graph of branches commits    
  `checkout -b bugfix v1.2.7` checkout branch based on tag    
  `git remote show origin` - remote show origin to see some details about remote  
  `git revert <ref>` - creates new commit removing `ref` commit   
  `git reset` - has three modes `soft` `mixed` `hard`    
  `git reset --soft <ref>` - moves `HEAD` to `<ref>`  
  `git reset --mixed <path>` - defaut `reset` behavior. Removes files from the `stage` and moves `HEAD`  
  `git reset --hard <ref> ` - Updates `HEAD` and stage with the content of the target  `ref`  
  `git diff --name-only --cached` - shows staged files


## Git comfiguration
  types: `system` , `user`, `repository local`  
  `git config --list` - list all config content  
  `git config --show-origin user.email` - shows config value  
  `.gitattributes` - config type of files

## Git others
  [git-sizer](https://github.com/github/git-sizer)  


  




   
