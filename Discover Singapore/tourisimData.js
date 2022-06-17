async function run(){

let tourisimData = await axios.get("TOURISM.geojson");
console.log(tourisimData.data);


}
run()