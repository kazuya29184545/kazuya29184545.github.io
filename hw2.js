const myFunction = function () {
    //name
    let person = prompt("Let's play the sum game. \nPlease enter your name");

    if (person != null) {

        //first number
        let firstNum = parseInt(prompt("Enter the fist number"));
        
        if (firstNum != null) {
            //second number
            let secondNum = parseInt(prompt("Enter the second number"));
            if (secondNum != null) {
                let total = firstNum + secondNum;
                document.getElementById("demo").innerHTML =
                "Hi, " + person + "! The sum of " + firstNum + " + " + secondNum + " is " + total;
            }
        }
        
    }
}
myFunction();
