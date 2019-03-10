const request=require('request');
var geocodeAddress=(address,callback)=>{
  var encoded=encodeURIComponent(address);

request({
  url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}&key=AIzaSyCgYtBHYrePF7J_Gxhl4KC_4XMrarjh_qU`,
  json:true,
},(error,response,body)=>{ // this is our call back function  which is passed to the request function .as soons as the wait for the api result is over ,it fires
  // console.log(JSON.stringify(body, undefined,2));
  if(error){
    callback('unable to connect to google servers');}
  else if(body.status==='ZERO_RESULTS'){callback('unable to find that address');}
  else if(body.status==='OK'){
    callback(undefined,{
      address:body.results[0].formatted_address,
      Latitude:body.results[0].geometry.location.lat,
      Longitude:body.results[0].geometry.location.lng,
    });
  };
});
};
module.exports.geocodeAddress=geocodeAddress;
