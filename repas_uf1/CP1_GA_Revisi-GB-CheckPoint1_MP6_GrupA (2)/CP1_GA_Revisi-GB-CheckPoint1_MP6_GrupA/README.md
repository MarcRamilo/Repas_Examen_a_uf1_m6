# Check Point 1 - UF1 i UF2 - Fonaments de JS, funcions i arrays.

## :warning: **ATENCIÓ!** No creeïs cap arxiu nom i treballa als arxius ja creats amb els noms Ex1, Ex2 and Ex3 sota la carpeta /src i fes un commit per cada exercici! Verifica els testos per acabar d'entendre el que es demana i verificar que el resultat és l'esperat :warning:

### :weight_lifting_man: Exercici 1 - Tauler d'escacs (2punts)

Crea un script que generi una cadena de text (string) que representi una graella d'8 × 8, utilitzant salts de línia per separar les files. En cada posició de la graella hi ha un espai o un caràcter "#". Aquests caràcters formen un taulell d'escacs.

:bulb: **Has de fer servir al menys una sentència de repetició (com per exemple el `for`) i una sentència condicional (com per exemple el `if`).**

Quan passes aquesta cadena de text a `console.log`, s'hauria de mostrar alguna cosa com això:

```javascript
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
```

**Puntuació: 0p si el programa no funciona o no s'ha fet ús de cap dels requisits. 1p si s'ha fet un ús parcial. 2p s'hi s'ha fet ús de for i if**

### :fire: Exercici 2 - Week Planner (2punts)

En aquest exercici, crearàs un petit planificador d'activitats. L'objectiu és calcular si tens temps suficient per realitzar les activitats diàries que tens planejades. El programa calcularà el temps disponible a partir de les teves hores de son, el temps que passes treballant i altres compromisos.

Per practicar-ho, et facilitem les dades amb les que hauràs de provar el teu programa. Aquestes dades són les següents i ja les tens disponibles al mateix arxiu:

```javascript
const sleepHours = {
    monday: 7,
    tuesday: 6,
    wednesday: 8,
    thursday: 7,
    friday: 6,
    saturday: 9,
    sunday: 8,
    idealHoursDay: 8
};

const workHours = 8;

const activities = [
    { name: 'Gym', time: 1 },
    { name: 'Party', time: 2 },
    { name: 'Watch TV', time: 3 }
    { name: 'Play videogames', time: 5 }
];
```

A continuació hauràs d'implementar les següents funcions (cada funció ha de retornar el valor que s'indica):

- `getSleepHours(day)`: Retorna les hores de son d'un dia específic.
- `getActualSleepHours()`: Retorna el total d'hores reals de son que has dormit durant els dies laborals.
- `getIdealSleepHours()`: Retorna el total d'hores ideals de son que prefereixes dormir la setmana
- `getFreeTimeHours()`: Retorna les hores lliures disponibles a la setmana sense comptar el cap de setmana i després de descomptar les hores de son i de treball (5 dies de feina a la setmana)
- `calculateActivitiesTime(activities)`: Permet als usuaris especificar les activitats que volen realitzar (teniu la mostra) i retorna el temps necessari TOTAL per completar-les.
- `canDoActivities(activities)`: ha de cridar `calculateActivitiesTime(activities)` i comprovar si hi ha prou temps lliure per realitzar totes les activitats. Mostra un missatge a la consola segons la situació: si es poden fer totes les activitats o si no hi ha prou temps lliure.

**Puntuació: cada funció té el mateix pes, 2/6 = 1/3p**

### :rocket: Exercici 3 - Databases (2,5punts)

L'exercici 3 té importada una base de dades en format JSON i ja passades a un arxiu js. Pots veure les dades a l'arxiu data_ex3.js

Hauràs de realitzar les següents tasques. T'aconsello que pensis bé en cada cas quin mètode de l'array és el més adequat per resoldre cada cas:

1. Retornar un array amb tots els usuaris que tenen el hobbie "running" (0,5p).
2. Calcular i retornar la mitjana d'edat (numero arrodonit a l'enter més petit) de les amistats de l'usuari en funció de l'id que li passem (1p).
3. Retornar un array amb els hobbies que comparteixen l'usuari i les seves amistats si existeixen (1p).

Puntuació: només comptarà si funciona la funció i es fan servir mètodes d'arrays.

:speech_balloon: **Hi ha 0,5p extra. 4p del test + 6,5p (10,5p) totals que es poden aconseguir i poden ajudar a pujar nota. La nota màxima final haurà de ser <= 10 en qualssevol cas.**
