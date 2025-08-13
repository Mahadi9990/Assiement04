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