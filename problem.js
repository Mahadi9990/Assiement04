// // // problem 01
// // function totalFine( fare ) {
// //     if (!isNaN(parseInt(fare))){
// //         if( fare <= 0 || typeof fare === 'string'){
// //             return "Invalid"
// //         }else{
// //             const fine = fare + fare * (20 / 100)  + 30
// //             return fine
// //         }
// //     }else{
// //         return "Invalid"
// //     }
// // }
// // const fine = totalFine(50)
// // console.log(fine)




// // problem 02
// function  onlyCharacter( str ) {
//     if(typeof str === "string"){
//         const text =   str.split(" ").join("").toUpperCase()
//         return text
//     }else{
//         return "Invalid"
//     }
      
// }
// const fine = onlyCharacter(true)
// const fine2 = onlyCharacter(["hack", "me"])
// const fine3 = onlyCharacter("Serv er : : Do wn")
// const fine4 = onlyCharacter(" ha ck m e 1 @ru.c  n  ")
// const fine5 = onlyCharacter("Cy   bar- At  tac k  ")
// console.log(fine)
// console.log(fine2)
// console.log(fine3)
// console.log(fine4)
// console.log(fine5)



// problem 03
// function  bestTeam( player1, player2 ) {
//     if( typeof player1 === "object" & typeof player2 === "object"){
//         let totalFoulByPlayer1Team = player1.foul + player1.cardR + player1.cardY
//         let totalFoulByPlayer2Team = player2.foul + player2.cardR + player2.cardY
         
//         if(totalFoulByPlayer1Team > totalFoulByPlayer2Team){
//             return player2.name
//         }else if(totalFoulByPlayer1Team === totalFoulByPlayer2Team){
//             return "Tie"
//         }else{
//             return player1.name
//         }
//     }else{
//         return "Invalid"
//     }

// }

// const fine = bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
// const fine2 = bestTeam({ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
// { name: "Sweden", foul: 7, cardY: 4, cardR: 1 })
// const fine3 = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },
// { name: "France", foul: 10, cardY: 2, cardR: 1 })
// const fine4 = bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France")
// console.log(fine)
// console.log(fine2)
// console.log(fine3)
// console.log(fine4)


// problem 04