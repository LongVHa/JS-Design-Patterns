$('form.ajax').on('submit', function(){
    
    var url = $(this).attr('action'),
        type = $(this).attr('method'),
        data = {};
    
    that.find('[name').each(function (index, value) {

        var name = $(this).attr('name'),
            value = $(this).val();
        
        // name of input field = value of input field
        data[name] = value
    })

    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function (response) {
            console.log(response)
        }
    })

    // $.ajax({
    //     cache: false,
    //     url: 'test.php',
    //     data: $('form').serialize(),
    //     datatype: 'json',
    //     success: function (data) {

    //     }
    // });

    return false

})