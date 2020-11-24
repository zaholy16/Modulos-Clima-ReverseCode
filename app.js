const reverseGeocode=require('./modulos/geocode');
const estadoClima=require('./modulos/clima');

let coordenada={lat:19.239644 , lon:-103.753936};

reverseGeocode(coordenada, (error, dataResponse) =>{
  if(error){
    console.log("Ocurrio un error")
  }
  else{
    console.log(`Vives en: ${dataResponse.road}, tu estado es: ${dataResponse.state}`);
    estadoClima(dataResponse.state, (error,dataResponse) =>{
      if(error){
        console.log("Algo fallo");
      }
      console.log(`La temperatura es de ${dataResponse.temperatura} grados, el clima es ${dataResponse.descripcion}`);
    })
  }
});

