let input = document.getElementById("nameInput"),
ul = document.getElementById("countries"),
countryList = []; 

input.addEventListener("input", filterName)

function filterName(){
let query = this.value; 
let regex =new RegExp(query, 'gi') 
if(query!== ''){
fetch(`https://restcountries.eu/rest/v2/name/${query}`).
then(response => {
return response.json()
}).
then(data => {
countryList = [...data] // countrylist defined outside fn
})
.
catch(err => console.log(err));

let html = countryList.map(item => {
let country = item.name.replace(regex, `<span class="highlighter">${query}</span>`) 
return `<li>${country}, ${item.capital}</li>`
})
ul.innerHTML = html;
}
else{
ul.innerHTML = '';
}

}
