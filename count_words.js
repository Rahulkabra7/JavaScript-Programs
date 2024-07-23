var str = "Wellcome to Javascript";
var w_count = 0
var word_ser = "a"

for(let i = 0; i<String.length; i++){
    if( str[i] == word_ser){
        w_count+=1;
    }
    else{
        // console.log("Entered number is not found");
        continue;
    }
    console.log(w_count);
}