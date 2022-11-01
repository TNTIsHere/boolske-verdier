//Oppgave 1
console.log(1 === 1); //true
console.log(1 === 2); //false
console.log(3 == 3); //true
console.log(2 == 3); //false

//Oppgave 2
console.log(1 == "1"); //true
console.log(2 === "2"); //false
//Tre likhetstegn står for "Strict Equal", dette betyr at logiske operatøren ser både på datatype og verdi,
//mens "Vanlig Equal" som er to likhetstegn ser bare på verdi og ikke datatype.

//Oppgave 3
console.log(1 == 1 && 2 == 2); //true
console.log(1 === "1" && 2 === 2); //false
console.log(1 === 1 && "2" === 2); //false
console.log(1 == "1" && 2 == "2") //true

//Oppgave 4
console.log(1 === "1" || 2 == 2) //true
console.log(2 == "2" || 1 === "1"); //true
console.log(2 === 2 || 1 === 1 || 3 === "3"); //true

//Oppgave 5
console.log(1 !== 1); //false
console.log(2 !== 1); //true
console.log(2 !== 1 && 1 === 1); //true
console.log(2 !== "2" && 1 === "1" || 2 == "2"); //true