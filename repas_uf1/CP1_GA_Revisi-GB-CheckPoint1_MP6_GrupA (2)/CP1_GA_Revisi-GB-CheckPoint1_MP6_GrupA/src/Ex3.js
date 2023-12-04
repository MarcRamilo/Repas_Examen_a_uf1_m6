// data from data_ex3.js
const { users } = require("./data_ex3");

//Retornar un array amb els noms de tots els usuaris que tenen el hobbie "running"
function getUsersByHobby(hobby) {
  return usuaris = users.reduce((accum,{name,hobbies}) =>{
    if (hobbies.includes(hobby)) {
      accum.push(name);
    }
    return accum;
  },[])
}

//Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem
function friendsAverageAge(userId) {
 //Agafar Usuari per Id
 const user = users.find((u) => u.id === userId);ç
 //Agafar amics usuari
 const amicsUser = user.friends;
 //Agafar edatAmics
 const edatAmics = users.map((amic)=>{
  const amicUser = users.find((u)=> u.id === amic.id);
  return amicUser.age;
 });
 //Calculem la mitjana
 const mitjana_edat = Math.floor(
  edatAmics.reduce((suma,edat)=> suma + edat,0) / edatAmics.length);
 return mitjana_edat;
}

//Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen
function sharedHobbies(userId) {
  
}

module.exports = { getUsersByHobby, friendsAverageAge, sharedHobbies };
