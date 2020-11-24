const request = require("postman-request");

const estadoClima = (estado, callback) => {
    let apiClima = `http://api.weatherstack.com/current?access_key=5e994b9b871edebea3e26c07b22821af&query=${estado}`;

    request(apiClima,(error,response,body) =>{
        if(error){
            callback('Ocurrio un error',undefined);
        }
        else{
            let datos = JSON.parse(body);
            callback(undefined, {
                tiempo: datos.current.observation_time,
                temperatura: datos.current.temperature,
                descripcion: datos.current.weather_descriptions
            })
        }
    })
}
module.exports=estadoClima;