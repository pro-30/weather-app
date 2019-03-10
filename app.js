const yargs=require('yargs');
const geocode =require('./geocode/geocode');
const weather=require('./weather/weather');

const argv=yargs
           .options({
            a:{
              demand:true,
              alias:'address',
              describe:'Address to fecth weather for',
              string:true,
            }

}).help()
.alias('help','h')
.argv;
// console.log(argv.a);
geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
  if(errorMessage){console.log(errorMessage);}
   else {//console.log(JSON.stringify(results,undefined,2));
       console.log(results.address);
       //we will bring the weather callback inside so that we can use the get the temp for given lat,lng
       weather.getWeather(results.Latitude,results.Longitude,(errorMessage,weatherresults)=>{
         if(errorMessage){console.log(errorMessage);}
         else{console.log(JSON.stringify(`It's current ${weatherresults.temperature}. It Feels like ${weatherresults.apparentTemperature}.`,undefined,2));}
       });
     }
});
