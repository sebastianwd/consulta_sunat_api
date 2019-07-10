# API de consulta de ruc SUNAT

> App simple con Node.js

## Uso

```bash
# https://api.peruonline.cloud/v1/?ruc=RUC_A_CONSULTAR
# Consulta del contribuyente con ruc 20509742601
https://api.peruonline.cloud/v1/?ruc=20509742601

```

```json
{
  "ruc": 20509742601,
  "nombre_o_razon_social": "ALIMENTOS PLUS S.A.C",
  "estado_del_contribuyente": "ACTIVO",
  "condicion_de_domicilio": "HABIDO",
  "ubigeo": 150131,
  "tipo_de_via": "CAL.",
  "nombre_de_via": "GERMAN SCHREIBER",
  "codigo_de_zona": "URB.",
  "tipo_de_zona": "SANTA ANA",
  "numero": 210,
  "interior": "801",
  "lote": "-",
  "dpto": "-",
  "manzana": "-",
  "kilometro": "-",
  "": "",
  "direccion": "CAL. GERMAN SCHREIBER 210"
}
```

## TODO

```bash
 . Consulta por nombre
 . Script para actualización diaria del padrón
```
