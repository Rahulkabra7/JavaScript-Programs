// String reverse program

var str = "Wellcome to Javascript";
var str_rev = ""

for(let i=str.length-1; i!= -1; i--){
    str_rev = str_rev + str[i]
    // console.log(str[i]);
}
console.log(str_rev);