const expression = document.querySelector(".calcOutput");

function Press(a){
    const operators = ["+", "-", "x", "÷"];
    let currentContent = expression.textContent.trim();

    if (currentContent.length === 0 && operators.includes(a)) return;

    if (operators.includes(a) && operators.includes(currentContent.slice(-1))) {
        expression.innerHTML = currentContent.slice(0,-1).replace(a);
    }

    if (currentContent.length < 20) {
        expression.innerHTML += a;
    }
}

function Del(){
    let currentContent = expression.textContent.trim();

    if (currentContent.length == 2 && currentContent.slice(0,1) == '-'){
        expression.innerHTML = "";
        return;
    }
    expression.innerHTML = currentContent.slice(0,-1);
}

function Reset(){
    expression.innerHTML = "";
}

function equal(){
    try{
        const sanitizedExpression = expression.innerHTML.replace(/x/g, '*').replace(/÷/g, '/');
        const result = eval(sanitizedExpression);

        if (isNaN(result) || result === undefined || !isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        expression.innerHTML = result;
    } catch (error){
        alert('Enter a valid expression!');
        Reset();
    }
}
