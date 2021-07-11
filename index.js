let content1 = document.getElementById('content-1');
let textHtml = '<b> text in HTML </b>';
textHtml += '<i> Add text </i>';
content1.innerHTML = textHtml;

let submitButton = document.getElementById('submit-button');
let message = document.getElementById('message');

var l = 10;
var l = 20;
function showMessage(){
    message.innerHTML = 'Submit completed';
}

submitButton.addEventListener('click',showMessage);








console.log("hello world");

function getPyramidArea(lenght,width,heigth){
    let basearea = lenght * width;
    let pyramidVolume = 1/3 * (basearea * heigth);
    return pyramidVolume;
}

let area1 = getPyramidArea(2,3,4);
let area2 = getPyramidArea(4,5,6);

console.log('Area 1 = '+ area1 + ' Area 2 = '+ area2);