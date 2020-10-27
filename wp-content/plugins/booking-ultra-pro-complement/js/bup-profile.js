jQuery(document).ready(function($) {
	
	
	
	    jQuery(document).on("click", "#bup_re_schedule", function(e) {
			
			
			
			if ($(this).is(":checked")) 
			{
                $("#bup-availability-box").slideDown();
				$("#bup-availability-box-btn").slideDown();
				
            } else {
				
				$("#bup-availability-box-btn").slideUp();				
                $("#bup-availability-box").slideUp();
            }			
			
				 
				
        });
		
	
		jQuery(document).on("click", "#bup-admin-edit-staff-service-save", function(e) {
			
			
			var service_list = bup_get_checked_services();
			
			jQuery("#bup-loading-animation-services" ).html( bup_profile_v98.msg_wait );	
				
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_update_staff_services",  "service_list": service_list },
					
					success: function(data){
						
						jQuery("#bup-loading-animation-services" ).html('');			
					
						
						}
				});
			
			
    		e.preventDefault();
			 
				
        });
		
	
	 function bup_get_checked_services ()	
		{
			
			var checkbox_value = "";
			jQuery(".ubp-cate-service-checked").each(function () {
				
				var ischecked = $(this).is(":checked");
			   
				if (ischecked) 
				{
					//get price and quantity
					var bup_price = jQuery("#bup-price-"+$(this).val()).val();
					var bup_qty = jQuery("#bup-qty-"+$(this).val()).val();
					checkbox_value += $(this).val() + "-" + bup_price + "-" + bup_qty + "|";
				}
				
				
			});
			
			return checkbox_value;		
	}
		
	jQuery(document).on("click", "#bup-disconnect-gcal-user-front", function(e) {
			
		
			var user_id =  jQuery(this).attr("user-id");
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_disconnect_user_gcal_staff", "user_id": user_id },
					
					success: function(data){
						
						window.location.reload();
												
																
						
					}
				});
			
			
    		e.preventDefault();
			 
				
        });
		
	
	jQuery(document).on("click", ".ubp-service-cate", function(e) {
			
			
			var ischecked = $(this).is(":checked");			
			var service_id = $(this).val();
			
			if(ischecked)
			{
				 $("#bup-price-"+service_id).prop("disabled",false);	
				 $("#bup-qty-"+service_id).prop("disabled",false);	
			
			}else{
				
				$("#bup-price-"+service_id).prop("disabled",true);	
				$("#bup-qty-"+service_id).prop("disabled",true);	
			}
			
	});
	
	
	jQuery(document).on("click", ".ubp-service-cate-parent", function(e) {
			
			var ischecked = $(this).is(":checked");			
			var service_id = $(this).val();
			
			if(ischecked)
			{
				jQuery('.bup-service-cate-'+service_id).each(function () {
						  
					$(this).prop('checked',1);										
					$("#bup-price-"+$(this).val()).prop("disabled",false);	
					$("#bup-qty-"+$(this).val()).prop("disabled",false);
								
				 });	
			
			}else{
			
				jQuery('.bup-service-cate-'+service_id).each(function () {
						  
					$(this).prop('checked',0);										
					$("#bup-price-"+$(this).val()).prop("disabled",true);	
					$("#bup-qty-"+$(this).val()).prop("disabled",true);
								
				 });
			}
			
	});
		
		
	jQuery(document).on("click", ".bup-reset-password-button-conf", function(e) {		
			
				var p1= $("#user_login_reset").val()	;
				var p2= $("#user_password_reset_2").val()	;
				var u_key= $("#bup_reset_key").val()	;
				
				jQuery("#bup-pass-reset-message").html(bup_profile_v98.msg_wait);
				
									
				jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_confirm_reset_password", "p1": p1, "p2": p2, "key": u_key },
					
					success: function(data){						
					
						jQuery("#bup-pass-reset-message").html(data);											
						
						}
				});
			
			
    		e.preventDefault();
				
        });
		
		
	
	jQuery(document).on("click", ".bup-appointment-delete-module", function(e) {
			
			e.preventDefault();	
			
			
			if (confirm(bup_profile_v98.are_you_sure)) {
				
				jQuery("#bup-spinner").show();				
				
				var appointment_id = jQuery(this).attr("appointment-id");	
					
				jQuery.ajax({
						type: 'POST',
						url: ajaxurl,
						data: {"action": "bup_delete_appointment_staff",
						"appointment_id": appointment_id},
						
						success: function(data){	
						
						window.location.reload();				
													
												
													
							
							}
					});	
				
				
				}	
			
    		e.preventDefault();
			 
				
    });
	
	/* 	Close Open Sections in Profile  */		
	jQuery(document).on("click", ".bup-widget-frontend-colapsable", function(e) {	
	
		
		var widget_id =  jQuery(this).attr("widget-id");		
		var iconheight = 20;
		
		
		if(jQuery("#bup-front-end-backend-landing-"+widget_id).is(":visible")) 
	  	{					
			
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-desc" ).addClass( "fa-sort-asc" );
			
		}else{			
			
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-asc" ).addClass( "fa-sort-desc" );			
	 	 }
		
		
		jQuery("#bup-front-end-backend-landing-"+widget_id).slideToggle();	
					
		return false;
	});
	
	/* 	Close Open Sections in Main Admin Page */		
	jQuery(document).on("click", ".bup-widget-backend-colapsable", function(e) {	
	
		
		var widget_id =  jQuery(this).attr("widget-id");		
		var iconheight = 20;
		
		
		if(jQuery("#bup-backend-landing-"+widget_id).is(":visible")) 
	  	{					
			
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-desc" ).addClass( "fa-sort-asc" );
			
		}else{			
			
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-asc" ).addClass( "fa-sort-desc" );			
	 	 }
		
		
		jQuery("#bup-backend-landing-"+widget_id).slideToggle();	
					
		return false;
	});
		
	/* 	Close Open Sections in Dasbhoard */		
	jQuery(document).on("click", ".bup-widget-home-colapsable", function(e) {	
	
		
		e.preventDefault();
		var widget_id =  jQuery(this).attr("widget-id");		
		var iconheight = 20;
		
		if(jQuery("#bup-staff-box-cont-"+widget_id).is(":visible")) 
	  	{
					
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-desc" ).addClass( "fa-sort-asc" );
			
		}else{
			
			jQuery( "#bup-close-open-icon-"+widget_id ).removeClass( "fa-sort-asc" ).addClass( "fa-sort-desc" );			
	 	 }
		
		
		jQuery("#bup-staff-box-cont-"+widget_id).slideToggle();	
					
		return false;
	});
	
	
	jQuery(document).on("click", ".bup-note-deletion", function(e) {
					
			var appointment_id = jQuery(this).attr("bup-appointment-id");			
			var note_id =  jQuery(this).attr("bup-note-id");	 						
    		
			doIt=confirm(bup_profile_v98.message_delet_note_conf);
		  
		    if(doIt)
		    {
				jQuery.ajax({
						type: 'POST',
						url: ajaxurl,
						data: {"action": "bup_delete_note_by_staff",  "note_id": note_id ,  "appointment_id": appointment_id },
						
						success: function(data){	
						
							bup_load_appointment_notes(appointment_id);	
						
						
							
							}
					});
				
				
			}
			
    		e.preventDefault();
			 
				
    });
		
		
	jQuery(document).on("click", "#bup-adm-add-note", function(e) {
			
			e.preventDefault();	
			jQuery("#bup-spinner").show();		
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_get_note_form"},
					
					success: function(data){					
												
						jQuery("#bup-new-note-cont" ).html( data );	
						jQuery("#bup-new-note-cont" ).dialog( "open" );	
						jQuery("#bup-spinner").hide();	
						
												
						
						}
				});
			
			
			 // Cancel the default action
			
    		e.preventDefault();
			 
				
    });
	
	
	jQuery(document).on("click", ".bup-note-edit", function(e) {
			
			e.preventDefault();	
			jQuery("#bup-spinner").show();	
			
			var note_id = jQuery(this).attr("bup-note-id");
			var appointment_id = jQuery(this).attr("bup-appointment-id");	
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_get_note_form_by_staff",
					       "note_id": note_id,
						   "appointment_id": appointment_id}, 
					
					success: function(data){					
												
						jQuery("#bup-new-note-cont" ).html( data );	
						jQuery("#bup-new-note-cont" ).dialog( "open" );	
						jQuery("#bup-spinner").hide();	
						
												
						
						}
				});
			
    		e.preventDefault();
			 
				
    });
	
	
	/* add Payment */	
	jQuery( "#bup-new-payment-cont" ).dialog({
			autoOpen: false,			
			width: '300', //   			
			responsive: true,
			fluid: true, //new option
			modal: true,
			buttons: {			
			
			"Cancel": function() {				
				
				jQuery( this ).dialog( "close" );
			},
			
			"Save": function() {				
				
				var bup_payment_amount=   jQuery("#bup_payment_amount").val();
				var bup_payment_transaction=   jQuery("#bup_payment_transaction").val();
				var bup_payment_date=   jQuery("#bup_payment_date").val();
				var bup_booking_id=   jQuery("#bup_appointment_id").val();
				var bup_payment_status=   jQuery("#bup_payment_status").val();	
				
				var bup_payment_id=   jQuery("#bup_payment_id").val();					
				
				if(bup_payment_amount==''){alert(bup_profile_v98.err_message_payment_amount); return;}
				if(bup_payment_date==''){alert(bup_profile_v98.err_message_payment_date); return;}	
							
				
				jQuery.ajax({
						type: 'POST',
						url: ajaxurl,
						data: {"action": "bup_add_payment_to_appointment_confirm", 
						       "bup_payment_amount": bup_payment_amount,
							   "bup_payment_transaction": bup_payment_transaction,
							   "bup_payment_date": bup_payment_date,
							   "bup_booking_id": bup_booking_id,
							   "bup_payment_id": bup_payment_id,
							   "bup_payment_status": bup_payment_status },
						
						success: function(data){	
							
							jQuery("#bup-new-payment-cont" ).html( data );
							jQuery("#bup-new-payment-cont" ).dialog( "close" );	
							bup_load_appointment_payments(bup_booking_id);						
							
							
							}
					});
					
					
				
			
			}
			
			
			},
			close: function() {
			
			
			}
	});
	
		/* add note */	
	jQuery( "#bup-new-note-cont" ).dialog({
			autoOpen: false,			
			width: '300', //   			
			responsive: true,
			fluid: true, //new option
			modal: true,
			buttons: {			
			
			"Cancel": function() {				
				
				jQuery( this ).dialog( "close" );
			},
			
			"Save": function() {				
				
				var bup_note_title=   jQuery("#bup_note_title").val();
				var bup_note_text=   jQuery("#bup_note_text").val();
				var bup_note_id=   jQuery("#bup_note_id").val();
				var bup_booking_id=   jQuery("#bup_appointment_id").val();
								
				if(bup_note_title==''){alert(bup_profile_v98.err_message_note_title); return;}
				if(bup_note_text==''){alert(bup_profile_v98.err_message_note_text); return;}	
							
				
				jQuery.ajax({
						type: 'POST',
						url: ajaxurl,
						data: {"action": "bup_staff_note_confirm", 
						       "bup_note_title": bup_note_title,
							   "bup_booking_id": bup_booking_id,
							   "bup_note_text": bup_note_text,
							   "bup_note_id": bup_note_id},
						
						success: function(data){	
							
							jQuery("#bup-new-note-cont" ).html( data );
							jQuery("#bup-new-note-cont" ).dialog( "close" );	
							bup_load_appointment_notes(bup_booking_id);						
							
							
							}
					});
					
					
				
			
			}
			
			
			},
			close: function() {
			
			
			}
	});
	
	
	
	
	jQuery(document).on("click", ".bup-btn-book-app-admin", function(e) {
			
			e.preventDefault();			
			
			var date_to_book =  jQuery(this).attr("bup-data-date");
			var service_and_staff_id =  jQuery(this).attr("bup-data-service-staff");
			var time_slot =  jQuery(this).attr("bup-data-timeslot");
			
			jQuery("#bup_time_slot").val(time_slot);
			jQuery("#bup_booking_date").val(date_to_book);
			jQuery("#bup_service_staff").val(service_and_staff_id);
			
			jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_appo_get_selected_time_staff", 
						   "bup_booking_date": date_to_book,
						   "bup_service_staff": service_and_staff_id,
						   "bup_time_slot": time_slot},
					
					success: function(data){						
						
						var res = data;							
						jQuery("#bup-steps-cont-res-edit").html(res);						

						}
				});				
			
				
			
    		e.preventDefault();		 
				
    });
	
	jQuery(document).on("click", "#bup-adm-confirm-reschedule-btn", function(e) {
			
			e.stopPropagation();	
			
			var date_to_book =  jQuery("#bup_booking_date").val();
			var notify_client =  jQuery("#bup_notify_client_reschedule").val();
			var service_and_staff_id =  jQuery("#bup_service_staff").val();
			var time_slot =  jQuery("#bup_time_slot").val();
			var booking_id =  jQuery("#bup_appointment_id").val();		
			
			if(time_slot==''){alert(bup_profile_v98.err_message_time_slot); return;}			
			if(jQuery("#bup-category").val()==''){alert(bup_profile_v98.err_message_service); return;}
			if(jQuery("#bup-start-date").val()==''){alert(bup_profile_v98.err_message_start_date); return;}
			
			jQuery("#bup-steps-cont-res").html(bup_profile_v98.message_wait_availability);
					
				
			jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_re_schedule_confirm_staff", 
						   "bup_booking_date": date_to_book,
						   "bup_service_staff": service_and_staff_id,
						   "bup_time_slot": time_slot,
						   "booking_id": booking_id,
						   "notify_client": notify_client},
					
					success: function(data){						
						
						var res = data;							
						jQuery("#bup-steps-cont-res-edit").html(res);						
						//jQuery("#bup-confirmation-cont" ).html( gen_message_rescheduled_conf );
						//jQuery("#bup-confirmation-cont" ).dialog( "open" );		
										
											

						}
				});				
			
				
			
    		e.stopPropagation(); 
				
    });
	
	
		    var $form   = $('#business-hours');
		jQuery(document).on("change", ".bup_select_start", function(e) {	
			
			var $row = $(this).parent(),
				$end_select = $('.bup_select_end', $row),
				$start_select = $(this);
	
			if ($start_select.val()) {
				$end_select.show();
				$('span', $row).show();
	
				var start_time = $start_select.val();
	
				$('span > option', $end_select).each(function () {
					$(this).unwrap();
				});
	
				// Hides end time options with value less than in the start time
				$('option', $end_select).each(function () {
					if ($(this).val() <= start_time) {
						
						$(this).wrap("<span>").parent().hide();
					}
				});
				
			
				if (start_time >= $end_select.val()) {
					$('option:visible:first', $end_select).attr('selected', true);
				}
			} else { // OFF
			
				$end_select.hide();
				$('span', $row).hide();
			}
			
		}).each(function () {
			var $row = $(this).parent(),
				$end_select = $('.bup_select_end', $row);
	
			$(this).data('default_value', $(this).val());
			$end_select.data('default_value', $end_select.val());
	
			// Hides end select for "OFF" days
			if (!$(this).val()) {
				$end_select.hide();
				$('span', $row).hide();
			}
		}).trigger('change');
	
	/* 	WIDGETS CUSTOMIZER -  Close Open Widget */
	
	jQuery(document).on("click", ".bup-widgets-icon-close-open, .bup-staff-details-header", function(e) {
	
	
		e.preventDefault();
		var widget_id =  jQuery(this).attr("widget-id");		
		var iconheight = 20;
		
		
		if(jQuery("#bup-widget-adm-cont-id-"+widget_id).is(":visible")) 
	  	{
			
			jQuery("#bup-widgets-icon-close-open-id-"+widget_id).css('background-position', '0px 0px');			
			
		}else{
			
			jQuery("#bup-widgets-icon-close-open-id-"+widget_id).css('background-position', '0px -'+iconheight+'px');			
	 	 }
		
		
		jQuery("#bup-widget-adm-cont-id-"+widget_id).slideToggle();	
					
		return false;
	});
		
		jQuery(document).on("click", "#bup-adm-check-avail-btn-edit", function(e) {
			
			e.preventDefault();			
			
			var b_category=   jQuery("#bup-category").val();
			var b_date=   jQuery("#bup-start-date").val();
			
			jQuery("#bup-steps-cont-res-edit" ).html( bup_profile_v98.msg_wait_reschedule );		
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_check_adm_availability_sfaff", "b_category": b_category, "b_date": b_date  },
					
					success: function(data){
						
						
						var res = data;								
						jQuery("#bup-steps-cont-res-edit").html(res);					    
						

						}
				});			
			
    		e.preventDefault();		 
				
        });
		
		
	//this saves the schedule for the staff member	
	jQuery(document).on("click", "#ubp-save-glogal-business-hours-staff", function(e) {
			
			e.preventDefault();			
			
			var staff_id =  jQuery(this).attr("ubp-staff-id");
			
			var bup_mon_from=   jQuery("#bup-mon-from").val();
			var bup_mon_to=   jQuery("#bup-mon-to").val();			
			var bup_tue_from=   jQuery("#bup-tue-from").val();
			var bup_tue_to=   jQuery("#bup-tue-to").val();			
			var bup_wed_from=   jQuery("#bup-wed-from").val();
			var bup_wed_to=   jQuery("#bup-wed-to").val();			
			var bup_thu_from=   jQuery("#bup-thu-from").val();
			var bup_thu_to=   jQuery("#bup-thu-to").val();			
			var bup_fri_from=   jQuery("#bup-fri-from").val();
			var bup_fri_to=   jQuery("#bup-fri-to").val();			
			var bup_sat_from=   jQuery("#bup-sat-from").val();
			var bup_sat_to=   jQuery("#bup-sat-to").val();			
			var bup_sun_from=   jQuery("#bup-sun-from").val();
			var bup_sun_to=   jQuery("#bup-sun-to").val();			
				
			jQuery("#bup-err-message" ).html( '' );	
			jQuery("#bup-loading-animation-business-hours" ).show( );		
			
			
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_update_business_hours_by_staff", 
					"staff_id": staff_id,					
					"bup_mon_from": bup_mon_from, "bup_mon_to": bup_mon_to ,
					"bup_tue_from": bup_tue_from, "bup_tue_to": bup_tue_to ,
					"bup_wed_from": bup_wed_from, "bup_wed_to": bup_wed_to ,
					"bup_thu_from": bup_thu_from, "bup_thu_to": bup_thu_to ,
					"bup_fri_from": bup_fri_from, "bup_fri_to": bup_fri_to ,
					"bup_sat_from": bup_sat_from, "bup_sat_to": bup_sat_to ,
					"bup_sun_from": bup_sun_from, "bup_sun_to": bup_sun_to ,
					 
					 },
					
					success: function(data){
						
						
						var res = data;		
						
						jQuery("#bup-err-message" ).html( res );						
						jQuery("#bup-loading-animation-business-hours" ).hide( );		
						
						
						
						
						}
				});
			
			
			 // Cancel the default action
    		e.preventDefault();
			 
				
        });
		
		
		jQuery(document).on("click", "#bup-btn-add-staff-special-schedule-confirm", function(e) {
			
			e.preventDefault();		
			
		
			var day_available =  jQuery("#bup-special-schedule-date" ).val();					
			var time_from =  jQuery("#bup-special-schedule-from" ).val();
			var time_to =  jQuery("#bup-special-schedule-to" ).val();
			
			jQuery("#bup-speschedule-message-add").html( bup_profile_v98.msg_wait_reschedule );			
			jQuery("#bup-spinner").show();	
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_add_one_special_schedule_staff",
					"time_from": time_from,
					"time_to": time_to,
					"day_available": day_available},
					
					success: function(data){
						
						bup_reload_special_schedule ();
						jQuery("#bup-speschedule-message-add").html(data);						
						jQuery("#bup-spinner").hide();
													
						
						}
				});
			
			
    		e.preventDefault();
			 
				
        });
		
		jQuery(document).on("click", ".ubp-specialschedule-delete-btn", function(e) {
			
			e.preventDefault();		
			
			var schedule_id =  jQuery(this).attr("dayoff-id");
			
			jQuery("#bup-spinner").show();
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_delete_spec_schedule_by_staff",
					"schedule_id": schedule_id },
					
					success: function(data){
						
						bup_reload_special_schedule ();
						jQuery("#bup-spinner").hide();						
						
						}
				});
			
			
			 // Cancel the default action
    		e.preventDefault();
			 
				
        });
		
		
		jQuery(document).on("click", ".bup-breaks-add", function(e) {
			
			e.preventDefault();	
						
			var day_id = jQuery(this).attr("day-id");
			var staff_id=   jQuery("#staff_id").val();
			
			jQuery("#bup-break-add-break-" +day_id).show();			
			jQuery("#bup-break-add-break-" +day_id).html( bup_profile_v98.msg_wait );
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_get_break_add_staff", 
							"day_id": day_id,
							"staff_id": staff_id},
					
					success: function(data){								
												
						jQuery("#bup-break-add-break-" +day_id).html( data );
												
						
						}
				});
			
    		e.preventDefault();
    });
	
	//confirm break addition
	jQuery(document).on("click", ".bup-button-submit-breaks", function(e) {
			
			e.preventDefault();	
						
			var day_id = jQuery(this).attr("day-id");
			var staff_id=   jQuery("#staff_id").val();	
			
			var bup_from=   jQuery("#bup-break-from-"+day_id).val();
			var bup_to=   jQuery("#bup-break-to-"+day_id).val();
			
		
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_break_add_confirm_staff", 
							"day_id": day_id,
							"staff_id": staff_id,
							"from": bup_from,
							"to": bup_to},
					
					success: function(data){
						
						var res = data	;												
						jQuery("#bup-break-message-add-" +day_id).html( data );
						bup_reload_staff_breaks(staff_id, day_id);
												
						
						}
				});
			
    		e.preventDefault();
			
    });
	
	
	jQuery(document).on("click", ".ubp-break-delete-btn", function(e) {
			
			e.preventDefault();		
			
			var break_id =  jQuery(this).attr("break-id");
			var day_id =  jQuery(this).attr("day-id");
			var staff_id =  jQuery("#staff_id" ).val();	
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_delete_break_staff",
					"break_id": break_id,
					"staff_id": staff_id },
					
					success: function(data){
						
						bup_reload_staff_breaks (staff_id , day_id)							
						
						}
				});
			
			
			 // Cancel the default action
    		e.preventDefault();
			 
				
        });
		
		
		jQuery(document).on("click", "#bup-btn-add-staff-day-off-confirm", function(e) {
			
			e.preventDefault();		
			
			var staff_id =  jQuery("#staff_id" ).val();			
			var day_off_from =  jQuery("#bup-start-date" ).val();
			var day_off_to =  jQuery("#bup-end-date" ).val();
			
			jQuery("#bup-dayoff-message-add").html( bup_profile_v98.msg_wait );	
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_dayoff_add_confirm_staff",
					"day_off_from": day_off_from,
					"day_off_to": day_off_to,
					"staff_id": staff_id },
					
					success: function(data){
						
						bup_reload_days_off (staff_id);
						jQuery("#bup-dayoff-message-add").html(data);
													
						
						}
				});
			
			
			 // Cancel the default action
    		e.preventDefault();
			 
				
        });
		
		jQuery(document).on("click", "#bup-adm-update-info", function(e) {
			
			e.preventDefault();	
			jQuery("#bup-spinner").show();
			
			
			var booking_id =  jQuery("#bup_appointment_id").val();	
			var serial_data = $('#bup-appo-info-form').serialize();
			
			jQuery("#bup-update-info-msg" ).html( bup_profile_v98.msg_wait);
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_update_booking_info_by_staff", "custom_fields": serial_data, "booking_id": booking_id},
					
					success: function(data){		
					
					
						jQuery("#bup-update-info-msg" ).html( data);
						jQuery("#bup-spinner").hide();			
																							
						
						}
				});
			
			
    		e.preventDefault();
			 
				
    });
	
	
	//
	jQuery(document).on("click", "#bup-adm-add-payment", function(e) {
			
			e.preventDefault();	
			jQuery("#bup-spinner").show();		
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_get_payment_form_staff"},
					
					success: function(data){					
												
						jQuery("#bup-new-payment-cont" ).html( data );	
						jQuery("#bup-new-payment-cont" ).dialog( "open" );	
						jQuery("#bup-spinner").hide();	
						
						
						var uultra_date_format =  jQuery('#uultra_date_format').val();
									
						if(uultra_date_format==''){uultra_date_format='dd/mm/yy';}	
					
						jQuery( ".bupro-datepicker" ).datepicker({ 
							showOtherMonths: true, 
							dateFormat: bup_profile_v98.bb_date_picker_format, 
							closeText: BUPDatePicker.closeText,
							currentText: BUPDatePicker.currentText,
							monthNames: BUPDatePicker.monthNames,
							monthNamesShort: BUPDatePicker.monthNamesShort,
							dayNames: BUPDatePicker.dayNames,
							dayNamesShort: BUPDatePicker.dayNamesShort,
							dayNamesMin: BUPDatePicker.dayNamesMin,
							firstDay: BUPDatePicker.firstDay,
							isRTL: BUPDatePicker.isRTL,
							 minDate: 0
						 });
					
						jQuery("#ui-datepicker-div").wrap('<div class="ui-datepicker-wrapper" />');				
						
									     
						
						
						}
				});
			
			
			
    		e.preventDefault();
			 
				
    });
	
	jQuery(document).on("click", "#bup-adm-update-appoint-status-btn", function(e) {
			
			e.preventDefault();		
				
			var appointment_id =  jQuery(this).attr("appointment-id");
			jQuery("#bup-spinner").show();						
				
			jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_appointment_status_options_staff", 
						   "appointment_id": appointment_id
						  },
					
					success: function(data){						
						
												
						jQuery("#bup-appointment-change-status" ).html( data );
						jQuery("#bup-appointment-change-status" ).dialog( "open" );						
						jQuery("#bup-spinner").hide();
						
										
											

						}
				});				
			
				
			
    		e.stopPropagation(); 
				
    });
	
	
	/* appointment status */	
	jQuery( "#bup-appointment-change-status" ).dialog({
			autoOpen: false,			
			width: '400', // overcomes width:'auto' and maxWidth bug
   			
			responsive: true,
			fluid: true, //new option
			modal: true,
			buttons: {			
			
			"Cancel": function() {	
			
				jQuery("#bup-appointment-change-status" ).html( '' );								
				jQuery( this ).dialog( "close" );
			}			
			
			},
			close: function() {
				
				jQuery("#bup-appointment-new-box" ).html( '' );	
			
			
			}
	});
	
	jQuery(document).on("click", ".bup-adm-change-appoint-status-opt", function(e) {
			
			e.preventDefault();	
				
			var appointment_id =  jQuery(this).attr("appointment-id");
			var appointment_status =  jQuery(this).attr("appointment-status");
			
			jQuery("#bup-spinner").show();						
				
			jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_update_appo_status_ed_staff", 
						   "appointment_id": appointment_id,
						   "appointment_status": appointment_status
						  },
					
					success: function(data){			
							
					    jQuery("#bup-app-status" ).html( data );
						jQuery("#bup-spinner").hide();	
						//$fullCalendar.fullCalendar( 'refetchEvents' );	
						jQuery("#bup-appointment-change-status" ).dialog( "close" );											
										
										
											

						}
				});				
			
				
			
				
    });	
	
	jQuery(document).on("click", "#bup-adm-update-appoint-status-btn-staff", function(e) {
			
			e.preventDefault();	
			var appointment_id =  jQuery(this).attr("appointment-id");
			var appointment_status =  jQuery(this).attr("appointment-status");
			
			jQuery("#bup-spinner").show();						
				
			jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_update_appo_status_ed_staff", 
						   "appointment_id": appointment_id,
						   "appointment_status": appointment_status
						  },
					
					success: function(data){			
							
					    jQuery("#bup-app-status" ).html( data );
						jQuery("#bup-spinner").hide();	
						//$fullCalendar.fullCalendar( 'refetchEvents' );
						
						jQuery("#bp-status-staff-change").hide();
						
						
						
						//alert('done');	

										
											

						}
				});				
			
				
			
				
    });	

		
		
		jQuery(document).on("click", ".ubp-daysoff-delete-btn", function(e) {
			
			e.preventDefault();		
			
			var dayoff_id =  jQuery(this).attr("dayoff-id");
			var staff_id =  jQuery("#staff_id" ).val();	
			
			jQuery("#bup-spinner").show();
						
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_delete_dayoff_by_staff",
					"dayoff_id": dayoff_id,
					"staff_id": staff_id },
					
					success: function(data){
						
						bup_reload_days_off (staff_id);
						jQuery("#bup-spinner").hide();						
						
						}
				});
			
			
			 // Cancel the default action
    		e.preventDefault();
			 
				
        });
		
		//seet gcal				
		$(document).on("click", "#bup-backenedb-set-gacal", function(e) {			
			
			var google_calendar =   $('#bup_staff_calendar_list').val();
			
						
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl,
				data: {"action": "bup_set_default_google_calendar", "google_calendar": google_calendar },
				
				success: function(data){									
					
					jQuery("#bup-gcal-message1").hide();
					jQuery("#bup-gcal-message2").hide();					
					$("#bup-gcal-message3").html(data);									
					
					
					}
			});
			
    		e.preventDefault();		 
				
        });
		
		
		jQuery(document).on("click", "#bup-disconnect-gcal-user", function(e) {
			
			e.preventDefault();
			
			var user_id =  jQuery(this).attr("user-id");
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_disconnect_user_gcal_staff", "user_id": user_id },
					
					success: function(data){
						
						//bup_load_staff_details(user_id);
												
																
						
					}
				});
			
			
    		e.preventDefault();
			 
				
        });
		
		
		//update data				
		$(document).on("click", "#bup-backenedb-update-personaldata", function(e) {			
			
			var bup_display_name =   $('#bup_display_name').val();
			
			var bup_city =   $('#bup_city').val();
			var bup_address =   $('#bup_address').val();
			var bup_country =   $('#bup_country').val();
			
			var desc_text =   $('#bup_description').val();
			var summary_text =   $('#bup_summary').val();
			
			
			if (typeof(tinymce.get('bup_description'))=="undefined")
			 {
					var desc_text = $("#bup_description").val();
					//alert(desc_text);
			} else {
					var desc_text =tinymce.get('bup_description').getContent();
					//alert(desc_text + 'TYNYMC'); 
			}
		
			
			
			
			if(bup_display_name=="" ){
				alert(bup_profile_v98.message_profile_display_name);
				return false;
			}
			
			
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl,
				data: {"action": "bup_update_personal_data_profile", "desc_text": desc_text , "bup_display_name": bup_display_name  , "summary_text": summary_text , "bup_country": bup_country , "bup_city": bup_city , "bup_address": bup_address },
				
				success: function(data){					
										
					$("#bup-p-update-profile-msg").html(data);				
					
					
					}
			});
			
    		e.preventDefault();		 
				
        });
		

	
		//reset password				
		$(document).on("click", "#bup-backenedb-eset-password", function(e) {			
			
			var p1 =   $('#p1').val();
			var p2 =   $('#p2').val();		
			
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl,
				data: {"action": "bup_confirm_reset_password_user", "p1": p1 , "p2": p2 },
				
				success: function(data){					
										
					$("#bup-p-reset-msg").html(data);				
					
					
					}
			});
			
    		e.preventDefault();		 
				
        });
		
		
		//update email				
		$(document).on("click", "#bup-backenedb-update-email", function(e) {			
			
			var email =   $('#bup_email').val();			
			
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl,
				data: {"action": "bup_confirm_update_email_user", "email": email },
				
				success: function(data){					
										
					$("#bup-p-changeemail-msg").html(data);
					
					
					
					}
			});
			
    		e.preventDefault();			 

				
        });
		
		
			//this will crop the avatar and redirect
	jQuery(document).on("click touchstart", "#uultra-confirm-avatar-cropping", function(e) {
			
			e.preventDefault();			
			
			var x1 = jQuery('#x1').val();
			var y1 = jQuery('#y1').val();
			
			
			var w = jQuery('#w').val();
			var h = jQuery('#h').val();
			var image_id = $('#image_id').val();
			var user_id = $('#user_id').val();				
			
			if(x1=="" || y1=="" || w=="" || h==""){
				alert(bup_profile_v98.msg_make_selection);
				return false;
			}
			
			
			jQuery('#bup-cropping-avatar-wait-message').html(bup_profile_v98.msg_wait_cropping);
			
			
			
			jQuery.ajax({
				type: 'POST',
				url: ajaxurl,
				data: {"action": "bup_crop_avatar_user_profile_image_staff", "x1": x1 , "y1": y1 , "w": w , "h": h  , "image_id": image_id , "user_id": user_id},
				
				success: function(data){					
					//redirect				
					var site_redir = jQuery('#site_redir').val();
					window.location.replace(site_redir);	
								
					
					
					}
			});
			
					
					
		     	
			 return false;
    		e.preventDefault();
			 

				
        });
	jQuery(document).on("click", "#btn-delete-user-avatar", function(e) {
			
			e.preventDefault();
			
			var user_id =  jQuery(this).attr("user-id");
			var redirect_avatar =  jQuery(this).attr("redirect-avatar");
			
    		jQuery.ajax({
					type: 'POST',
					url: ajaxurl,
					data: {"action": "bup_delete_user_avatar_staff" },
					
					success: function(data){
												
						refresh_my_avatar();
						
						if(redirect_avatar=='yes')
						{
							var site_redir = jQuery('#site_redir').val();
							window.location.replace(site_redir);
							
						}else{
							
							refresh_my_avatar();
							
						}
											
						
					}
				});
			
			
    		e.preventDefault();
			 
				
        });
		
	
	function refresh_my_avatar ()
		{
			
			 jQuery.post(ajaxurl, {
							action: 'refresh_avatar'}, function (response){									
																
							jQuery("#uu-backend-avatar-section").html(response);
									
									
					
			});
			
		}
		
		
		
		
		
	
});

