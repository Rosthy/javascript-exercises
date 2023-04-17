const sumAll = function(start,end) {
    if(typeof start === "string" || typeof end === "string"){
        return "ERROR"
    }
    if(start >= 0 && end >= 0){
        let sub = Math.abs(start - end)
        let total = sub+1
        for(let i = 0;i <= sub;i++){
            total += i
        }
        return Math.abs(total)
        }
    else{return 'ERROR'
    }



};

// Do not edit below this line
module.exports = sumAll;
