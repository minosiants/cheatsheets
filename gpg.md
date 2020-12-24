
---
title: gpg 
layout: default
---

[GNU Privacy Guard](https://www.gnupg.org/index.html)  
[Manual](https://www.gnupg.org/documentation/manuals/gnupg.pdf)  
[sbt-gpg plugin](https://github.com/sbt/sbt-pgp)  
[Quick'n easy gpg cheatsheet](http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/)  


`gpg --version` - shows verion  
`gpg --gen-key > filename.gpg` - generates a new key  
`gpg --keyserver keyserver.ubuntu.com --send-keys <key>` - sends fingerprint to the server 
`gpg --output public.pgp --armor --export username@email` - export public key to the file
`gpg --output private.pgp --armor --export-secret-key username@email` - export private key to the file
`gpg --delete-secret-key "User Name"` - delete secret key  
`gpg --delete-key "User Name"` - delete private key

