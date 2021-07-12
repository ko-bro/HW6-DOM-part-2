let figure = document.querySelector('.figure');

let shape = document.getElementById('figSelect').value;


switch (shape) {
    case 'square':
        figure.style.cssText = 'width: 100px; height: 100px';
        break;

    case 'rectangle':
        figure.style.width = '200px';
        break;
    
    case 'circle': 
        figure.style.cssText = 'width: 100px; height: 100px; border-radius: 50%';
        break;
}



let btn = document.querySelector('button');

btn.onclick = function colorPick() {
    let shapeColor = document.querySelector('input').value;

    figure.style.backgroundColor = shapeColor;
}



// if (shapeColor = ' ') {
//     figure.style.backgroundColor = 'black';
// }


// if (shape === 'square') {
//     figure.style.cssText='width: 100px; height: 100px';

// } else if (shape === 'rectangle') {
//     figure.style.cssText='width: 200px; height: 200px';

// } else {
//     figure.style.borderRadius='50%';
// }