const removeFromArray = function(arr,...args) {
    const value = Array.from(args)
        for(let y = 0;y < value.length;y++){
            for(let i= 0 ;i < arr.length;i++){
            if(arr[i]=== value[y]){
                arr.splice(i,1)
            }
        }
    }
    
    return arr
}

// Do not edit below this line
module.exports = removeFromArray;
