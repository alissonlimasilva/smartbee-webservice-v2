# smartbee-webservice-v2

## END POINTS

#### POST

- <b> coleta/add </b>

Esperado receber no body da requisição um json com o seguinte formato:

```json
{
  "id_colmeia":"value",
  "values":{
   "temperatura":"value",
    "umidade":"value",
    .
    .
    .
    "peso":"value"
  }
}
```
