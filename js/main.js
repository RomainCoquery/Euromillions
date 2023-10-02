const numbersList = document.getElementById('numbersList');
const Button = document.getElementById('Button');

Button.addEventListener('click', () => {
    const uniqueNumbers = [];
    while (uniqueNumbers.length < 5) {
        let newNumber = Math.ceil(Math.random() * 50);
        if (uniqueNumbers.indexOf(newNumber) == -1) {
            uniqueNumbers.push(newNumber);
        }
    }

    const uniqueStars = [];
    while (uniqueStars.length < 2) {
        let newStar = Math.ceil(Math.random() * 12);
        if (uniqueStars.indexOf(newStar) == -1) {
            uniqueStars.push(newStar);
        }
    }

    const balls = numbersList.querySelectorAll('.ball');
    const stars = numbersList.querySelectorAll('.star');

    balls.forEach((ball, index) => {
        ball.textContent = uniqueNumbers[index];
    });

    stars.forEach((star, index) => {
        star.textContent = uniqueStars[index];
    });
});
