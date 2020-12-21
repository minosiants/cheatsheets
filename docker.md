---
title: docker
layout: default
---

[`Docker Engine`](https://docs.docker.com/engine/) is managment component of the Docker. It makes everything available throug REST Api  
`Universal Control Plane (UCP)` is now [Mirantis Kubernetes Engine](https://docs.mirantis.com/docker-enterprise/v3.0/dockeree-products/mke.html) - enterprise-grade cluster management solution  

`docker version` - display docker version  

`docker image rm -f $(docker image ls -f reference='diamol/*' -q)1` - remove images  

### [Docker container commands](https://docs.docker.com/engine/reference/commandline/container/)  
`docker container rm -f $(docker container ls -aq)` - remove containers  
`docker container run --interactive --tty <image>` - run container's shell  
`docker container ls (--all)` - list running containers  
`docker container top <id>` - shows processec in the container  
`docker container logs <id>` - shows logs  
`docker container rm --force $(docker container ls --all --quiet)` - remove containers  
`docker container inspect <id>` - container details
`docker exec -it <id> bash` - connect to the running container  
`docker container cp index.html 86b:/usr/local/apache2/htdocs/index.html` - replace file with new `index.html`  
[cp command](https://docs.docker.com/engine/reference/commandline/container_cp/)  
#### [example of the running process in the backgrount and attached ports](https://docs.docker.com/engine/reference/commandline/container_run/)
`docker container run --detach --publish 8088:80 diamol/ch02-hello-diamol-web`  







