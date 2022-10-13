---
title: kafka
layout: default
---

## Create topic using cli

```
$KAFKA_HOME/bin/kafka-topics.sh --bootstrap-server localhost:9092 \
--create --partitions 3 --replication-factor 1 \
--topic getting-started
```



