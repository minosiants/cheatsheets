---
title: docker
layout: default
---

Command line interface
----------------------

https://github.com/wsargent/docker-cheat-sheet

Quick install on a server:

    $ curl -s https://get.docker.io/ubuntu/ | sudo sh

To pull from docker's registry:

    $ docker pull "ubuntu"

To build from your own `Dockerfile`:

    $ docker build -t "app/container_name" .

To run:

    $ docker run "app/container_name" [command and args]
      -i -t                # Interactive mode + pseudo-TTY
      -e ENVVAR=value      # Environment vars
      -p 4444              # Expose a port (??)
      -d                   # Detached mode

    $ docker run -t "ubuntu" -i bash

Ubuntu Install
-----------

    http://docs.docker.io/installation/ubuntulinux/

Proxy
-----------
export http_proxy=

/etc/default/docker.io

sudo service docker.io restart



Giving non-root access
-----------
    
    $ sudo groupadd docker
    $ sudo gpasswd -a ${USER} docker
    $ sudo service docker restart

Managing
--------

Manage images:

    # List images
    $ docker images
    REPOSITORY   TAG        ID
    ubuntu       12.10      b750fe78269d
    me/myapp     latest     7b2431a8d968

    # Delete an image
    $ docker rmi b750fe78269d

Manage processes:

    $ docker ps
    $ docker kill $ID
    $ docker rmi $ID

Work around docker rm unmount: [issue](https://github.com/dotcloud/docker/issues/3786#issuecomment-33471966)
    umount -l $(grep 'aufs' /proc/mounts | awk '{print$2}' | sort -r)

Clean command: [issue](https://github.com/dotcloud/docker/issues/928)
    docker rm `docker ps -aq`
    https://github.com/blueyed/dotfiles/blob/master/usr/bin/docker-cleanup

    

Manage containers:

Updating containers
-------------------

    $ docker commit "app/container_name" -m "Change stuff"

More
----

Start a worker

    # Start a very useful long-running process
    JOB=$(docker run -d ubuntu /bin/sh -c "while true; do echo Hello world; sleep 1; 
        done")

    # Collect the output of the job so far
    docker logs $JOB

    # Kill the job
    docker kill $JOB

Resources
---------

 * http://www.docker.io/gettingstarted/
 
Boot2docker
------------
proxy settings [stackoverflow](http://stackoverflow.com/questions/24489265/docker-boot2docker-set-http-https-proxies-for-docker-on-osx)
        
        docker@boot2docker:~$ sudo vi /var/lib/boot2docker/profile
        export HTTP_PROXY=http://your.proxy.name:8080
        export HTTPS_PROXY=http://your.proxy.name:8080
        
        sudo /etc/init.d/docker restart

        or put proxy settings into
        docker@boot2docker:~$ vi ~/.profile

        
        
        

