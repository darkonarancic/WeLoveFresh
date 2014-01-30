$(document).ready(function(){
	$('#filterStepsForm').validate({
	    rules: {
	        'postcode-1': {
                required: true
          	},
	        'postcode-2': {
	        	required: true
	        },
	        'postcode-3': {
	        	required: true
	        }
	    },
	   showErrors: function(errorMap, errorList) {
            if(this.numberOfInvalids() > 0){
            	$('.error-summary').show();
            } 
            else {
            	$('.error-summary').hide();
            }
            
            this.defaultShowErrors();
            
            //move out error labels to the parent wrapper
            var that = this;
            $.each(errorMap, function(key, value){
	    		var el = $('*[name="' + key + '"]');
	    		
	    		if($(el).hasClass('siblings')){
	    			var label = $(el).next();
					var clone = $(label).clone();
					$(label).remove();
	    			$(el).parent().parent().addClass('error-' + key).append(clone);
	    		}
	    		else {
	    		 	$(el).parent().addClass('error');
	    		}

	    	});
            
       },
       unhighlight: function( element, errorClass, validClass ) {
       		if($(element).hasClass('siblings')) {
       			$(element).parent().parent().removeClass('error-' + $(element).attr('name'));
       		}
       		else {
       			$(element).parent().removeClass('error');
       		}
       },
       errorPlacement: function(error, element) {
			
		  	error.insertAfter(element);
	   }
	});
});