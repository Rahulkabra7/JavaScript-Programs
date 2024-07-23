// class Area{

//     areaRec(len, wid){
//         var area = len * wid;
//         return area;
//     }

//     areaCircle(radius){
//     var area_circle = Math.PI * radius * radius;
//     return area_circle;
//     }

//     areaSqu(side){
//     var area_squ = side * side;
//     return area_squ;
//     }

//     areaTriangle(base, height){
//     var area_triangle = 0.5 * base * height;
//     return area_triangle;
//     }
// }

// var myObj = new Area();

// console.log(myObj.areaRec(20,15));
// console.log(myObj.areaCircle(10));
// console.log(myObj.areaSqu(25));
// console.log(myObj.areaTriangle(10,15));


// String reverse program

// var str = "Wellcome to Javascript";
// var str_rev = ""

// for(let i=str.length-1; i!= -1; i--){
//     str_rev = str_rev + str[i]
//     // console.log(str[i]);
// }
// console.log(str_rev);


// class num_aar {
//     searchNumber(arr,num){
//         for(let i=0; i != (arr.length - 1) ; i++){
//             if(arr[i]==num){
//                 // console.log(arr.length);
//                 console.log(`Entered number found at ${i}th index`);
//                 break;
//             }
//             else{
//                 // console.log("Entered number is not found");
//                 continue;
//             }
//         }
//     }
// }

// myobj = new num_aar();
// arr1 = [10, 20, 30, 40, 50, 60, 70];
// myobj.searchNumber(arr1,40);


var str = "Wellcome to Javascript";
w_count = 0
word_ser = "a"

for(let i = 0; i!= str[str.length-1]; i++){
    if(word_ser == i){
        w_count+=1;
    }
    else{
        // console.log("Entered number is not found");
        continue;
    }
    console.log(w_count);
}