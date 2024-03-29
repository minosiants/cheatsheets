
---
title: Testcontainers 
layout: default
---

https://www.testcontainers.org

### Generic container sample - aerospike

```
    val imageName = DockerImageName.parse("aerospike:3.15.1.4")
    val container= new GenericContainer(imageName)
    container.withExposedPorts(3000, 3001, 3002)
    container.withCommand("--config-file", "/opt/aerospike/etc/aerospike.conf")
    container.withClasspathResourceMapping("aerospike.conf", "/opt/aerospike/etc/aerospike.conf", BindMode.READ_ONLY)
    container.setWaitStrategy(Wait.forLogMessage(".*migrations: complete.*", 1))
    
    lazy val ip = container.getContainerIpAddress
    lazy val aerospikeHosts =
      s"$ip:${container.getMappedPort(3000)},$ip:${container.getMappedPort(3001)},$ip:${container.getMappedPort(3002)}"


```

