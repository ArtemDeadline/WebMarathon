export default function sortEvenOdd(arr){
    arr.sort(function(a, b){return a-b;});
    arr.sort(function splitEvenOdd(a,b){
        if(a%2==0 && b%2==1)
            return -1;
    });
}
