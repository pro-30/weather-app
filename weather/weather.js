const request=require('request');
var getWeather=(lat,lng,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/42912f050f92a8ffc06aae104d4ad02a/${lat},${lng}`,
    json:true,
  },(error,response,body)=>{
    if(!error && response.statusCode===200){callback(undefined,{
                                                              temperature:body.currently.temperature,
                                                             apparentTemperature:body.currently.apparentTemperature,});}
    else {callback('unable to fetch weather');}
  });
};
module.exports.getWeather=getWeather;
