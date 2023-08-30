const list = document.querySelector("ul");


const valueArray =[];
setInterval(generateBar,1000)
function generateBar(){
const randomNumber = Math.floor(Math.random()*100);
valueArray.push(randomNumber);
const li = document.createElement("li");
li.style.setProperty("--height",randomNumber);
list.appendChild(li);
if(valueArray.length>20){
    valueArray.shift();
    list.removeChild(list.firstElementChild);
}
console.log("value array", valueArray)
}