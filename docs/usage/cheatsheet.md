---
id: cheatsheet
title: Common Usage
sidebar_label: Cheatsheet
---

While we work on formal documentation here is a cheetsheet of common usage:

### General Scanning
```shell
ghost alpine:latest
ghost --ignore-unfixed wordpress:latest
```

### Custom Policy
Ghost supports custom policy driven by OPA. You can specify a local rego file or OPA endpoint. Scanner binary
will issue exit code 2 for failed policies.
```shell
ghost --rego-file ghost.rego alpine:latest
ghost image --opa-server https://51.222.5.38:8443 alpine:latest 
```

### Custom templating and Reporting
```shell
ghost --format template --template @ghost.tpl -o report.html alpine:latest
```