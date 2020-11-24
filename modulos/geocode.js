const request = require('postman-request');

const reverseGeocode = (coordenada, callback) => {
    //URL con la latitud y longitud concatenada a la petición.
    let urlLatlon = `https://us1.locationiq.com/v1/reverse.php?key=pk.a7a2d1c5f354d3f40019bc08b52231b2&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    //Llamada a request con 2 parametros (url, ()=>{})
    request(urlLatlon, (error, response, body) =>{
        //Evaluacion de la respuesta
        if(error) {
            //Si hay algun error, error!=null, por lo tanto
            //se regresa un mensaje de error y se hace el 
            //dataResponse=undefined
            //Error                                        //Data
            callback('Ocurrio algun error con la busqueda', undefined);
        } else {
            //De lo contrario, si es existosa la respuesta se hace
            //lo contrario
            //mensaje de error=undefined y 
            //dataResponse={Objeto con las propiedades que nos interesan}
            let data = JSON.parse(body);
            //Error
            callback(undefined, {
                road: data.address.road,
                state: data.address.state,
                country: data.address.country,
                postcode: data.address.postcode
            })
        }
    });
}

module.exports=reverseGeocode;