// Print numbers 1..100 with any number that is 
// divisible by 3 being replaced by the string MATCH
var topNum = 10;

for (var i = 0; i <= topNum; i++){

    if( (i%3) == 0){
        console.log("MATCH");
    } else {
        console.log("  " + i);
    }

}