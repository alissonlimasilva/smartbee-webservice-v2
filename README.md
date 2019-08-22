# smartbee-webservice-v2

## END POINTS

#### POST

- <b>/coleta/add </b>

Esperado receber no body da requisição um json com o seguinte formato:

```json
{
  "id_colmeia":"value",
  "values":{
    "sensor name":"value",
    "sensor name":"value",
    .
    .
    .
    "sensor name":"value"
  }
}
```
Respostas

* Coleta salva com sucesso
```json
{
  "message": "Coleta salva com sucesso",
  "status": "200"
}
```
* O campo id_colmeia não está contido no JSON ou não foi passado um valor válido.
```json
{
  "message": "Campo id_colmeia não informado",
  "status": "401"
}
```
* O JSON recebido não contém o campo "values"
```json
{
  "message": "Não foi informado amostras na coleta",
  "status": "401"
}
```
* O id da colmeia passada no JSON não foi encontrada.
```json
{
  "message": "Colmeia informada não existe",
  "status": "401"
}
```
* Não existe nenhum sensor cadastrado.
```json
{
  "message": "Não há nenhum sensor cadastrada",
  "status": "404"
}
```
* O campo "values" não tinha valores ou os valores informados não tinham sensores correspondentes
```json
{
  "message": "Não foi informado valores da coleta",
  "status": "401"
}
```
* Ocorreu um erro ao salvar a coleta
```json
{
  "message": "Ocorreu um erro ao salvar a coleta",
  "status": "500"
}
```
