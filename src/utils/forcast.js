const request = require('request')

const forcast=(latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=c40b4ad11abe8f37a8f4361ed44c4c85&query='+latitude+','+longitude+'&units=m'
    request({url ,json:true},( error, {body})=> {
        if(error)
    {
        callback('Unable to connect to weather servers!',undefined)
    }
    else if(body.error){
        callback('Unble to fetch location!',undefined)
    }
    else{
      //  if(!error&&response.statusCode==200)
         callback(undefined,
             'The weather of your region is ' + body.current.weather_descriptions[0] +'. Temperature is ' +
            body.current.temperature + ' degrees but it feels like ' +
            body.current.feelslike + ' degrees. The wind speeed currently is '+ body.current.wind_speed + ' kmph and the humidity is '+ body.current.humidity + '%. Thanks for searching :).' 
         )
            
    }
    })
    

}
module.exports=forcast
