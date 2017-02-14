---
title: circe
layout: default
---

https://circe.github.io/circe/

####Print without nulls
```
n.asJson.pretty(Printer.noSpaces.copy(dropNullKeys = true))
```
