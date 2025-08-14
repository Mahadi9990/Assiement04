// problem 01
function totalFine( fare ) {
    if (!isNaN(parseInt(fare))){
        if( fare <= 0 || typeof fare === 'string'){
            return "Invalid"
        }else{
            const fine = fare + fare * (20 / 100)  + 30
            return fine
        }
    }else{
        return "Invalid"
    }
}

// problem 02
function  onlyCharacter( str ) {
    if(typeof str === "string"){
        const text =   str.split(" ").join("").toUpperCase()
        return text
    }else{
        return "Invalid"
    }
      
}

// problem 03
function  bestTeam( player1, player2 ) {
    if( typeof player1 === "object" & typeof player2 === "object"){
        let totalFoulByPlayer1Team = player1.foul + player1.cardR + player1.cardY
        let totalFoulByPlayer2Team = player2.foul + player2.cardR + player2.cardY
        if(totalFoulByPlayer1Team > totalFoulByPlayer2Team){
            return player2.name
        }else if(totalFoulByPlayer1Team === totalFoulByPlayer2Team){
            return "Tie"
        }else{
            return player1.name
        }
    }else{
        return "Invalid"
    }
}

// problem 04
function  isSame(arr1 , arr2 ) {
          if(Array.isArray(arr1) &&  Array.isArray(arr2)){
            if( arr1.length === arr2.length){
            for ( let i = 0; i < arr1.length; i++){
                if( arr1[i] !== arr2[i])
                    return false
            }
            return true
            }else{
                return false
            }
          }else{
            return "Invalid"
          }
}

// problem 05
function  resultReport( marks ) {
    if(Array.isArray(marks)){
        let result = {
            finalScore : 0,
            pass : 0,
            fail : 0
        }
        for( let i = 0 ; i < marks.length; i++){
            if(marks[i] >= 40){
                result.pass += 1
            }else{
                result.fail += 1
            }
            result.finalScore += marks[i]
        }
        if( marks.length > 1){
            result.finalScore = Math.round( result.finalScore / marks.length)
        }
        return result
    }else{
        return 'Invalid'
    }
}