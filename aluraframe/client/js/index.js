const campos =[
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector("valor")
];

    console.log(campos);
    let tbody = document.querySelector('tabletbody');

    document.querySelector('.form').addEventListener('submit', function(event){
    
        event.preventDefault();

    let tr = document.createElement('tr');


    campos.forEach(function(campo){

        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild (td);

    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campo[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = '';
    campos [1].value = 1;
    campos [2].value = 0;

    campos [o].focus();

});