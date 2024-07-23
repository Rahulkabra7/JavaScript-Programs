class num_aar {
    searchNumber(arr,num){
        for(let i=0; i != (arr.length - 1) ; i++){
            if(arr[i]==num){
                // console.log(arr.length);
                console.log(`Entered number found at ${i}th index`);
                break;
            }
            else{
                // console.log("Entered number is not found");
                continue;
            }
        }
    }
}

myobj = new num_aar();
arr1 = [10, 20, 30, 40, 50, 60, 70];
myobj.searchNumber(arr1,40);