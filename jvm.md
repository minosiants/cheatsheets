---
title: JVM 
layout: default
---
### Add cert to keystor

go to `/jre/lib/security`

run
```
keytool -import -alias mailserver -file mailserver.crt -keystore cacerts
```

