const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Provide a valid Height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Provide a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show results
        // results.innerHTML = `<span>${bmi}</span>`;
      
        if (bmi < 18.6){
            guide.innerHTML = `<span>${bmi} - Under Weight = Less than 18.6</span>`;
        }
        else if (bmi >= 18.6 && bmi < 24.9){
            guide.innerHTML = `<span>${bmi} - Normal Range = 18.6 and 24.9</span>`;
        }
        else {
            guide.innerHTML = `<span>${bmi} - Overweight = Greater than 24.9</span>`;
        }
    }

});