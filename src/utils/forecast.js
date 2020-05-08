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
    callback(undefined,
{message :`${body.daily.summary} It is currently ${body.currently.temperature} degrees out.There
is a ${body.currently.precipProbability} % chance of rain. `,
high:body.daily.data[0].temperatureHigh,low:body.daily.data[0].temperatureLow})
}
})
}
module.exports = forecast;