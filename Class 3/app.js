

function printVariable()
{
    let names = ["sumbul",2,4,6,8]; //always write array names in plural, for coders to know its array
    console.log(names);

    for (let i=0;i<names.length;i++) {
        console.log(names[i]);
    }

}


/**Room 2: Create a calculator in Javascript. The calculator should perform following operations:
Addition
Subtraction
Multiplication
Division
Remainder
Also, it should check the divisor. If the divisor is zero it should print the error message. Program this using Switch case and If Else.
 */
function calculator() {
    let a  = 10 ,b=20;
    
    let inputValue = document.querySelector("input").value;

    switch (inputValue != ' ' && inputValue != null)   {

        document.write("a and b are ");
    document.write("a + b = ");
            let result = a + b;
            document.write(result);
            document.write("<br />");
         
            document.write("a - b = ");
            result = a - b;
            document.write(result);
            document.write("<br />");
         
            document.write("a / b = ");
            result = a / b;
            document.write(result);
            document.write("<br />");
         
            document.write("a % b = ");
            result = a % b;
            document.write(result);
            document.write("<br />");
}
}