# API de consulta de ruc SUNAT

> App simple con Node.js

## Uso

```bash
# https://api.peruonline.cloud/v1/?ruc=RUC_A_CONSULTAR
# Consulta del contribuyente con ruc 20509742601
https://api.peruonline.cloud/v1/?ruc=20509742601

```

## Correr la app

```bash
# Run in Docker

docker-compose up

# use -d flag to run in background

# Tear down

docker-compose down

# To be able to edit files, add volume to compose file

volumes: ['./:/usr/src/app']

# To re-build

docker-compose build

```
