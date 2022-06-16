async function run(){

let trafficcondition = await axios.get("https://api.data.gov.sg/v1/transport/traffic-images");
console.log(trafficcondition.data);


}
run()