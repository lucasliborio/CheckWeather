# Check Weather - API Documentation
## Parte back-end do projeto CheckWeather

URL

# Endpoints

## Geoinformation
### Method: Get
- Esse end point é responsavel por trazer todos os logs do banco de dados.
### Parametros
- Nenhum.
### URL: /geoinformation
### Reponses
#### Status:200


- Trará uma lista com todos os check-in's
```
[
	{
		"coord": {
			"lat": "-12.9873",
			"lon": "-38.5172"
		},
		"temp": {
			"temp": 28.71,
			"feels_like": 32.81,
			"temp_min": 28.71,
			"temp_max": 28.71,
			"pressure": 1011,
			"humidity": 74,
			"weather": "Clear"
		},
		"cityStation": {
			"geo": [
				-20.196229,
				-40.245177
			],
			"name": "Laranjeiras, Espírito Santo, Brazil",
			"url": "https://aqicn.org/city/brazil/espiritosanto/laranjeiras"
		},
		"_id": "62019d660fe404d8bfebf0da",
		"cityName": "Salvador",
		"attributions": [
			{
				"url": "https://iema.es.gov.br/qualidadedoar/indicedequalidadedoar",
				"name": "IEMA - Instituto Estadual de Meio Ambiente e Recursos Hídricos",
				"_id": "62019d660fe404d8bfebf0db"
			},
			{
				"url": "https://waqi.info/",
				"name": "World Air Quality Index Project",
				"_id": "62019d660fe404d8bfebf0dc"
			}
		],
		"__v": 0
	},
	{
		"coord": {
			"lat": "37.7749",
			"lon": "-122.4194"
		},
		"temp": {
			"temp": 18.85,
			"feels_like": 18.04,
			"temp_min": 16.25,
			"temp_max": 21.99,
			"pressure": 1026,
			"humidity": 48,
			"weather": "Clouds"
		},
		"cityStation": {
			"geo": [
				37.76595,
				-122.39902
			],
			"name": "San Francisco-Arkansas Street, San Francisco, California",
			"url": "https://aqicn.org/city/california/san-francisco/san-francisco-arkansas-street"
		},
		"_id": "62019d800fe404d8bfebf0e1",
		"cityName": "San Francisco",
		"attributions": [
			{
				"url": "http://www.airnow.gov/",
				"name": "Air Now - US EPA",
				"_id": "62019d800fe404d8bfebf0e2"
			},
			{
				"url": "http://www.arb.ca.gov/",
				"name": "CARB - California Air Resources Board",
				"_id": "62019d800fe404d8bfebf0e3"
			},
			{
				"url": "https://waqi.info/",
				"name": "World Air Quality Index Project",
				"_id": "62019d800fe404d8bfebf0e4"
			}
		],
		"__v": 0
	},
]
```
## weatherInformation
### Method: Get
- Esse end point é responsavel por fazer uma consulta num API fornecidade pelo https://openweathermap.org/
### Parametros
- **Query:**
	- latitude (Number)
	- longitude (Number
### URL: /weather
### Reponses
#### Status:200


## AirQualityInformation
### Method: Get
- Esse end point é responsavel por trazer todos os logs do banco de dados.
### Parametros
- Nenhum.
### URL: /weather
### Reponses
#### Status:200
