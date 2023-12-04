// data from data_ex3.js
const { users } = require("./data_ex3");

//Retornar un array amb els noms de tots els usuaris que tenen el hobbie "running"
function getUsersByHobby(hobby) {
  const userHobbie = users.reduce((accum, {name,hobbies}) =>{
    if (hobbies.includes(hobby)) {
     accum.push(name); 
    }
    return accum;
  },[])
  return userHobbie;
}

//Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem
function friendsAverageAge(userId) {
  //Get user by id
  const usuari = users.find((u) => u.id === userId);
  //Get friends
  const amicsUsuari = usuari.friends;
  //Get edatAmics
  const edatAmics = amicsUsuari.map((amics) =>{
    const amic = users.find((f) => f.id === amics.id);
   return amic.age;
  });

  const mitjana_edat = Math.floor(
    edatAmics.reduce((suma,edat) => suma + edat ,0) / edatAmics.length);
  
  return mitjana_edat;
}

//Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen
function sharedHobbies(userId) {
  //Get user per ID
  const usuari = users.find((u) => u.id === userId);
  //Get hobbies user
  const hobbiesUser = usuari.hobbies;
  //Get friens user
  const friendsUser = usuari.friends;
  //Get hobbies friends
  const hobbiesFriends = friendsUser.reduce((accum,friend) =>{
    const amic = users.find((f) => f.id === friend.id);
    if (amic) {
      accum.push(...amic.hobbies)
    }
    return accum;
  },[]);

  const hobbiesCompratits = hobbiesUser.filter((hobbie) => hobbiesFriends.includes(hobbie) );
  return hobbiesCompratits;
}

module.exports = { getUsersByHobby, friendsAverageAge, sharedHobbies };
