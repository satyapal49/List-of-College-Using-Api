let btn = document.querySelector("button")
btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    let clg = await getClg(country);
    console.log(clg);
    show(clg);
})

let url = "http://universities.hipolabs.com/search?name=";
async function getClg(country) {
    let res = await axios.get(url+country)
    return res.data;
}

function show(clg){
    let list = document.querySelector("#list")
    list.innerText ="";
    for(col of clg){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}