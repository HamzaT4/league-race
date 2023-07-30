const kareemDiv= document.querySelector(".kareem-container");
const hamzaDiv= document.querySelector(".hamza-container");
async function getId() {
 const response1 = await fetch("https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Syrian%20Demon?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data1 = await response1.json();
 const response2 = await fetch("https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/JhinBondOO4?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data2 = await response2.json();
 const hamzaId = data1.id
 const kareemId = data2.id
 ;
 const response3 = await fetch("https://eun1.api.riotgames.com/lol/league/v4/entries/by-summoner/HCn8bAfvK2O4b1gAKCXzHvHa_n0BkveUJme2TNMkTebtWzkbUjkyCSaz5A?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data3 = await response3.json();
 const response4 =await fetch("https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/DCDMwLJe8g-1AOmM0znpdZC6gRlMhBw3zKEdL-xkPGTHOPtF9b6AXutl_w?api_key=RGAPI-e9a85045-dcf8-4aea-b232-79f0d674537d");
 const data4 = await response4.json()
 const hamzaData = data3[1]
const kareemData = data4[0] 
console.log(hamzaData);
console.log(kareemData);
}

getId();
