/* ========== Calc the result (calc button) ========== */
var clacBtn = document.querySelector('#calc-btn');

clacBtn.addEventListener('click', calcResult);

function calcResult(){
    var // get values
        name = document.getElementById('name-input').value,
        note1 = parseFloat(document.getElementById('nt1-input').value),
        note2 = parseFloat(document.getElementById('nt2-input').value),
        note3 = parseFloat(document.getElementById('nt3-input').value),
        note4 = parseFloat(document.getElementById('nt4-input').value);

    var // calcul
        ntSum = note1 + note2 + note3 + note4,
        moy = ntSum/4;

    var
        decision,
        montion;

    if(moy>=10){
        decision = "Admis";

        if(moy<=12){
            montion = "Passable";
        }
        else if(moy<=14){
            montion = "Assez Bien";
        }
        else if(moy<=16){
            montion = "Bien";
        }
        else{
            montion = "Tres Bien";
        }
    }
    else{
        decision = "Non Admis";
        montion = "Echec";
    }

    // outputs
    document.querySelector('#name').innerHTML = name;
    document.querySelector('#moyenne').innerHTML = moy;
    document.querySelector('#decision').innerHTML = decision;
    document.querySelector('#montion').innerHTML = montion;

    // hide calcul section and display result destion
    document.getElementById('calc-section').style.display = "none";
    document.getElementById('result-section').style.display = "initial";
}


/* ========== reset the calc page (reset button) ========== */
var resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click', resetPage);

function resetPage(){
    document.getElementById('name-input').value = "";
    document.getElementById('nt1-input').value = "";
    document.getElementById('nt2-input').value = "";
    document.getElementById('nt3-input').value = "";
    document.getElementById('nt4-input').value = "";
}

/* ========== back to calc page (OK button) ========== */
var okBtn = document.querySelector('#ok-btn');

okBtn.addEventListener('click', backToCalc);

function backToCalc(){
    document.getElementById('calc-section').style.display = "initial";
    document.getElementById('result-section').style.display = "none";
}