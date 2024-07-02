let friends = ["Dan", "John", "James", "Chris", "Todd"];

for(let i = 0; i < friends.length; i++){
    console.log(friends[i]+":")
    for(let x = 99; x > 1; x--){
    console.log(x + " lines of code in the file, "+ x + " lines of code; "+ friends[i] +" strikes one out, clears it all out,")
        if(x == 2){
            console.log("1 line of code in the file, 1 line of code; "+ friends[i] +" strikes one out, clears it all out, no more lines of code in the file")
        }
    }
}