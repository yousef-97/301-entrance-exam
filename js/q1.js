'use strict';
function greaterThan(arr,theNum){
    var counter = 0;
    for(var i = 0; i<arr.length;i++){
        if (arr[i]>theNum){
            counter++;
        }
    }
    return counter;
}
var testArr = [1,2,3,4,6,7];
var testNum = 7;
greaterThan(testArr,testNum);