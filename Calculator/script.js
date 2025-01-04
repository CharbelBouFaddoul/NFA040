const expression = document.querySelector(".calcOutput");
// used for resetting expression after result when clicking 'DEL' button
let resetOutput = false;

function Press(a){
    const operators = ["+", "-", "x", "/"];
    let currentContent = expression.textContent.trim();

    if (operators.includes(a) && operators.includes(currentContent.slice(-1))) {
        return;
    }

    if (currentContent.length < 17) {
        expression.innerHTML += a;
        resetOutput = false;
    }
}

function Del(){
    if (resetOutput){
        expression.innerHTML = "";
    }
    expression.innerHTML = expression.textContent.trim().slice(0,-1);
}

function Reset(){
    expression.innerHTML = "";
}

function equal(){
    try{
        const sanitizedExpression = expression.innerHTML.replace(/x/g, '*');
        const result = eval(sanitizedExpression);

        if (isNaN(result) || result === undefined || !isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        expression.innerHTML = result;
        resetOutput = true;
    } catch (error){
        alert('Enter a valid expression!');
        Reset();
    }
}
