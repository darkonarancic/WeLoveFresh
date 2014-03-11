$(function() {
	if ($('#chkPassword').size() > 0) {
		$('#chkPassword').bind('change', function() {
			if ($(this).is(':checked')) {
				wlf.app.switchPasswordForm('block');
				wlf.app.checkoutValidate();
			} else {
				wlf.app.switchPasswordForm('none');
			}
		});
	}

	if ($('#smsVerificationForm').size() > 0) {
		$('#smsVerificationForm').validate({
			rules : {
				smscode : {
					required : true
				}
			},
			showErrors : function(errorMap, errorList) {

				this.defaultShowErrors();

				//move out error labels to the parent wrapper
				var that = this;
				$.each(errorMap, function(key, value) {
					var el = $('*[name="' + key + '"]');
					$(el).parent().addClass('error');
				});

			},
			unhighlight : function(element, errorClass, validClass) {
				if ($(element).hasClass('siblings')) {
					$(element).parent().parent().removeClass('error-' + $(element).attr('name'));
				} else {
					$(element).parent().removeClass('error');
				}
			},
			errorPlacement : function(error, element) {
				error.insertAfter(element);
			}
		});
	}

	if ($('#checkoutLoginForm').size() > 0) {
		$('#checkoutLoginForm').validate({
			rules : {
				email : {
					required : true,
					email : true
				},
				password : {
					required : true
				},
				postcode : {
					required : true
				},
				houseNo : {
					required : true
				},
				phone : {
					required : true
				},
		        day: {
		        	required: true
		        },
		        month: {
		        	required: true
		        },
		        year: {
		        	required: true
		        }
			},
			showErrors : function(errorMap, errorList) {
				if (this.numberOfInvalids() > 0) {
					$('.error-summary').show();
				} else {
					$('.error-summary').hide();
				}

				this.defaultShowErrors();

				//move out error labels to the parent wrapper
				var that = this;
				$.each(errorMap, function(key, value) {
					var el = $('*[name="' + key + '"]');

					if ($(el).hasClass('siblings')) {
						var label = $(el).next();
						var clone = $(label).clone();
						$(label).remove();
						$(el).parent().parent().addClass('error-' + key).append(clone);
					} else {
						$(el).parent().addClass('error');
					}

				});

			},
			unhighlight : function(element, errorClass, validClass) {
				if ($(element).hasClass('siblings')) {
					$(element).parent().parent().removeClass('error-' + $(element).attr('name'));
				} else {
					$(element).parent().removeClass('error');
				}
			},
			errorPlacement : function(error, element) {

				error.insertAfter(element);
			}
		});

	}
});
wlf.app.switchPasswordForm = function(set) {
	$('#passwordBox').css({
		display : set
	});
};
wlf.app.checkoutValidate = function() {
	$('#checkoutAccountForm').validate({
		rules : {
			'password' : {
				required : "#chkPassword:checked"
			},
			're-password' : {
				required : "#chkPassword:checked",
				equalTo : "#password"
			}
		},
		showErrors : function(errorMap, errorList) {
			if (this.numberOfInvalids() > 0) {
				$('.error-summary').show();
			} else {
				$('.error-summary').hide();
			}

			this.defaultShowErrors();

			//move out error labels to the parent wrapper
			var that = this;
			$.each(errorMap, function(key, value) {
				var el = $('*[name="' + key + '"]');

				if ($(el).hasClass('siblings')) {
					var label = $(el).next();
					var clone = $(label).clone();
					$(label).remove();
					$(el).parent().parent().addClass('error-' + key).append(clone);
				} else {
					$(el).parent().addClass('error');
				}

			});

		},
		unhighlight : function(element, errorClass, validClass) {
			if ($(element).hasClass('siblings')) {
				$(element).parent().parent().removeClass('error-' + $(element).attr('name'));
			} else {
				$(element).parent().removeClass('error');
			}
		},
		errorPlacement : function(error, element) {

			error.insertAfter(element);
		}
	});
};
