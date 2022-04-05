
const cilv = ["jānis bērziņš", "valdis zatlers", "vaira vīķe freiberga", "raimonds vējonis", "egils levits"];
const balva = ["velosipēds", "telefons", "mašīna", "ceļojums uz spāniju", "dimants"];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;//uzvarētāju skaits
let rindas = document.querySelector(".rindas");
rindas.innerHTML = " ";

for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * 5;
    rand = Math.floor(rand);//noapaļo uz leju


    let bonus = balva[rand];
    let uzvaretajs = cilv[rand];
    rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${bonus}</td>
</tr>`
}