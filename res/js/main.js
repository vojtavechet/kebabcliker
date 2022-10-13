const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickeupgrade = document.getElementById("clickeupgrade");

let cookienumber = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;
let clickeupgradePrice = 50;
let clickeupgradeIncrease = 1;

cookie.onclick = () => {
  cookienumber += clickeupgradeIncrease;
  counter.innerHTML = cookienumber;
};
clickeupgrade.onclick = () => {
    if (cookienumber >= clickeupgradePrice) { 
        cookienumber -= clickeupgradePrice;
        counter.innerHTML = cookienumber;
        clickeupgradePrice *= 2;
        clickeupgrade.innerHTML = `buy click upgrade: ${clickeupgradePrice}`;
        clickeupgradeIncrease ++;
}
}
autoclicker.onclick = () => {
  if (cookienumber >= autoclickerPrice) {
    cookienumber -= autoclickerPrice;
    counter.innerHTML = cookienumber;
    autoclickerPrice *= 3;
    autoclicker.innerHTML = `buy autoclicker: ${autoclickerPrice}`;
    if (autoclickerIncrease == 0);
    {
      setInterval(() => {
        cookienumber += autoclickerIncrease;
        counter.innerHTML = cookienumber;
      }, 1000);
    }
    autoclickerIncrease++;
  }
}
