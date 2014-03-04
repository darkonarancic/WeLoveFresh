/**
 * Created by Darko on 4.3.14..
 */
;
var defaults = {
    itemClass: ".tooltip-custom"
};
(function($){
    if(typeof $.fn.tooltip !== 'function'){
        $.fn.tooltip = function(options){
           return this.each(function(){
                var settings = $.extend({}, options, defaults);
               console.log(settings);
           });
        };
    }
}($));

$(function(){
    $(defaults.itemClass).tooltip();
});