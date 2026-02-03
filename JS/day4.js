// const add = (a, b) => {
//   return a + b;
// };


// console.log(add(2,5))


// const checkOdd = (n) => {
//   return n%2 == 0 ? "it is even ": "it is odd"
// }

// console.log(checkOdd(8))


// const revStr = (Str) => {
//     let reversed = ""
//      for(i=0; i<Str.length; i++){
//        reversed = reversed + Str[Str.length - (i + 1)]
        
//     }
//     return reversed
// }


// console.log(revStr("booboo"))

// const revStr = (str) => {
//     let reversed = ""
//     for(let i = str.length - 1; i>=0; i--){
//    reversed = reversed + str[i]
// }
// return reversed
// }



// console.log(revStr("hello"))


const checkPal = (pal) =>{
    let reversed = "";
    for(let i = pal.length-1; i>=0; i--){
        reversed = reversed + pal[i]
    }

    if(pal == reversed){
        return "it is a palindrome"
    }else{
        return "it ain't"
    }
}

console.log(checkPal("bob"))