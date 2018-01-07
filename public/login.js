$('#submitButton').click(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/login",
        data: $('#myForm').serialize(),
        beforeSend: function(xhr){
        //   alert(xhr);
        },
        success: function(result) {
            sessionStorage.token = result.token;
            window.location.href = "/";
        },
        error: function(result) {
            alert('error'+ result);
        }
    });
});
    
    
    
    
    
    