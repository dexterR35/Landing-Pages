$(function() {
    $.scrollify({
          section:".panel",
      scrollbars:true,
      before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");
        $(".panel.actived").removeClass("actived");
        $("[data-section-name="+ref+"]").addClass("actived");
        // $('".' + ref+'"').addClass("actived");
        
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        var cc= ref==="five",
            cc2= ref === "second";
     
        if(cc) {
          $(".panel4 .content").addClass("moved");
        }else {
          $(".panel4 .content").removeClass("moved");
        }
        
        if(cc2) {
          $(".panel1").addClass("actived");
        }else {
          $(".panel1").removeClass("actived");
        }
      },
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".panel").each(function(i) {
          activeClass = "";
          if(i===0) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
  
        pagination += "</ul>";
  
        $(".home").append(pagination);
      }
    });
  
  
    /*
  
    Tip: The two click events below are the same:
  
    $(".pagination a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });
  
    */
    $(".pagination a").on("click",$.scrollify.move);
  
  });