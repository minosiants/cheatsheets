---
title: circe
layout: default
---

####Print without nulls
```
n.asJson.pretty(Printer.noSpaces.copy(dropNullKeys = true))
```
