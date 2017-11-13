$(document).ready(function () {
    var url = window.location.href;
    if (url.lastIndexOf('#access_token=') != -1)
        var token = url.substring(url.lastIndexOf('#access_token=')+14);

    console.log(token);

    if(typeof token!== 'undefined'){
        $('#btnAutenticar').html('autenticado');
        $('#btnAutenticar').attr('disabled', 'true');

        $.ajax({
            url: 'https://api.instagram.com/v1/users/self/?access_token=' + token,
            method: 'GET',
            success: function (data) {
                console.log(data);
            }
        });
    }
});