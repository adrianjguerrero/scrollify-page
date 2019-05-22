$(function() {
    $.scrollify({
      section : ".secciones",
      overflowScroll: true,
      before: function(){
        $('.secciones').each(function(idx,element){
          if(element == $.scrollify.current()[0]){
              $('.container-phone .slides').css('transform','translateY(-'+ 480 * (idx + 1)+'px)');
              // la idea es que avance tanto el alto del contenedor, el alto en este caso es 480
            }
        
          });
       
      }
    });
  });