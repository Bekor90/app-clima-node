
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		descripcion: 'Dirección de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

let getInfo = async(direccion) => {

	try {
		let coord = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coord.lat, coord.lng);

		return `La temperatura en ${ coord.direccion} es de ${ temp} ºC`;
	}
	catch(err){
		return `No se pudo obtener la temperatura en ${ direccion }`;
	}
}

getInfo(argv.direccion)
	.then(mensaje => console.log(mensaje))
	.catch(err => console.log(err));




