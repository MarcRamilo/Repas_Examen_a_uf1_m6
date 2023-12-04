// data from data_ex3.js
const { users } = require("./data_ex3");

//Retornar un array amb els noms de tots els usuaris que tenen el hobbie "running"
function getUsersByHobby(hobby) {
  return (usuaris = users.reduce((accum, { name, hobbies }) => {
    if (hobbies.includes(hobby)) {
      accum.push(name);
    }
    return accum;
  }, []));
}

//Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem
function friendsAverageAge(userId) {
  //agafar usuari per id
  const user = users.find((usuari) => usuari.id == userId);
  //agafar els seus amics
  const amics_usuari = user.friends;

  //agafar les edats de cada amic
  const edats_amics = amics_usuari.map((amic) => {
    const amic_user = users.find((u) => u.id === amic.id);
    return amic_user.age;
  });
  //fer la mitjana
  const mitjana_edat = Math.floor(
    edats_amics.reduce((suma, edat) => suma + edat, 0) / edats_amics.length
  );
  return mitjana_edat;
}

//Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen
function sharedHobbies(userId) {
  //agafar usuari per id
  const user = users.find((usuari) => usuari.id == userId);
    //agafar els hobbies del usuari
    const hobbies_usuari = user.hobbies;

    const hobbies_amics = user.friends.reduce((accum,friend)=>{
        const amic = users.find((u) => u.id === friend.id);
        if(amic){
            accum.push(...amic.hobbies)
        }
        return accum;
    }, []);

    const hobbiesCompratits = hobbies_usuari.filter((hobby) => hobbies_amics.includes(hobby));

    return hobbiesCompratits;
}

module.exports = { getUsersByHobby, friendsAverageAge, sharedHobbies };
