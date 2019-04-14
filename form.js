(function($){
    $(function() {
        var validators = {
            name: /^[A-Za-zА-Яа-я\s]+$/,
            email: /^\w+\-?\.?\w+?@\w+\.\w+$/,
            phone: /^\+7\(\d{3}\)\d{3}\-\d{4}$/,
            default: /^[A-Za-zА-Яа-я\s]/ig
        }
        
        var fields = $("input");
        fields.on('keydown', (event) => {
            if(event.keyCode === 13) {
                $(event.target).parent().parent().next().find('input').focus();
                event.preventDefault();
            }
        })

        $('#btn-submit').on('click', (event) => {
            var result = true;
            for (var i = 0; i < fields.length; i++) {
                if (!(validators[fields[i].name].test(fields[i].value))) {
                    $(fields[i]).addClass('invalid');
                    event.preventDefault();
                    return result = false;
                }
            }
            if (result) { 
                alert('Thank you for your massage!') 
            };
        })
        
        fields.on('change', (event) => {
            for (var i = 0; i < fields.length; i++) {
                if ((validators[fields[i].name].test(fields[i].value))) {
                    $(fields[i]).removeClass('invalid');
                }
            }
        })
        

        
        
      }); 
})(jQuery);