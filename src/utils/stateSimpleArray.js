// El index del array coincide con el id del inmueble (state), cada uno con un array con los datos de interés, donde hay un 3r array para las características
import getDataState from '../utils/getDataState'

const states = await getDataState()

let operations = [] //0
let prices = [] //1
let surfaces = [] //2
let rooms = [] //3
let toilets = [] //4
let types = [] //5
let subtypes = [] //6
let zones = [] //7
let characteristicsArrays = [] //8
let characteristics = []

for (let i = 0; i < states.length; i++) {
    operations[i] = states[i].operacion.tipo_operacion
    prices[i] = states[i].precio
    surfaces[i] = states[i].superficie
    rooms[i] = states[i].habitaciones 
    toilets[i] = states[i].banos 
    types[i] = states[i].tipo_inmueble.nombre_tipo_inmueble
    subtypes[i] = states[i].subtipo_inmueble.nombre_subtipo_inmueble
    zones[i] = states[i].zona.nombre_zona
    characteristicsArrays[i] = states[i].caracteristicas
    for (let j= 0; j < characteristicsArrays[i].length; j++) {
        characteristicsArrays[i][j] = characteristicsArrays[i][j].nombre_caracteristica
    }
}

let statesSimple = [[]]

for (let i = 0; i < states.length; i++) {
    statesSimple[i].push(operations[i])
    statesSimple[i].push(prices[i])
    statesSimple[i].push(surfaces[i])
    statesSimple[i].push(rooms[i])
    statesSimple[i].push(toilets[i])
    statesSimple[i].push(types[i])
    statesSimple[i].push(subtypes[i])
    statesSimple[i].push(zones[i])
    statesSimple[i].push(characteristicsArrays[i])
}

for (let i = 0; i < characteristicsArrays.length; i++) {
    for (let j = 0; j < characteristicsArrays[i].length; j++) {
        characteristics.push(characteristicsArrays[i][j].nombre_caracteristica)
    }
}

operations = new Set(operations.sort())
prices = new Set(prices.sort())
surfaces = new Set(surfaces.sort())
rooms = new Set(rooms.sort())
toilets = new Set(toilets.sort())
types = new Set(types.sort())
subtypes = new Set(subtypes.sort())
zones = new Set(zones.sort())
characteristics = new Set(characteristics.sort())

operations = Array.from(operations)
prices = Array.from(prices)
surfaces = Array.from(surfaces)
rooms = Array.from(rooms)
toilets = Array.from(toilets)
types = Array.from(types)
subtypes = Array.from(subtypes)
zones = Array.from(zones)
characteristics = Array.from(characteristics)

//Integers
let pricesInt = []
for (let i = 0; i < prices.length; i++) {
    pricesInt[i] = parseInt(prices[i].replace(/\D/g, ''))
}
pricesInt = pricesInt.sort(function(a, b){return a-b})
let surfacesInt = []
for (let i = 0; i < surfaces.length; i++) {
    surfacesInt[i] = parseInt(surfaces[i].replace(/\D/g, '').replace(/2$/g, ''))
}
surfacesInt = surfacesInt.sort(function(a, b){return a-b})
let roomsInt = []
for (let i = 0; i < rooms.length; i++) {
    roomsInt[i] = parseInt(rooms[i].replace(/\D/g, ''))
}
roomsInt = roomsInt.sort(function(a, b){return a-b})
let toiletsInt = []
for (let i = 0; i < toilets.length; i++) {
    toiletsInt[i] = parseInt(toilets[i].replace(/\D/g, ''))
}
toiletsInt = toiletsInt.sort(function(a, b){return a-b})