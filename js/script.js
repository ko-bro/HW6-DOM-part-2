let figure = document.querySelector('.figure');

figSelect.addEventListener('change', function (selection) {
    figure.className = selection.target.value;
});

let btn = document.querySelector('button');

btn.addEventListener('click', function colorPick() {
    let shapeColor = document.querySelector('input').value;
    
    if (shapeColor.length == 0) {
        figure.style.backgroundColor = 'black';
    } else {
        figure.style.backgroundColor = shapeColor;
    }
});