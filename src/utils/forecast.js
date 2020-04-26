const request = require('request') ;
const forecast=(lat,long,place,callback)=>{
const url ='https://api.darksky.net/forecast/cfcc08bc095eced860233a3db9d64f8c/'+lat+','+long+'?units=si'
request({url,json :true},(error,{body})=>{
if(error){
    callback("you are not connected to internet",undefined)
}
else if(body.error){
    callback('this location is not valid',undefined)
}
else{
    callback(undefined,{temp:body.currently.temperature,status:body.currently.summary})
}
})
}
module.exports = forecast;