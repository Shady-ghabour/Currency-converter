const sel1 = document.getElementById("first-selector");
const sel2 = document.getElementById("second-selector");
const in1 = document.getElementById("first-in")
const in2 = document.getElementById("second-in")
const para = document.querySelector(".rate-exchanger");

update();

function update (){
    fetch(`https://v6.exchangerate-api.com/v6/27c85fd309fb64a13ec66ac4/latest/${sel1.value}`).then ((res) => res.json()). 
    then((data) => {
        const rate = data.conversion_rates[sel2.value];
        console.log(rate);

        para.textContent = `1 ${sel1.value} = ${rate} ${sel2.value}`;  
        in2.value = (rate * in1.value).toFixed(2); 
    })
}

sel1.addEventListener("change", update);
sel2.addEventListener("change", update);
in1.addEventListener("input", update);
