---
title: linux
layout: default
---

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


