const form = document.getElementById('form');

form.addEventListener('submit',function(event) {
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');


    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = 'Cuidado! esta bajo del peso normal!';
        value.classList.remove('attention');
        value.classList.add('anormal');
    }else if (bmi >= 18.5 && bmi <= 25){
        description = 'Esta con peso normal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <= 30){
        description = 'Cuidado! esta con sobrepeso!';
    }else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! esta con obesidad moderada!';
    }else if(bmi >35 && bmi <=40){
        description ='Cuidado! esta con obesidad severa!';
    }else{
        description = 'ALERTA! usted tiene obesidad morbida!';
    }


    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});