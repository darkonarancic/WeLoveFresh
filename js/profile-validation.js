$(function(){
	$('#profile-edit').validate({
	    rules: {
	        firstname: {
	            required: true
	        },
	        lastname: {
	            required: true
	        },
	        day: {
	        	required: true,
	        	min:1
	        },
	        month: {
	        	required: true,
	        	min:1
	        },
	        year: {
	        	required: true,
	        	min:1
	        },
	        homeName: {
	        	required: true
	        },
	        homeStreet: {
	        	required: true
	        },
	        homePostcode: {
	        	required: true
	        },
	        homeHouseNo: {
	        	required: true
	        },
	        HomeLocation: {
	        	required: true
	        },
	        workName: {
	        	required: true
	        },
	        workStreet: {
	        	required: true
	        },
	        workPostcode: {
	        	required: true
	        },
	        workHouseNo: {
	        	required: true
	        },
	        workLocation: {
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
	    		var el = $('*[name=' + key + ']');
	    		
	    		if($(el).prop('nodeName') == "SELECT"){	    				
	    			var label = $(el).next();
					var clone = $(label).clone();
					$(label).remove();
					$(el).parent().parent().parent().addClass('error-' + key).append(clone);
	    		}
	    		else if($(el).hasClass('siblings')){
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
       		if($(element).is("SELECT")){
       			$(element).parent().parent().parent().removeClass('error-' + $(element).attr('name'));
       		}
       		else if($(el).hasClass('siblings')) {
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
	
	$('#newAddressForm').validate({
	    rules: {
	        newName: {
	        	required: true
	        },
	        newStreet: {
	        	required: true
	        },
	        newPostcode: {
	        	required: true
	        },
	        newHouseNo: {
	        	required: true
	        },
	        newLocation: {
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
	    		var el = $('*[name=' + key + ']');
	    		
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
       		if($(el).hasClass('siblings')) {
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