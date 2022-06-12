const BASE_API_URL = "https://api.foursquare.com/v3"
const API_KEY = "fsq36OGrBXocg36c2UxFfQWuZVfP/SrZiGvSJ1srdOZEaKM="
const header = {
    "Accept":'application/json',
    "Authorization":API_KEY
}

async function search(lat,lng,query){
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL+"/plces/search",{
            "headers":header,
            "params":{
                'll':ll,
                'query':query
            }


    })
    return response.data
}