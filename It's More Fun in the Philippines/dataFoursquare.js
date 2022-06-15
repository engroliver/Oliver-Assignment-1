const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "ffsq3hKp9OOcuRNZDm8wgs0SQZQLWwLw8XI+BOi6Yq3E5RDA=";
const headers = {
    "Accept":'application/json',
    "Authorization":API_KEY
}

async function search(lat,lng,query){
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL+"/plces/search",{
            "headers":headers,
            "params":{
                'll':ll,
                'query':query,
                'limit':50,
            }
    })
    return response.data
}