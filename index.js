let subjectInput = document.getElementById("subject-input");
let creditInput = document.getElementById("credit-input");
let gradeInput = document.getElementById("grade-input");

let subjectInput2 = document.getElementById("subject-input2");
let creditInput2 = document.getElementById("credit-input2");
let gradeInput2 = document.getElementById("grade-input2");

let subjectInput3 = document.getElementById("subject-input3");
let creditInput3 = document.getElementById("credit-input3");
let gradeInput3 = document.getElementById("grade-input3");

let subjectInput4 = document.getElementById("subject-input4");
let creditInput4 = document.getElementById("credit-input4");
let gradeInput4 = document.getElementById("grade-input4");

let subjectInput5 = document.getElementById("subject-input5");
let creditInput5 = document.getElementById("credit-input5");
let gradeInput5 = document.getElementById("grade-input5");

let subjectInput6 = document.getElementById("subject-input6");
let creditInput6 = document.getElementById("credit-input6");
let gradeInput6 = document.getElementById("grade-input6");

let subjectInput7 = document.getElementById("subject-input7");
let creditInput7 = document.getElementById("credit-input7");
let gradeInput7 = document.getElementById("grade-input7");

let subjectInput8 = document.getElementById("subject-input8");
let creditInput8 = document.getElementById("credit-input8");
let gradeInput8 = document.getElementById("grade-input8");

let subjectInput9 = document.getElementById("subject-input9");
let creditInput9 = document.getElementById("credit-input9");
let gradeInput9 = document.getElementById("grade-input9");

let subjectInput10 = document.getElementById("subject-input10");
let creditInput10 = document.getElementById("credit-input10");
let gradeInput10 = document.getElementById("grade-input10");

let runbutton = document.getElementById("run-button");
let output = document.getElementById("output");

function printOutput(){
    let credit = Number(creditInput.value);
    let grade = Number(gradeInput.value);

    let credit2 = Number(creditInput2.value);
    let grade2 = Number(gradeInput2.value);

    let credit3 = Number(creditInput3.value);
    let grade3 = Number(gradeInput3.value);

    let credit4 = Number(creditInput4.value);
    let grade4 = Number(gradeInput4.value);

    let credit5 = Number(creditInput5.value);
    let grade5 = Number(gradeInput5.value);

    let credit6 = Number(creditInput6.value);
    let grade6 = Number(gradeInput6.value);

    let credit7 = Number(creditInput7.value);
    let grade7 = Number(gradeInput7.value);

    let credit8 = Number(creditInput8.value);
    let grade8 = Number(gradeInput8.value);

    let credit9 = Number(creditInput9.value);
    let grade9 = Number(gradeInput9.value);

    let credit10 = Number(creditInput10.value);
    let grade10 = Number(gradeInput10.value);

    let outputHtml = "";
    
    if(grade < 0){
        output.innerHTML = "Can't calculated";
        return;
    }
    if(credit < 0){
        output.innerHTML = "Can't calculated";
        return;
    }
    let allCredit = credit + credit2 + credit3 +credit4 +credit5 +credit6 +credit7 +credit8 +credit9 +credit10;

    let calGrade = credit * grade;
    let calGrade2 = credit2 * grade2;
    let calGrade3 = credit3 * grade3;
    let calGrade4 = credit4 * grade4;
    let calGrade5 = credit5 * grade5;
    let calGrade6 = credit6 * grade6;
    let calGrade7 = credit7 * grade7;
    let calGrade8 = credit8 * grade8;
    let calGrade9 = credit9 * grade9;
    let calGrade10 = credit10 * grade10;

    let allGrade = calGrade + calGrade2 + calGrade3 + calGrade4 + calGrade5 + calGrade6 + calGrade7 + calGrade8 + calGrade9 + calGrade10;

    
    outputHtml = allGrade/allCredit;

    output.innerHTML = "Your GPA is : " + outputHtml;
}

runbutton.addEventListener("click",printOutput);