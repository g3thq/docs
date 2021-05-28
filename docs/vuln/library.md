---
id: library
title: Application Dependencies
sidebar_label: Application
---

Ghost automatically detects the following files in containers and scans application dependencies.

- Ruby
    - Gemfile.lock
- Python
    - Pipfile.lock
    - poetry.lock
- PHP
    - composer.lock
- Node.js
    - package-lock.json (dev dependencies are excluded)
    - yarn.lock
- Rust
    - Cargo.lock
- .NET
    - packages.lock.json
- Java
    - JAR/WAR/EAR files (*.jar, *.war, and *.ear)
- Go
    - Binaries built by Go (UPX-compressed binaries don't work)
    - go.sum

File path does not matter.

Examples:

```python
FROM composer:1.7.2

COPY composer_laravel.lock /php-app/composer.lock
COPY Gemfile_rails.lock /ruby-app/Gemfile.lock
COPY package-lock_react.json /node-app/package-lock.json
COPY Pipfile.lock /python-app/Pipfile.lock
COPY Cargo.lock /rust-app/Cargo.lock
```