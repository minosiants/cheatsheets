---
title: cntlm
layout: default
---


`cntlm -H -u username -d domainname`  - generates hashes for your password  
`cntlm -M http://google.com` - check if it works  


### config file `/etc/cntlm.conf`

```
Username        username
Domain		      admsk
Auth            NTLMv2
PassNTLMv2      EE4EC315B0594F9665D20C7D65C8B
Proxy           proxy_url:3131
NoProxy		localhost, 127.0.0.*, 10.* 
Listen          localhost:3131
SaveDate        1634800176
```

### `.bashrc`

```
export http_proxy=http://127.0.0.1:3131
export https_proxy=https://127.0.0.1:3131
export ftp_proxy=http://127.0.0.1:3131

```


`sudo systemctl restart cntlm`



### jvm config

```

systemProp.http.proxyHost=localhost
systemProp.http.proxyPort=3131
#systemProp.http.nonProxyHosts=localhost|127.0.0.1
systemProp.http.keepAlive=true
systemProp.http.auth.preference=NTLM

```
