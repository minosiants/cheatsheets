---
title: ssh
layout: default
---




## add ssh connection 

Add entry into `~/.ssh/config`

```

Host dev
    IgnoreUnknown UseKeychain
    Hostname  remote-hostname
    PubkeyAuthentication yes
    # UseKeychain yes
    AddKeysToAgent yes
    IdentityFile ~/.ssh/file_rsa
    IdentitiesOnly yes


```
`scp ./file_rsa.pub username@remote-hostname:~/.ssh` copy pub key to remote server  


`ssh-copy-id -i ~/.ssh/id_rsa user@remote-hostname`  add pub key to remote server   


## Problems
 - [ssh: connect to host github.com port 22: Connection timed out](https://stackoverflow.com/questions/15589682/ssh-connect-to-host-github-com-port-22-connection-timed-out)   

