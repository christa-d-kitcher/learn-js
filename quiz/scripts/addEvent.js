window.onload = function() {
    let x = document.getElementById('myBtn');
    x.addEventListener('mouseover', myFunction(msg));
    x.addEventListener('click', mySecondFunction(msg));
    x.addEventListener('mouseout', myThirdFunction(msg));
}

function myFunction(msg) {
    let msg = "Moused over";
    return () => {
        document.getElementById('demo').textContent = msg;
    }
}

function mySecondFunction(msg) {
    let msg = "Clicked!";
    return () => {
        document.getElementById('demo').textContent = msg;
    } 
}

function myThirdFunction(msg) {
    let msg = "Moused out!"
    return () => {
        document.getElementById('demo').textContent = msg;
    }  
}
