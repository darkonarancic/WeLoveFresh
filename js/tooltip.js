/**
 * Created by Darko on 4.3.14..
 */
;
var defaults = {
    itemClass: ".tool-tip",
    tooltipClass: ".tooltipBox"
};
(function($){
    if(typeof $.fn.customTooltip === 'undefined'){
        $.fn.customTooltip = function(options){
           return this.each(function(){
               var settings = $.extend({}, options, defaults);

               $(this).hover(
                   function(){
                       $(settings.tooltipClass).insertAfter($(this));
                       $(settings.tooltipClass)
                           .addClass($(this).attr('data-class'))
                           .html($(this).attr('data-title'))
                           .show();
                   },function(){
                       $(settings.tooltipClass)
                           .removeClass($(this).attr('data-class')).html("")
                           .hide();
                   }
               );
           });
        };

        //init custom tooltip
        $(defaults.itemClass).customTooltip();
    }
}($));

