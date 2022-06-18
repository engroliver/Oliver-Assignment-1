async function run(){

let tourisimData = await axios.get("data/TOURISM.geojson");
console.log(tourisimData.data);


}
run()
document.querySelector('#tourist-icon')
.addEventListener('click',async function (){
tourisimData


})