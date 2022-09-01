const btnSubmit = document.querySelector('button');


btnSubmit.addEventListener('click', () => {
    
    const clientHeight = document.querySelector('#height').value;
    const clientWeight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    const score = (clientWeight / Math.pow(clientHeight / 100, 2)).toFixed(2);

    
    if(clientHeight == '' || clientHeight <= 0 || clientWeight <= 0 || clientWeight == '') {
        
        result.innerHTML = 'uzupełnij poprawnie dane powyżej';
        
    }else {
        
        result.innerHTML = score + ' ' + 'kg/m2';

        const description = document.querySelector('#description');

        description.classList = '';

        if(score >= 16 && score < 18.5 || score >= 25 && score < 35) {
            description.classList.add('warning');
        } else if(score >= 35 || score < 16) {
            description.classList.add('bad');
        }
        else {
            description.classList.add('good');
        }

        if(score < 16) {
            description.innerHTML = 'jesteś wygłodzony';
        } else if(score >= 16 && score < 17) {
            description.innerHTML = 'jesteś wychudzony';
        } else if(score >= 17 && score < 18.5) {
            description.innerHTML = 'masz niedowagę';
        } else if(score >= 18.5 && score < 25) {
            description.innerHTML = 'waga prawidłowa';
        } else if(score >= 25 && score < 30) {
            description.innerHTML = 'masz nadwagę';
        } else if(score >= 30 && score < 35) {
            description.innerHTML = 'masz otyłość I stopnia';
        } else if(score >= 35 && score < 40) {
            description.innerHTML = 'masz otyłość II stopnia';
        } else if(score >= 40) {
            description.innerHTML = 'masz otyłość III stopnia';
        }

    }

})