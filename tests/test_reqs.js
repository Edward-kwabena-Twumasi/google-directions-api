const axios = require('axios');

output = []
count = 0
async function getTrafficInfo(requestString){
    try {
        console.log("fetching...")
    const responseJson = await axios.get(requestString);
    var traffic_data = responseJson.data["routes"][0]["legs"][0]
    output.push(traffic_data)
    console.log(output)
    } catch (error) {
        console.log("oops fetching...")
    }
    
}

var req ="https://maps.googleapis.com/maps/api/directions/json?destination=6.71463%2c-1.722902&origin=6.700621%2c-1.71597&departure_time=now&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo"
var req1 ="https://maps.googleapis.com/maps/api/directions/json?destination=5.575372%2c-0.281734&origin=5.591123%2c-0.268842&departure_time=now&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo"
getTrafficInfo(req)
getTrafficInfo(req1)

var reqs = [
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.575372%2c-0.281734&origin=5.591123%2c-0.268842&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.591123%2c-0.268842&origin=5.575372%2c-0.281734&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.591123%2c-0.268842&origin=5.605697%2c-0.251227&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.605697%2c-0.251227&origin=5.591123%2c-0.268842&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.605697%2c-0.251227&origin=5.621018%2c-0.182534&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.621018%2c-0.182534&origin=5.605697%2c-0.251227&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.627865%2c-0.176565&origin=5.639977%2c-0.178003&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.639977%2c-0.178003&origin=5.627865%2c-0.176565&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.639977%2c-0.178003&origin=5.665923%2c-0.177377&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.665923%2c-0.177377&origin=5.639977%2c-0.178003&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.665923%2c-0.177377&origin=5.677597%2c-0.173255&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=5.677597%2c-0.173255&origin=5.665923%2c-0.177377&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.686811%2c-1.573574&origin=6.688569%2c-1.596299&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.688569%2c-1.596299&origin=6.686811%2c-1.573574&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.688569%2c-1.596299&origin=6.708827%2c-1.598648&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.708827%2c-1.598648&origin=6.688569%2c-1.596299&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.708827%2c-1.598648&origin=6.710798%2c-1.626832&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.710798%2c-1.626832&origin=6.708827%2c-1.598648&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.700775%2c-1.647911&origin=6.698341%2c-1.68917&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.698341%2c-1.68917&origin=6.700775%2c-1.647911&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.698341%2c-1.68917&origin=6.700621%2c-1.71597&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.700621%2c-1.71597&origin=6.698341%2c-1.68917&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.700621%2c-1.71597&origin=6.71463%2c-1.722902&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.71463%2c-1.722902&origin=6.700621%2c-1.71597&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.439649%2c3.430722&origin=6.467549%2c3.564623&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.467549%2c3.564623&origin=6.439649%2c3.430722&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.467549%2c3.564623&origin=6.474596%2c3.842381&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.474596%2c3.842381&origin=6.467549%2c3.564623&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.474596%2c3.842381&origin=6.586053%2c3.951218&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.586053%2c3.951218&origin=6.474596%2c3.842381&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.558434%2c3.365051&origin=6.54558%2c3.33743&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.54558%2c3.33743&origin=6.558434%2c3.365051&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.54558%2c3.33743&origin=6.50499%2c3.323317&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.50499%2c3.323317&origin=6.54558%2c3.33743&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.50499%2c3.323317&origin=6.464495%2c3.317929&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo",
    "https://maps.googleapis.com/maps/api/directions/json?destination=6.464495%2c3.317929&origin=6.50499%2c3.323317&departure_time=1700307900&key=AIzaSyDQ6tE2HAFnsICUh9FxGkOMGvqVRaMS0Uo"
  ]
//   for( req in reqs){
   
//     getTrafficInfo(reqs[req])
    
//   }
var date = new Date()
const filePath = `./database/traffic_data_${new Date().getTime()}.xlsx`;
console.log(filePath)
   
  
  
