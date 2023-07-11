---
title: JVM 
layout: default
---
### Add cert to keystor

go to `/jre/lib/security`

run
```
keytool -import -alias mailserver -file mailserver.crt -keystore cacerts
keytool  -import -noprompt  -trustcacerts  -file ZscalerRootCA.cer -keystore "/Users/minosyantsk/.jabba/jdk/adopt-openj9@1.8.0-292/Contents/Home/jre/lib/security/cacerts" -storepass changeit
```

