let user = {
  name: "Alex",
  age: 22,
  skills: ["JS", "React"],
};

user.city = "kochi";
user.isStudent = true;

// console.log(user.name, user.city)

// for(let key in user){
//     console.log(key, user[key])
// }

// console.log("name" in user)
// console.log("isStudent" in user)

// for(let key in user){
//     console.log(user[key])
// }

// let arr = [1, 2, 2, 3, 3, 3,];

// let freq = {};

// for(i=0; i<arr.length; i++){
//     let val = arr[i]
//     if(freq[val]){
//         freq[val]++
//     }else{
//         freq[val] = 1
//     }
// }

// console.log(freq)

let char = "hellllooo"
let count = {}

for(i=0; i<char.length; i++){
    let val = char[i]
    if(count[val]){
        count[val]++
    }else{
        count[val] = 1
    }
}

console.log(count)