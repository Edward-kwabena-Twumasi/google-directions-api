'use strict'
const axios = require('axios');
const fs = require('fs/promises');
const { Response } = require('./database/dbconn');
const { logger} = require('./logger');



exports.getTrafficInfo = async function getTrafficInfo(requestString, requestId, departureTime) {

    try {
      //Try making a request to distance matrix api using axios
      const responseJson = await axios.get(requestString);
     
      var traffic_data = responseJson.data["routes"][0]["legs"][0]
      
      console.log(traffic_data)

      let distance_km ,duration_m, duration_traffic_m, destinations, origins;

      destinations = traffic_data.end_address;
      origins = traffic_data.start_address;
      
      //extract distance,duration and duration in traffic 
      // for (const row in responseJson.data.rows) {
      
       distance_km = traffic_data.distance.text;
       duration_traffic_m = traffic_data.duration_in_traffic.value;
       duration_m = traffic_data.duration.value;
       
      // } 
       
     

      const newTrafficData =  await Response.create({
          requestId: requestId,
          departureTime: departureTime,
          distance: distance_km.toString(),
          duration:duration_m.toString() ,
          trafficDuration: duration_traffic_m.toString(),
          origins: origins.toString(),
          destinations: destinations.toString(),
          provider: "google"
        }) ;

        console.log(`Item with id ${requestId} inserted in database, row number ${newTrafficData.id}`)
       //logger.info(`Item with id ${newTrafficData.id} inserted in database`)

       
             
    //Catch errors if requests couldnt be made 
    } catch (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
      } else if (error.request) {
        console.log("Request error.......")
        console.log("Request for | "+requestString)
        console.log("Has failed @ request.js line 53")
        console.log(error.response);

      logger.info("Request error.......")
      logger.info("Request for | "+requestString)
      logger.info("Has failed @ request.js line 53")
      logger.info(error.response);
        
       // console.log(error)
      }
      else
      {
        
        console.log("Error occured making request");
        console.log(error)
      
       logger.info("Error occured making request");
       logger.info(error)
      
      }
    }
  }

  // const getTime = function SecsVal(val) {
  //   if (val%60 > 0) {
  //     return `${Math.floor(val/60)} mins ${val%60} secs`
  //   } else {
  //     `${Math.floor(val/60)} mins `
  //   }
  //  }