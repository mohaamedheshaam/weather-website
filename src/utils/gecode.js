const request = require('request');
const gecode = (address,callback)=>{
const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+ ".json?access_token=pk.eyJ1IjoibW9oYW1lZDk5OSIsImEiOiJjazhlejVoMHQwMW9iM2dxa3M0MGVlbjdlIn0.ZsvteneQWXQMEYfiiwX6Cg&limit=3"
request({url,json:true},(error,{body})=>{
    if(error){
        callback("you are not connected to internet",undefined)
    }
    else if(body.features.length===0){
        callback("address is not found",undefined)
    }
    else{
        callback(undefined,{code:body.features[0].center,place:body.features[0].place_name})
    }
})
}
module.exports = gecode;
