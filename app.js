let singBtn = document.querySelector("#singBtn");
let friends = ["Tim", "Tam", "Tom", "Tang"];

// for(let i = 0; i < friends.length; i++){
//     console.log(`${friends[i]}:`)
//     for(let x = 99; x >= 1; x--){
//         if(x > 1){
//             console.log(`${x}lines of code in the file,`)
//         }
//         else{
//             console.log(`1 line of code in the file, 1 line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
//         }
//     }
// }

singBtn.addEventListener("click",(()=>{
    console.log("Button has been picked")
    for(let i = 0; i < friends.length; i++){
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(`${friends[i]}`)
        div.appendChild(h3)
        h3.appendChild(h3Text)
        document.body.appendChild(div);

        for(let x = 99; x >= 1; x--){
            if(x > 1){
                let p = document.createElement('p');
                let pText = document.createTextNode(`${x} lines of code in the file,`)
                p.appendChild(pText)
                div.appendChild(p)
            }else{
                let p = document.createElement('p');
                let pText = document.createTextNode(`1 line of code in the file, 1 line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
                p.appendChild(pText)
                div.appendChild(p)
            }
        }

    }
}))



