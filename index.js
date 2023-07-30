const kareemDiv= document.querySelector(".kareem-container");
const hamzaDiv= document.querySelector(".hamza-container");
const hamRank=document.querySelector(".h-rank-txt");
const hamLP=document.querySelector(".h-lp-txt");
const hamWR=document.querySelector(".h-wr-txt");
const karRank=document.querySelector(".k-rank-txt");
const karLP=document.querySelector(".k-lp-txt");
const karWR=document.querySelector(".k-wr-txt");
const timerDiv= document.querySelector(".timer")


let  countDownDate = new Date("Aug 31, 2023 23:59:59").getTime();

var x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate-now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timerDiv.innerHTML="BATTLE ENDS IN "+ days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
});


async function getId() {

 const response3 = await fetch("https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/HCn8bAfvK2O4b1gAKCXzHvHa_n0BkveUJme2TNMkTebtWzkbUjkyCSaz5A?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data3 = await response3.json();
 const response4 =await fetch("https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/DCDMwLJe8g-1AOmM0znpdZC6gRlMhBw3zKEdL-xkPGTHOPtF9b6AXutl_w?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data4 = await response4.json()
 const hamzaData = data3[1]
const kareemData = data4[0] 
const hamTier = document.createElement("img");
const karTier = document.createElement("img");
if (hamzaData.tier=="EMERALD") {
  hamTier.src="./assets/emrald.png"  
} else if (hamzaData.tier=="PLATINUM"){
    hamTier.src="./assets/plat.png" 
}else if (hamzaData.tier=="DIAMOND"){
    hamTier.src="./assets/daimond.png" 
};
if (kareemData.tier=="EMERALD") {
    karTier.src="./assets/emrald.png"  
  } else if (hamzaData.tier=="PLATINUM"){
      karTier.src="./assets/plat.png" 
  }else if (hamzaData.tier=="DIAMOND"){
      karTier.src="./assets/daimond.png" 
  };
  hamTier.classList.add("rank-icon");
  karTier.classList.add("rank-icon");

  hamzaDiv.insertBefore(hamTier,hamRank);
kareemDiv.insertBefore(karTier,karRank);
hamRank.innerHTML=`${hamzaData.tier} ${hamzaData.rank}`
hamLP.innerHTML=`${hamzaData.leaguePoints}LP`
hamWR.innerHTML=`W/L:${hamzaData.wins}/${hamzaData.losses} (${Math.round(hamzaData.wins/(hamzaData.losses+hamzaData.wins)*100) }%)`;

karRank.innerHTML=`${kareemData.tier} ${kareemData.rank}`
karLP.innerHTML=`${kareemData.leaguePoints}LP`
karWR.innerHTML=`W/L:  ${kareemData.wins}/${kareemData.losses} (${Math.round(kareemData.wins/(kareemData.losses+kareemData.wins)*100) }%)`;

console.log(hamzaData);
console.log(kareemData);
}

getId();
