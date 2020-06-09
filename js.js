function validateFrom() {
    let A = document.getElementById('soA').value;
    let B = document.getElementById('soB').value;
    let C = parseInt(A);
    let D = parseInt(B)
    let plus = C+D;
    document.getElementById("display").innerHTML = plus;
}
function validateFRom() {
    let A = document.getElementById('soA').value;
    let B = document.getElementById('soB').value;
    let C = parseInt(A);
    let D = parseInt(B)
    let minus = C-D;
    document.getElementById("display").innerHTML = minus;
}
function validateFROm() {
    let A = document.getElementById('soA').value;
    let B = document.getElementById('soB').value;
    let C = parseInt(A);
    let D = parseInt(B)
    let times = C*D;
    document.getElementById("display").innerHTML = times;
}
function validateFROM() {
    let A = document.getElementById('soA').value;
    let B = document.getElementById('soB').value;
    let C = parseInt(A);
    let D = parseInt(B)
    let div = C/D;
    document.getElementById("display").innerHTML = div;
}
