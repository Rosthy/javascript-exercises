const repeatString = function(string,num) {
    let word = ""
    if(num < 0){
        return "ERROR"
    }
    else{
        for(let x = 0;x < num;x++){
        word = word + string
    }
        
    return word
}

};

// Do not edit below this line
module.exports = repeatString;
