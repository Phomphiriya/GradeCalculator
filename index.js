let subjectInput = document.getElementById("subject-input");
let creditInput = document.getElementById("credit-input");
let gradeInput = document.getElementById("grade-input");

let subjectInput2 = document.getElementById("subject-input2");
let creditInput2 = document.getElementById("credit-input2");
let gradeInput2 = document.getElementById("grade-input2");

let runbutton = document.getElementById("run-button");
let output = document.getElementById("output");

function printOutput(){
    let credit = Number(creditInput.value);
    let grade = Number(gradeInput.value);
    let credit2 = Number(creditInput2.value);
    let grade2 = Number(gradeInput2.value);

    let outputHtml = "";
    
    if(grade < 0){
        output.innerHTML = "Can't calculated";
        return;
    }
    if(credit < 0){
        output.innerHTML = "Can't calculated";
        return;
    }
    let allCredit = credit + credit2;
    let calGrade = credit * grade;

    let calGrade2 = credit2 * grade2;
    let allGrade = calGrade + calGrade2;

    
    outputHtml = allGrade/allCredit;

    output.innerHTML = "Your GPA is : " + outputHtml;
}

runbutton.addEventListener("click",printOutput);