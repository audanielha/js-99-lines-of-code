let friends = ["Tim", "Tam", "Tom", "Tang"];


for(let i = 0; i < friends.length; i++){
    console.log(`${friends[i]}:`)
    for(let x = 99; x >= 1; x--){
        if(x > 1){
            console.log(`${x}lines of code in the file,`)
        }
        else{
            console.log(`1 line of code in the file, 1 line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
        }
    }
}



