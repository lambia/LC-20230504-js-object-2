/******************************************** Creazione oggetto con prop dinamiche */
// let nome = 'Paolo';
// let age = 30;
// let email = 'paolo@email.it';
// let nuovaEmail = "aggiornata@email.it";
 
// //es5 style sempre valido
// const student = {
//  nome: nome,
//  age: age,
//  email: email
// };

// student.email = nuovaEmail;

// console.log( student ); 
 
// //es6 style
// const studentNuovo = {
//     nome,
//     age,
//     email
// };

// studentNuovo.email = "mail1@mail.it"
// let nomeProprieta = "email";
// studentNuovo['email'] = "mail2@mail.it"
// studentNuovo[nomeProprieta] = "mail3@mail.it";

// console.log( studentNuovo ); 
// console.log(email); //attenzione che la variabile non è collegata alla proprietà dell'oggetto


/********************************** proprietà con nome dinamico e destructuring */
// const proprietaDiLuca = "colorePreferito";
// const valoreProprietaDiLuca = "rosso";

// const studentDinamico = {
//     nome: "Luca",
//     age: 33,
//     [proprietaDiLuca]: valoreProprietaDiLuca
// }
// // in passato abbiamo visto come creare una proprietà con nome dinamico DOPO aver creato l'oggetto
// // studentDinamico[proprietaDiLuca] = "verde";

// // const nome = studentDinamico.nome;
// // const age = studentDinamico.age;
// const {nome,peso,eta,age} = studentDinamico; //peso ed eta saranno undefined

// console.log(studentDinamico);
// console.log("nomeStudente", nome);

/********************************* spread / rest */
// function stampaNVolte(messaggio, numeroDiVolte) {
//     for (let i = 0; i < numeroDiVolte; i++) {
//         console.log(messaggio);
//     }
// }

// function stampaNVolteRestVecchio(...argomenti) {
    
//     let messaggio = argomenti[0];
//     let numeroDiVolte = argomenti[1];

//     for (let i = 0; i < numeroDiVolte; i++) {
//         console.log(messaggio);
//     }
// }

// function stampaNVolteRest(messaggio, numeroDiVolte, ...argomenti) {
    
//     console.log(argomenti); //gli argomenti dal terzo in poi vanno in questo array

//     for (let i = 0; i < numeroDiVolte; i++) {
//         console.log(messaggio);
//     }
// }

// stampaNVolte( "ciao", 3 );
// stampaNVolteRest( "ciao con rest", 5, true, "altriArgomenti" );


// function stampaSerieDiNumeriDaArray(numeri) {
//     console.log("Serie di numeri fornita da array: ", numeri);
//     numeri.forEach((numero)=> console.log("numero", numero) )
// }

// let numeriDaPassare = [1,4,2,6,73,35,86,35,45];
// stampaSerieDiNumeriDaArray(numeriDaPassare);

// function stampaSerieDiNumeriDaArgomenti(...numeri) {
//     console.log("Serie di numeri fornita da argomenti: ", numeri);
//     numeri.forEach((numero)=> console.log("numero", numero) )
// }
// stampaSerieDiNumeriDaArgomenti(1,4,2,6,73,35,86,35,45);

/********************************************* copia prop oggetto */

const attaccante = {
    ruolo: "attacco",
    scarpette: "rosse"
};
console.log(attaccante);

const marco = {
    ...attaccante, //copia tutte le proprieta dall'oggetto "obj"
    nome: "Marco",
    numero: 9
};
const patrik = {
    ...attaccante, //copia tutte le proprieta dall'oggetto "obj"
    nome: "Patrik",
    numero: 10
};

console.log(marco); 
console.log(patrik); 