function bup_load_appointment_payments(appointment_id)	
		{					
								
					jQuery.ajax({
							type: 'POST',
							url: ajaxurl,
							data: {"action": "bup_get_payments_list_staff",  "appointment_id": appointment_id},
							
							success: function(data){						
								
								var res = data;						
								jQuery("#bup-payments-cont-res").html(res);					    
								
		
								}
						});	
			
		}
		
		function bup_load_appointment_notes(appointment_id)	
		{					
								
					jQuery.ajax({
							type: 'POST',
							url: ajaxurl,
							data: {"action": "bup_get_notes_list_by_staff",  "appointment_id": appointment_id},
							
							success: function(data){						
								
								var res = data;						
								jQuery("#bup-notes-cont-res").html(res);					    
								
		
								}
						});	
			
		}

function bup_reload_special_schedule ()	
{
	
	jQuery.post(ajaxurl, {
							action: 'bup_get_special_schedule_list_staff'
							
									
							}, function (response){									
																
							jQuery("#bup-staff-special-schedule-list").html(response);
							
		 });
}

function bup_reload_staff_breaks (staff_id , day_id)	
{
	
	jQuery.post(ajaxurl, {
							action: 'bup_get_current_staff_breaks_staff',
							'staff_id': staff_id,
							'day_id': day_id
									
							}, function (response){									
																
							jQuery("#bup-break-adm-cont-id-"+day_id).html(response);
							
							
		 });
}

function bup_reload_days_off (staff_id)	
{
	
	jQuery.post(ajaxurl, {
							action: 'bup_get_daysoff_by_staff',
							'staff_id': staff_id
							
									
							}, function (response){									
																
							jQuery("#bup-staff-daysoff-list").html(response);
							
							//jQuery("#bup-spinner").hide();
							
		 });
}

	

