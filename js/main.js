$('.input-for-drop').bind('input', function() { 
    console.log($(this).val());
    $(this).val() // get the current value of the input field.
});