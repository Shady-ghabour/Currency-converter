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

        


        para.textContent = `1 ${sel1.value} = ${rate.toLocaleString("de-DE", {minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${sel2.value}`;  
        
        const convertedValue = rate * in1.value;
        in2.value = convertedValue.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    })
}

sel1.addEventListener("change", update);
sel2.addEventListener("change", update);
in1.addEventListener("input", update);
