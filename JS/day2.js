let arr = [1, 2, 3, 4, 5];

// for(i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let sum = 0;
// for(i=0; i<arr.length; i++){
// sum = sum + arr[i]
// }
// console.log(sum)

// let max = arr[0];
// for (i = 0; i < arr.length; i++) {
//  if(max < arr[i]){
//     max = arr[i]
//  }
// }

// console.log(max)

let reversed = [];

for (i = 0; i < arr.length; i++) {
  reversed.push(arr[arr.length - (i + 1)]);
}

console.log(reversed);
