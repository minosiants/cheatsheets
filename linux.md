---
title: linux
layout: default
---

https://github.com/alebcay/awesome-shell

https://github.com/jlevy/the-art-of-command-line


Network Share Via Samba [source](http://goo.gl/3lGT8V)
----------------------	
	###Procedures
		sudo smbpasswd -a <user_name>
		mkdir /home/<user_name>/<folder_name>
		sudo cp /etc/samba/smb.conf ~
		sudo nano /etc/samba/smb.conf
		
		[<folder_name>]
		path = /home/<user_name>/<folder_name>
		available = yes
		valid users = <user_name>
		read only = no
		browseable = yes
		public = yes
		writable = yes	

		sudo restart smbd
		testparm

mount with sshfs
----------------------	
	####remote part should have ssh server
	sudo apt-get install openssh-server
	
	sshfs kaspar@IP:/home/kasparfolder /home/kaspar/folder
		

wifi
----------------------	
http://ubuntuforums.org/showthread.php?t=2200496


Changing DNS Settings in Linux
----------------------	
edit 
```
/etc/resolvconf/resolv.conf.d/base
```
add
```
nameserver 8.8.8.8
nameserver 8.8.4.4
```
Backup the current configuration file, by running:
```
sudo mv /etc/resolv.conf /etc/resolv.conf.backup
```
Link to the new resolvconf configuration file, by running:
```
sudo ln -s /run/resolvconf/resolv.conf /etc/resolv.conf
sudo resolvconf -u
```

Restart network services by running:

```
sudo /etc/init.d/networking restart
```
Version of Linux

```
uname -or
```
Tail files

```
tail -f | less +F
```










### Applications and tools
 - [foliate](https://johnfactotum.github.io/foliate/) - epub reader  




