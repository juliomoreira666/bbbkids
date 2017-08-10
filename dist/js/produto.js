$('#image').find('#image-main')
           .each(function() {
              var src = $(this).attr('src');
              src = src.replace('-292-292/', '-542-545/');

               $(this).attr({src: src,                   
                  width: '545',
                  height: '545'
             });
});