outputs = [
    {
      distance: { text: '1.8 km', value: 1843 },
      duration: { text: '5 mins', value: 285 },
      duration_in_traffic: { text: '5 mins', value: 292 },
      end_address: 'P78G+2VW, Kumasi-Sunyani Rd, Kumasi, Ghana',
      end_location: { lat: 6.7146379, lng: -1.722881 },
      start_address: 'P72M+7J9, Kumasi, Ghana',
      start_location: { lat: 6.7006083, lng: -1.7159886 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.3 km', value: 2260 },
      duration: { text: '4 mins', value: 232 },
      duration_in_traffic: { text: '4 mins', value: 269 },
      end_address: 'HPG9+9CP, George Bush Hwy, Mallam, Ghana',
      end_location: { lat: 5.575358, lng: -0.2817175 },
      start_address: 'HPRJ+8HW, Accra, Ghana',
      start_location: { lat: 5.5911599, lng: -0.2688929 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.6 km', value: 2618 },
      duration: { text: '6 mins', value: 335 },
      duration_in_traffic: { text: '8 mins', value: 494 },
      end_address: 'HPRJ+8HW, Accra, Ghana',
      end_location: { lat: 5.5911599, lng: -0.2688929 },
      start_address: 'N 1, Accra, Ghana',
      start_location: { lat: 5.6057527, lng: -0.2512527 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.3 km', value: 2260 },
      duration: { text: '4 mins', value: 232 },
      duration_in_traffic: { text: '5 mins', value: 294 },
      end_address: 'HPG9+9CP, George Bush Hwy, Mallam, Ghana',
      end_location: { lat: 5.575358, lng: -0.2817175 },
      start_address: 'HPRJ+8HW, Accra, Ghana',
      start_location: { lat: 5.5911599, lng: -0.2688929 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.2 km', value: 3205 },
      duration: { text: '7 mins', value: 429 },
      duration_in_traffic: { text: '7 mins', value: 421 },
      end_address: 'N 1, Accra, Ghana',
      end_location: { lat: 5.6057527, lng: -0.2512527 },
      start_address: 'HPRJ+8HW, Accra, Ghana',
      start_location: { lat: 5.5910826, lng: -0.2687855 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.0 km', value: 2963 },
      duration: { text: '4 mins', value: 235 },
      duration_in_traffic: { text: '4 mins', value: 253 },
      end_address: 'Okponglo Bus Stop, Legon E Rd, Accra, Ghana',
      end_location: { lat: 5.639963, lng: -0.1780822 },
      start_address: 'Atomic first bus stop after Presec Accra, Accra, Ghana',
      start_location: { lat: 5.665938300000001, lng: -0.1774492 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '9.1 km', value: 9113 },
      duration: { text: '13 mins', value: 768 },
      duration_in_traffic: { text: '16 mins', value: 988 },
      end_address: 'No. 324 Sankara, Accra - Main Street, Accra, Ghana',
      end_location: { lat: 5.6210073, lng: -0.1825305 },
      start_address: 'N 1, Accra, Ghana',
      start_location: { lat: 5.6057527, lng: -0.2512527 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '1.4 km', value: 1358 },
      duration: { text: '3 mins', value: 164 },
      duration_in_traffic: { text: '3 mins', value: 190 },
      end_address: 'Okponglo Bus Stop, Legon E Rd, Accra, Ghana',
      end_location: { lat: 5.6399949, lng: -0.1779064 },
      start_address: '318 Legon E Rd, Accra, Ghana',
      start_location: { lat: 5.6278698, lng: -0.1764935 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '1.6 km', value: 1560 },
      duration: { text: '3 mins', value: 197 },
      duration_in_traffic: { text: '3 mins', value: 209 },
      end_address: 'Atomic first bus stop after Presec Accra, Accra, Ghana',
      end_location: { lat: 5.665938300000001, lng: -0.1774492 },
      start_address: 'MRHG+2QG Madina Footbridge, N4, Madina, Ghana',
      start_location: { lat: 5.6775832, lng: -0.1732116 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '4.9 km', value: 4905 },
      duration: { text: '14 mins', value: 833 },
      duration_in_traffic: { text: '17 mins', value: 1026 },
      end_address: 'HPRJ+8HW, Accra, Ghana',
      end_location: { lat: 5.5911599, lng: -0.2688929 },
      start_address: 'HPG9+9CP, George Bush Hwy, Mallam, Ghana',
      start_location: { lat: 5.575358, lng: -0.2817175 },
      steps: [ [Object], [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.0 km', value: 3022 },
      duration: { text: '6 mins', value: 338 },
      duration_in_traffic: { text: '6 mins', value: 349 },
      end_address: 'M8X6+97V, Sunyani Rd, Kumasi, Ghana',
      end_location: { lat: 6.6983302, lng: -1.6891836 },
      start_address: 'P72M+7J9, Kumasi, Ghana',
      start_location: { lat: 6.7006083, lng: -1.7159886 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '10.5 km', value: 10488 },
      duration: { text: '14 mins', value: 869 },
      duration_in_traffic: { text: '15 mins', value: 875 },
      end_address: 'N 1, Accra, Ghana',
      end_location: { lat: 5.6057527, lng: -0.2512527 },
      start_address: 'No. 324 Sankara, Accra - Main Street, Accra, Ghana',
      start_location: { lat: 5.6210073, lng: -0.1825305 },
      steps: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.5 km', value: 3488 },
      duration: { text: '6 mins', value: 366 },
      duration_in_traffic: { text: '6 mins', value: 384 },
      end_address: '304 Eastern By-Pass, Kumasi, Ghana',
      end_location: { lat: 6.708815299999999, lng: -1.5986766 },
      start_address: 'Suame Roundabout, Kumasi, Ghana',
      start_location: { lat: 6.710751399999999, lng: -1.6268502 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.5 km', value: 2537 },
      duration: { text: '7 mins', value: 420 },
      duration_in_traffic: { text: '9 mins', value: 556 },
      end_address: 'MCQ3+HCM, Kumasi, Ghana',
      end_location: { lat: 6.688570599999999, lng: -1.5963242 },
      start_address: '304 Eastern By-Pass, Kumasi, Ghana',
      start_location: { lat: 6.708815299999999, lng: -1.5986766 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '5.1 km', value: 5091 },
      duration: { text: '5 mins', value: 291 },
      duration_in_traffic: { text: '5 mins', value: 308 },
      end_address: 'G84F+456, Itire 102214, Lagos, Nigeria',
      end_location: { lat: 6.504978299999999, lng: 3.3233567 },
      start_address: 'Toyota, Isolo 102214, Ikeja, Lagos, Nigeria',
      start_location: { lat: 6.5455795, lng: 3.3374028 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.5 km', value: 2517 },
      duration: { text: '5 mins', value: 303 },
      duration_in_traffic: { text: '6 mins', value: 333 },
      end_address: 'Tech Junction overpass bridge, Kumasi - Ejisu Rd, Kumasi, Ghana',
      end_location: { lat: 6.686769, lng: -1.5735779 },
      start_address: 'MCQ3+HCM, Kumasi, Ghana',
      start_location: { lat: 6.6885295, lng: -1.5963016 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '5.0 km', value: 5018 },
      duration: { text: '5 mins', value: 305 },
      duration_in_traffic: { text: '7 mins', value: 441 },
      end_address: 'Fatgbems, Coker 102102, Ikeja, Lagos, Nigeria',
      end_location: { lat: 6.464507999999999, lng: 3.3179142 },
      start_address: 'G84F+456, Itire 102214, Lagos, Nigeria',
      start_location: { lat: 6.504978299999999, lng: 3.3233567 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '5.9 km', value: 5912 },
      duration: { text: '11 mins', value: 688 },
      duration_in_traffic: { text: '16 mins', value: 970 },
      end_address: 'Atomic first bus stop after Presec Accra, Accra, Ghana',
      end_location: { lat: 5.665938300000001, lng: -0.1774492 },
      start_address: 'Okponglo Bus Stop, Legon E Rd, Accra, Ghana',
      start_location: { lat: 5.6399949, lng: -0.1779064 },
      steps: [ [Object], [Object], [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '6.2 km', value: 6214 },
      duration: { text: '12 mins', value: 705 },
      duration_in_traffic: { text: '16 mins', value: 985 },
      end_address: '1 Afolabi Lesi St, Ilupeju 102215, Lagos, Nigeria',
      end_location: { lat: 6.5583822, lng: 3.3650515 },
      start_address: 'Toyota, Isolo 102214, Ikeja, Lagos, Nigeria',
      start_location: { lat: 6.5455795, lng: 3.3374028 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '6.4 km', value: 6425 },
      duration: { text: '15 mins', value: 913 },
      duration_in_traffic: { text: '18 mins', value: 1057 },
      end_address: 'Suame Roundabout, Kumasi, Ghana',
      end_location: { lat: 6.7108381, lng: -1.6268151 },
      start_address: '304 Eastern By-Pass, Kumasi, Ghana',
      start_location: { lat: 6.708815299999999, lng: -1.5986766 },
      steps: [ [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '5.0 km', value: 4966 },
      duration: { text: '8 mins', value: 461 },
      duration_in_traffic: { text: '16 mins', value: 932 },
      end_address: 'MRHG+2QG Madina Footbridge, N4, Madina, Ghana',
      end_location: { lat: 5.6775832, lng: -0.1732116 },
      start_address: 'Atomic first bus stop after Presec Accra, Accra, Ghana',
      start_location: { lat: 5.665938300000001, lng: -0.1774492 },
      steps: [ [Object], [Object], [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.0 km', value: 3022 },
      duration: { text: '5 mins', value: 310 },
      duration_in_traffic: { text: '5 mins', value: 324 },
      end_address: 'P72M+7J9, Kumasi, Ghana',
      end_location: { lat: 6.7006083, lng: -1.7159886 },
      start_address: 'M8X6+97V, Sunyani Rd, Kumasi, Ghana',
      start_location: { lat: 6.6983302, lng: -1.6891836 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '24.1 km', value: 24061 },
      duration: { text: '31 mins', value: 1851 },
      duration_in_traffic: { text: '37 mins', value: 2219 },
      end_address: 'Toyota, Isolo 102214, Ikeja, Lagos, Nigeria',
      end_location: { lat: 6.5455795, lng: 3.3374028 },
      start_address: 'G84F+456, Itire 102214, Lagos, Nigeria',
      start_location: { lat: 6.504978299999999, lng: 3.3233567 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '1.8 km', value: 1843 },
      duration: { text: '5 mins', value: 285 },
      duration_in_traffic: { text: '5 mins', value: 325 },
      end_address: 'P78G+2VW, Kumasi-Sunyani Rd, Kumasi, Ghana',
      end_location: { lat: 6.7146379, lng: -1.722881 },
      start_address: 'P72M+7J9, Kumasi, Ghana',
      start_location: { lat: 6.7006083, lng: -1.7159886 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.9 km', value: 3945 },
      duration: { text: '9 mins', value: 566 },
      duration_in_traffic: { text: '9 mins', value: 566 },
      end_address: 'MCQ3+HCM, Kumasi, Ghana',
      end_location: { lat: 6.688570599999999, lng: -1.5963242 },
      start_address: 'Tech Junction overpass bridge, Kumasi - Ejisu Rd, Kumasi, Ghana',
      start_location: { lat: 6.686769, lng: -1.5735779 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '42.3 km', value: 42256 },
      duration: { text: '50 mins', value: 2991 },
      duration_in_traffic: { text: '42 mins', value: 2535 },
      end_address: 'Epe, 106101, Epe, Lagos, Nigeria',
      end_location: { lat: 6.586042, lng: 3.9512367 },
      start_address: 'Ibeju Lekki Express Road Lagos, 105101, Lekki, Lagos, Nigeria',
      start_location: { lat: 6.474563799999999, lng: 3.8423942 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '3.6 km', value: 3614 },
      duration: { text: '4 mins', value: 215 },
      duration_in_traffic: { text: '4 mins', value: 256 },
      end_address: 'Toyota, Isolo 102214, Ikeja, Lagos, Nigeria',
      end_location: { lat: 6.5455795, lng: 3.3374028 },
      start_address: '1 Afolabi Lesi St, Ilupeju 102215, Lagos, Nigeria',
      start_location: { lat: 6.5584959, lng: 3.3650501 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '1.4 km', value: 1356 },
      duration: { text: '3 mins', value: 162 },
      duration_in_traffic: { text: '3 mins', value: 185 },
      end_address: '318 Legon E Rd, Accra, Ghana',
      end_location: { lat: 5.6278592, lng: -0.176624 },
      start_address: 'Okponglo Bus Stop, Legon E Rd, Accra, Ghana',
      start_location: { lat: 5.639963, lng: -0.1780822 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '1.8 km', value: 1843 },
      duration: { text: '5 mins', value: 308 },
      duration_in_traffic: { text: '5 mins', value: 297 },
      end_address: 'P72M+7J9, Kumasi, Ghana',
      end_location: { lat: 6.7006083, lng: -1.7159886 },
      start_address: 'P78G+2VW, Kumasi-Sunyani Rd, Kumasi, Ghana',
      start_location: { lat: 6.7146379, lng: -1.722881 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '2.8 km', value: 2772 },
      duration: { text: '6 mins', value: 386 },
      duration_in_traffic: { text: '6 mins', value: 389 },
      end_address: '304 Eastern By-Pass, Kumasi, Ghana',
      end_location: { lat: 6.708815299999999, lng: -1.5986766 },
      start_address: 'MCQ3+HCM, Kumasi, Ghana',
      start_location: { lat: 6.6885295, lng: -1.5963016 },
      steps: [ [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '19.9 km', value: 19901 },
      duration: { text: '17 mins', value: 1044 },
      duration_in_traffic: { text: '17 mins', value: 1012 },
      end_address: 'Ibeju Lekki Express Road Lagos, 105101, Lekki, Lagos, Nigeria',
      end_location: { lat: 6.474563799999999, lng: 3.8423942 },
      start_address: 'Epe, 106101, Epe, Lagos, Nigeria',
      start_location: { lat: 6.586042, lng: 3.9512367 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '16.9 km', value: 16934 },
      duration: { text: '26 mins', value: 1575 },
      duration_in_traffic: { text: '30 mins', value: 1826 },
      end_address: 'Ajah, Aja 106104, Lekki, Lagos, Nigeria',
      end_location: { lat: 6.4675373, lng: 3.5646304 },
      start_address: '2 Adetokunbo Ademola Street, Eti-Osa 106104, Lagos, Nigeria',
      start_location: { lat: 6.439569499999999, lng: 3.4307398 },
      steps: [ [Object], [Object], [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '33.5 km', value: 33506 },
      duration: { text: '1 hour 0 mins', value: 3596 },
      duration_in_traffic: { text: '1 hour 5 mins', value: 3900 },
      end_address: 'Ibeju Lekki Express Road Lagos, 105101, Lekki, Lagos, Nigeria',
      end_location: { lat: 6.474563799999999, lng: 3.8423942 },
      start_address: 'Ajah, Aja 106104, Lekki, Lagos, Nigeria',
      start_location: { lat: 6.4675373, lng: 3.5646304 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '39.2 km', value: 39228 },
      duration: { text: '1 hour 15 mins', value: 4509 },
      duration_in_traffic: { text: '1 hour 36 mins', value: 5784 },
      end_address: 'Ajah, Aja 106104, Lekki, Lagos, Nigeria',
      end_location: { lat: 6.4675373, lng: 3.5646304 },
      start_address: 'Ibeju Lekki Express Road Lagos, 105101, Lekki, Lagos, Nigeria',
      start_location: { lat: 6.474563799999999, lng: 3.8423942 },
      steps: [ [Object], [Object], [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '21.6 km', value: 21570 },
      duration: { text: '35 mins', value: 2096 },
      duration_in_traffic: { text: '1 hour 6 mins', value: 3957 },
      end_address: '2 Adetokunbo Ademola Street, Eti-Osa 106104, Lagos, Nigeria',
      end_location: { lat: 6.439713600000001, lng: 3.4307093 },
      start_address: 'Ajah, Aja 106104, Lekki, Lagos, Nigeria',
      start_location: { lat: 6.4675373, lng: 3.5646304 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '19.0 km', value: 18959 },
      duration: { text: '25 mins', value: 1492 },
      duration_in_traffic: { text: '25 mins', value: 1525 },
      end_address: 'G84F+456, Itire 102214, Lagos, Nigeria',
      end_location: { lat: 6.504978299999999, lng: 3.3233567 },
      start_address: 'Fatgbems, Coker 102102, Ikeja, Lagos, Nigeria',
      start_location: { lat: 6.464507999999999, lng: 3.3179142 },
      steps: [
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object], [Object],
        [Object]
      ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '4.7 km', value: 4709 },
      duration: { text: '6 mins', value: 378 },
      duration_in_traffic: { text: '7 mins', value: 437 },
      end_address: 'M8X6+97V, Sunyani Rd, Kumasi, Ghana',
      end_location: { lat: 6.6983302, lng: -1.6891836 },
      start_address: 'P922+6RF, Sunyani Rd, Kumasi, Ghana',
      start_location: { lat: 6.7008787, lng: -1.6479086 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    },
    {
      distance: { text: '4.7 km', value: 4703 },
      duration: { text: '7 mins', value: 437 },
      duration_in_traffic: { text: '8 mins', value: 453 },
      end_address: 'P922+6RF, Sunyani Rd, Kumasi, Ghana',
      end_location: { lat: 6.7006728, lng: -1.6479124 },
      start_address: 'M8X6+97V, Sunyani Rd, Kumasi, Ghana',
      start_location: { lat: 6.6983302, lng: -1.6891836 },
      steps: [ [Object] ],
      traffic_speed_entry: [],
      via_waypoint: []
    }
  ]