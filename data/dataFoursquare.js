const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3OhU4JHfRnnenHp/4J6Ud/Y0B4s+yzAgh1ekedKltNjM=";
const headers = {
    "Accept":'application/json',
    "Authorization":API_KEY
}


async function search(lat, lng, query) {
    let ll = lat+","+lng;
    let response = await axios.get(BASE_API_URL + "/places/search",{
        "headers": headers,
        "params":{
            'll':ll,
            'query':query,
            'limit': 50,
        }
    })
    return response.data;
}


