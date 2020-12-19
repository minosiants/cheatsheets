---
title: docker
layout: default
---

`docker version` - display docker version  

`docker image rm -f $(docker image ls -f reference='diamol/*' -q)1` - remove images  

### [Docker container commands](https://docs.docker.com/engine/reference/commandline/container/)  
`docker container rm -f $(docker container ls -aq)` - remove containers  
`docker container run --interactive --tty <image>` - run container's shell  
`docker container ls (--all)` - list running containers  
`docker container top <id>` - shows processec in the container  
`docker container logs <id>` - shows logs  
`docker container inspect <id>` - container details
#### (example of the running process in the backgrount and attached ports](https://docs.docker.com/engine/reference/commandline/container_run/)
`docker container run --detach --publish 8088:80 diamol/ch02-hello- diamol-web`  
`docker container rm --force $(docker container ls --all --quiet)` - remove containers  

`[Docker Engine](https://docs.docker.com/engine/)` is managment component of the Docker. It makes everything available throug REST Api  

`Universal Control Plane (UCP) is now [Mirantis Kubernetes Engine](Mirantis Kubernetes Engine. MKE)` - enterprise-grade cluster management solution  





