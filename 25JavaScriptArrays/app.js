const listArray=["Bini", 35, "null", "undefined","ture", "false",
["Asmara", "Eritrea", 14, ],
{test:'one', color:'pink'}];
console.log(listArray[0]);

let a=listArray.length;
for(let i=0; i<=a-1; i++)
console.log(listArray[i])
// Displaying the elements of the sub-elements of the listArray
console.log(listArray[7].color)
console.log(listArray[6][0])