$(function() {
    $.scrollify({
          section:".panel",
      scrollbars:false,
      standardScrollElements:".forScrolling",
      before: function(i,panels) {
        var ref = panels[i].attr("data-section-name");
  
        // $(".pagination a.active").removeClass("active");
  
        // $(".pagination a[href=#" + ref + "]").addClass("active");
  
        /*
        if(ref==="inner_section_3") {
          $(".inner_section_3 .gallery0,.inner_section_3 .gallery1,.inner_section_3 .gallery2").addClass("moved");
  
        }*/
  
        panels[i].find(".gallery0,.gallery1,.gallery2").addClass("moved");
   
  
        if(ref==="inner_section_2") {
          $(".inner_section_3").find(".gallery0,.gallery1,.gallery2").removeClass("moved");
          $(".inner_section_4 .gallery0").css("top",0);
        }
        if(ref==="inner_section_3") {
          $(".inner_section_4 .content").removeClass("moved");
          initialPosition();
        }
        if(ref==="inner_section_4") {
          $(".inner_section_4 .content").addClass("moved");
  
          $(".inner_section_4 .gallery0").css("top",0);
        }
      },
      after:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
  
        if(ref==="home") {
          $(".inner_section_2").find(".gallery0,.gallery1,.gallery2").removeClass("moved");
        }
        for(var j = 0;j < panels.length;j++) {
          if(j>i) {
            console.log(i, "i")
            console.log(j, "j")
            console.log(j>i ,"test")
  
            //panels[j].find(".moved").removeClass("moved");
          }
        }
      },
      afterResize:initialPosition,
      afterRender:initialPosition
      });
  
    $(".pagination a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
  
    function initialPosition() {
  
      var current = $.scrollify.current();
  
      if(current.hasClass("inner_section_4")===false) {
        var height = parseInt($(".inner_section_4").height());
        var f = parseInt($(".inner_section_3 .gallery1").height()) - 50;
        console.log(f,"f");
        console.log(f,"height");
  
        var top = 0 - (height*0.3) - (height-f);
        $(".inner_section_4 .gallery0").css("top",top);
      } else {
        $(".inner_section_3").find(".gallery0,.gallery1,.gallery2").addClass("moved");
      }
  
    }
  });
  $(function () {
  
    $('.md-trigger').on('click', function() {
      $('.md-modal').addClass('md-show');
    });
    
    $('.md-close').on('click', function() {
      $('.md-modal').removeClass('md-show');
    });
    
  });