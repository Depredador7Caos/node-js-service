function multiplicacion() {

    const div_box = document.getElementById('div');
    const listilla = div_box.getElementsByTagName('p');

    if (1 === 1) {
        div_box.innerHTML = "Hello world!";
    }

    for (let index = 0; index < 10; index++) {
        listilla.innerHTML = "thsi numbers are : " + index[0].innerHTML;
    }
}

multiplicacion();
/*
function validateForm() {

    let email = document.forms["formulario"]["email"].value;
    let pass = document.forms["formulario"]["password"].value;

    if (email == "" || pass == "") {
        //alert("Error form not compled");
        return false;
    }
    const alerta = getElementById("alerta");
    alerta.innerHTML = "Hello world!";
}
validateForm()*/