
[awesome cheatsheet](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/git.sh)  
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
  `git branch -D <localBranchName>` - delete a local branch  
  `git push origin --delete <remoteBranchName>` - delete remote brach   
  three way `merge` create `new commit` at the merge point    
  `git fast forvad merge` does not create a merge commit  
  `git --all --graph --oneline` shows graph of branches commits    
  `git checkout -b bugfix v1.2.7` checkout branch based on tag    
  `git remote show origin` - remote show origin to see some details about remote  
  `git revert <ref>` - creates new commit removing `ref` commit   
  `git reset` - has three modes `soft` `mixed` `hard`    
  `git reset --soft <ref>` - moves `HEAD` to `<ref>`  
  `git reset --mixed <path>` - defaut `reset` behavior. Removes files from the `stage` and moves `HEAD`  
  `git reset --hard <ref> ` - Updates `HEAD` and stage with the content of the target  `ref`  
  `git diff --name-only --cached` - shows staged files
   [`gir rm file.txt`](https://stackoverflow.com/questions/2047465/how-can-i-delete-a-file-from-a-git-repository) - removes file

## Git comfiguration
  types: `system` , `user`, `repository local`  
  `git config --list` - list all config content  
  `git config --show-origin user.email` - shows config value  
  `.gitattributes` - config type of files

## [Signing Your Work](https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work)  
  `git config --global commit.gpgsign true`   
## [Enabling `gpg-agent`](https://shameerarathnayaka.wordpress.com/2016/07/13/how-to-enable-gpg-agent-to-cache-passphrase-on-mac-os-x/)
  [gpg-agent](https://linux.die.net/man/1/gpg-agent)  
  * `brew install gnupg`  
  * add [`gpg-agent`](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/gpg-agent) to `.zshrc`
  * create `~/.gnupg/gpg-agent.conf` and add   
  ```
  default-cache-ttl 600
  max-cache-ttl 7200
  pinentry-program /usr/local/bin/pinentry
  allow-preset-passphrase
  ```
## Make sbt release signed   
  [add `releasePublishArtifactsAction`](https://github.com/sbt/sbt-release#publishing-signed-releases)    
