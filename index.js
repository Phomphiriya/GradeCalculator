let content1 = document.getElementById('content-1');
let textHtml = '<b> I love you </b>';
textHtml += '<i> I hate you </i>';
content1.innerHTML = textHtml;

console.log("hello world");

function getPyramidArea(lenght,width,heigth){
    let basearea = lenght * width;
    let pyramidVolume = 1/3 * (basearea * heigth);
    return pyramidVolume;
}

let area1 = getPyramidArea(2,3,4);
let area2 = getPyramidArea(4,5,6);

console.log('Area 1 = '+ area1 + ' Area 2 = '+ area2);