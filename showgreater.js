/*
Write a JavaScript program that accept two integers and display the larger
*/

function ShowGreaterInput(a, b) {
    let greaterInput = (a > b) ? a : b;
    return "Greater integer is" + " " + greaterInput;
}


console.log(ShowGreaterInput(2, 10))
//"Greater integer is 10"
ShowGreaterInput(2, 10)
//"Greater integer is 10"
ShowGreaterInput(20, 5)
//"Greater integer is 20"
