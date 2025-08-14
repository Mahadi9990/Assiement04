// // // problem 01
// // function finalScoreFine( fare ) {
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
// // const fine = finalScoreFine(50)
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
//         let finalScoreFoulByPlayer1Team = player1.foul + player1.cardR + player1.cardY
//         let finalScoreFoulByPlayer2Team = player2.foul + player2.cardR + player2.cardY
         
//         if(finalScoreFoulByPlayer1Team > finalScoreFoulByPlayer2Team){
//             return player2.name
//         }else if(finalScoreFoulByPlayer1Team === finalScoreFoulByPlayer2Team){
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
// function  isSame(arr1 , arr2 ) {
//           if(Array.isArray(arr1) &&  Array.isArray(arr2)){
//             if( arr1.length === arr2.length){
//             for ( let i = 0; i < arr1.length; i++){
//                 if( arr1[i] !== arr2[i])
//                     return false
//             }
//             return true
//             }else{
//                 return false
//             }
//           }else{
//             return "Invalid"
//           }
// }

// const fine = isSame([1, 2, 3] , [1 , 2 , 3])
// const fine2 = isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ])
// const fine3 = isSame([1, undefined , 3] , [1,null ,3])
// const fine4 = isSame([1 , 4 , 5], [1 , 4 , 5])
// const fine5 = isSame([1 , "4" , 4] ,[1 , 4  , 4])
// const fine6 = isSame([2 , 5 , 6] ,256)
// const fine7 = isSame({data: [2 , 5 , 6] } , [2 , 5 , 6])
// console.log(fine)
// console.log(fine2)
// console.log(fine3)
// console.log(fine4)
// console.log(fine5)
// console.log(fine6)
// console.log(fine7)



// problem 05
function  resultReport( marks ) {
    if(Array.isArray(marks)){
        let restul = {
            finalScore : 0,
            pass : 0,
            fail : 0
        }
        for( let i = 0 ; i < marks.length; i++){
            if(marks[i] >= 40){
                restul.pass += 1
            }else{
                restul.fail += 1
            }
            restul.finalScore += marks[i]
        }
        if( marks.length > 1){
            restul.finalScore = Math.round( restul.finalScore / marks.length)
        }
        return restul
    }else{
        return 'Invalid'
    }
}


const fine = resultReport([])
const fine2 = resultReport([98, 87, 67, 91, 92, 33, 87])
const fine3 = resultReport([99, 87, 67, 12 ,87])
const fine4 = resultReport([99])
const fine5 = resultReport(100)
console.log(fine)
console.log(fine2)
console.log(fine3)
console.log(fine4)
console.log(fine5)


