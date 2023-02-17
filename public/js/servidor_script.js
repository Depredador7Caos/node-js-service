$(document).ready(function() {
/*===============================
    Parte de create product 
=================================*/
    $("#formulario").hide();
    
    $("#click-add").click(function() {
        $("#formulario").show();
        $("#lista_Productos").hide();
        $("#tabla").hide();
    });
    
    $('#cancel').click(function() {
        $("#formulario").hide();
    });
/*===============================
    Parte de Lista product 
=================================*/
    $('#lista_Productos').hide();

    $("#click-exitencia").click(function() {
        $("#lista_Productos").show();
        $("#formulario").hide();
        $("#tabla").hide();
    });

    $('#cancel').click(function() {
        $("#lista_Productos").hide();
    });
/*===============================
    Parte de tabla Productos
=================================*/
    $('#tabla').hide();

    $("#click-tabla").click(function() {
        $("#tabla").show();
        $("#formulario").hide();
        $("#lista_Productos").hide();
    });

    $('#cancel').click(function() {
        $("#tabla").hide();
    });

    $('#calendar').fullCalendar({
        header: {
            left: 'month, agendaWeek',
            center: 'title',
            right: 'prev, today, next'
        }
    });

    Swal.fire({
        template: '#my-template'
    })
});