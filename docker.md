---
title: docker
layout: default
---

`docker version` - display docker version  

`docker image rm -f $(docker image ls -f reference='diamol/*' -q)1` - remove images  

### [docker container commands](https://docs.docker.com/engine/reference/commandline/container/)  
`docker container rm -f $(docker container ls -aq)` - remove containers  
`docker container run --interactive --tty <image>` - run container's shell  
`docker container ls` - list running containers  
`docker container top <id>` - shows processec in the container  
`docker container logs <id>` - shows logs
`docker container inspect <id>` - container details  






