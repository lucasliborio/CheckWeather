# Check Weather - API Documentation
### Parte back-end do projeto CheckWeather
### URL da aplicação : https://overjoyed-scrawny-tyrannosaurus.glitch.me/

# Endpoints

## Geoinformation
### URL: /geoinformation
### Request Method: GET
- Esse endpoint é responsável por trazer todos os logs do banco de dados.
### Parametros
- Nenhum.
### Response
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
## Weather Information
### URL: /weather
### Request Method: GET

- Esse endpoint é responsável por fazer uma consulta numa API fornecida pelo site https://openweathermap.org/
### Parametros
- **Query:**
	- latitude (Number)
	- longitude (Number
#### Example URL: API_URL/weather?latitude=-12.9861&longitude=-38.5203
### Response
```
{
	"coord": {
		"lon": -38.5203,
		"lat": -12.9861
	},
	"weather": [
		{
			"id": 801,
			"main": "Clouds",
			"description": "few clouds",
			"icon": "02n"
		}
	],
	"base": "stations",
	"main": {
		"temp": 28.62,
		"feels_like": 32.6,
		"temp_min": 28.62,
		"temp_max": 28.62,
		"pressure": 1010,
		"humidity": 74,
		"sea_level": 1010,
		"grnd_level": 1002
	},
	"visibility": 10000,
	"wind": {
		"speed": 6.87,
		"deg": 96,
		"gust": 8.02
	},
	"clouds": {
		"all": 20
	},
	"dt": 1644359806,
	"sys": {
		"type": 1,
		"id": 8454,
		"country": "BR",
		"sunrise": 1644309038,
		"sunset": 1644354359
	},
	"timezone": -10800,
	"id": 3450554,
	"name": "Salvador",
	"cod": 200
}
```
#### Status:200


## Air Quality Information
### URL: /airq
### Request Method: GET
- Esse endpoint é responsável por uma consulta numa API fornecida pelo site  https://aqicn.org/json-api/doc/ para colher informações a respeito da qualidade do AR.
### Parametros

- **Query:**
	- latitude (Number)
	- longitude (Number
#### Example URL: API_URL/airq?latitude=-12.9861&longitude=-38.5203
### Response
#### Status:200
```
{
	"status": "ok",
	"data": {
		"aqi": 12,
		"idx": 12722,
		"attributions": [
			{
				"url": "https://iema.es.gov.br/qualidadedoar/indicedequalidadedoar",
				"name": "IEMA - Instituto Estadual de Meio Ambiente e Recursos Hídricos",
				"logo": "Brazil-iema.png"
			},
			{
				"url": "https://waqi.info/",
				"name": "World Air Quality Index Project"
			}
		],
		"city": {
			"geo": [
				-20.196229,
				-40.245177
			],
			"name": "Laranjeiras, Espírito Santo, Brazil",
			"url": "https://aqicn.org/city/brazil/espiritosanto/laranjeiras"
		},
		"dominentpol": "o3",
		"iaqi": {
			"co": {
				"v": 1
			},
			"dew": {
				"v": 23
			},
			"h": {
				"v": 78
			},
			"no2": {
				"v": 1.71
			},
			"o3": {
				"v": 11.88
			},
			"p": {
				"v": 1010
			},
			"t": {
				"v": 27
			},
			"w": {
				"v": 6.6
			},
			"wg": {
				"v": 12.3
			}
		},
		"time": {
			"s": "2022-02-08 19:00:00",
			"tz": "-03:00",
			"v": 1644346800,
			"iso": "2022-02-08T19:00:00-03:00"
		},
		"forecast": {
			"daily": {
				"o3": [
					{
						"avg": 5,
						"day": "2022-02-06",
						"max": 10,
						"min": 1
					},
					{
						"avg": 6,
						"day": "2022-02-07",
						"max": 11,
						"min": 2
					},
					{
						"avg": 5,
						"day": "2022-02-08",
						"max": 10,
						"min": 2
					},
					{
						"avg": 4,
						"day": "2022-02-09",
						"max": 13,
						"min": 1
					},
					{
						"avg": 7,
						"day": "2022-02-10",
						"max": 24,
						"min": 2
					},
					{
						"avg": 5,
						"day": "2022-02-11",
						"max": 8,
						"min": 2
					},
					{
						"avg": 3,
						"day": "2022-02-12",
						"max": 5,
						"min": 1
					}
				],
				"pm10": [
					{
						"avg": 8,
						"day": "2022-02-06",
						"max": 10,
						"min": 6
					},
					{
						"avg": 10,
						"day": "2022-02-07",
						"max": 12,
						"min": 6
					},
					{
						"avg": 9,
						"day": "2022-02-08",
						"max": 11,
						"min": 7
					},
					{
						"avg": 13,
						"day": "2022-02-09",
						"max": 20,
						"min": 8
					},
					{
						"avg": 23,
						"day": "2022-02-10",
						"max": 38,
						"min": 10
					},
					{
						"avg": 13,
						"day": "2022-02-11",
						"max": 18,
						"min": 10
					},
					{
						"avg": 10,
						"day": "2022-02-12",
						"max": 14,
						"min": 6
					}
				],
				"pm25": [
					{
						"avg": 14,
						"day": "2022-02-06",
						"max": 17,
						"min": 10
					},
					{
						"avg": 14,
						"day": "2022-02-07",
						"max": 18,
						"min": 9
					},
					{
						"avg": 15,
						"day": "2022-02-08",
						"max": 18,
						"min": 12
					},
					{
						"avg": 35,
						"day": "2022-02-09",
						"max": 55,
						"min": 15
					},
					{
						"avg": 46,
						"day": "2022-02-10",
						"max": 75,
						"min": 15
					},
					{
						"avg": 21,
						"day": "2022-02-11",
						"max": 28,
						"min": 15
					},
					{
						"avg": 18,
						"day": "2022-02-12",
						"max": 25,
						"min": 11
					}
				],
				"uvi": [
					{
						"avg": 4,
						"day": "2022-02-06",
						"max": 12,
						"min": 0
					},
					{
						"avg": 3,
						"day": "2022-02-07",
						"max": 12,
						"min": 0
					},
					{
						"avg": 4,
						"day": "2022-02-08",
						"max": 12,
						"min": 0
					},
					{
						"avg": 3,
						"day": "2022-02-09",
						"max": 8,
						"min": 0
					},
					{
						"avg": 3,
						"day": "2022-02-10",
						"max": 10,
						"min": 0
					},
					{
						"avg": 3,
						"day": "2022-02-11",
						"max": 10,
						"min": 0
					},
					{
						"avg": 3,
						"day": "2022-02-12",
						"max": 8,
						"min": 0
					},
					{
						"avg": 2,
						"day": "2022-02-13",
						"max": 5,
						"min": 0
					}
				]
			}
		},
		"debug": {
			"sync": "2022-02-09T07:30:00+09:00"
		}
	}
}
```
