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

/*=======================================
            Calendario
=======================================*/
    $('#calendar').fullCalendar({
        timeZone: 'UTC',
        weekNumbers: true,
        columnFormat: 'dddd',
        header: {
            left: 'month, agendaWeek',
            center: 'title',
            right: 'prev, today, next'
        },
        aspectRatio: 2,
        selectable: true,
        editable: true,
        slotDuration:'00:50:00',
        defaultView: 'month',
        minTime: '07:00:00',
        maxTime: '16:00:00',
        displayEventTime: false,
        slotLabelFormat : 'H:mm:ss',
        slotLabelInterval: 50,
        buttonText: {
            month:"Mes",
            week:"Semana",
            day:"Día",
            list:"Agenda"
        },
        droppable: true,
        
        drop: function(info){
            // Is the "remove after drop" checkbpx checked?
            if (checkbox.checked) {
                //If so, remove the element form the "Draggable Events" lists
                info.draggedEl.parentNode.removeChild(info.draggedEl);
            }
        },
        buttonIcons: true,
        eventLimit: true,
        events: [
            {
                title       : 'First_element',
                description : 'Welcome to your First element',
                start       : '2023-02-01',
                color       : '#3A87AD',
                textColor   : '#fff'
            }, 
            { 
                title       : 'Second_element',
                description : 'Welcome to your Second element',
                start       : '2023-02-05',
                color       : '#3A87AD',
                textColor   : '#fff'
            }, 
            { 
                title       : 'third_element',
                description : 'Welcome to your third element',
                start       : '2023-02-10',
                color       : '#3A87AD',
                textColor   : '#fff'
            }
        ],
        // Al hacer click me da informacion acerca del dia que clickeo
        dayClick: function(date, jsEvent, view) {
            Swal.fire('Has hecho click en :'+ date.format());
        },
        // Activacion de modal
        eventClick: function(calEvent, jsEvent, view) {
            Swal.fire({
                title: 'Do you want to save the changes',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: 'Dont save',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire('Saved!!', calEvent.title, 'success');
                } else {
                    Swal.fire('Cahnges are not saved', calEvent.description, 'info');
                }
            });
        }
    });

    $('#external-events .fc-event').dragable();


    Swal.fire({
        template: '#my-template'
    });

});
