(function($){
    "use strict"; // Start of use strict  
    // login popup
    function login_popup(){
    	$('.popup-form').find('input:not(.button)').on('focusin',function(){    		
    		$(this).parent().addClass('input-focus');
    	}).on('focusout',function(){
    		$(this).parent().removeClass('input-focus');
    	})
    	$('.popup-form').find('input:not(.button)').each(function(){
    		if($(this).val()) $(this).parent().addClass('has-value');
    		else $(this).parent().removeClass('has-value');    		
    	})
    	$('.popup-form').find('input:not(.button)').on('keyup',function(){
    		$(this).parent().removeClass('invalid');
			if($(this).val()) $(this).parent().addClass('has-value');
			else $(this).parent().removeClass('has-value');
    	})
    	$('.open-login-form,.login-popup,.register-popup,.lostpass-popup').on('click',function(e){
    		if(!$(this).parents('.disable-popup').length > 0){
	    		e.preventDefault();
	    		$('.login-popup-content-wrap').fadeIn();
	    		if($(this).hasClass('register-popup')) $('.register-link').trigger('click');
	    		if($(this).hasClass('lostpass-popup')) $('.lostpass-link').trigger('click');
	    	}
    	})
    	$('.close-login-form,.popup-overlay').on('click',function(e){
    		e.preventDefault();
    		$('.login-popup-content-wrap').fadeOut();
    	})
    	$('.popup-redirect').on('click',function(e){
    		e.preventDefault();
    		var id = $(this).attr('href');
    		$('.ms-default').fadeOut();
    		$('.popup-form').removeClass('active');
    		$(id).parents('.popup-form').addClass('active');
    	})
    	$('#login_error a').on('click',function(){
    		$('.lostpass-link').trigger('click');
    	})
    }
    // fix append css
    function fix_css_append(){
		var css_data = $('#s7upf-theme-style-inline-css').html();
		$('#s7upf-theme-style-inline-css').remove();
	    if(css_data) $('head').append('<style id="s7upf-theme-style-inline-css" type="text/css">'+css_data+'</style>');
    }
    
    function alumni(self,max,self2){
		var active = self.find('.item-alumni.active');
		var index = self.find('.item-alumni.active').index();
		if(active.next().length>0){
			var index_next = active.next().index();
			if(active.next().next().length>0) var index_next_ready = active.next().next().index();
			else var index_next_ready = 0;
		}else{
			index_next = 0;
			index_next_ready = 1;
		}
		if(active.prev().length>0){
			var index_prev = active.prev().index();
			if(active.prev().prev().length>0) var index_prev_ready = active.prev().prev().index();
				else index_prev_ready = max;
		}else{
			index_prev = max;
			index_prev_ready = 0;
		}
		var current_src = self.find('.item-alumni.active .alumni-thumb').attr('src');
		var next_src = self.find('.item-alumni').eq(index_next).find('.alumni-thumb').attr('src');
		var next_src_ready = self.find('.item-alumni').eq(index_next_ready).find('.alumni-thumb').attr('src');
		var prev_src = self.find('.item-alumni').eq(index_prev).find('.alumni-thumb').attr('src');
		var prev_src_ready = self.find('.item-alumni').eq(index_prev_ready).find('.alumni-thumb').attr('src');
		var current = self.find('.alumni-control .current');
		var prev = self.find('.alumni-control .prev');
		var next = self.find('.alumni-control .next');
		var prev1 = self.find('.alumni-control .prev1');
		var next1 = self.find('.alumni-control .next1');
		if(self2){
			current = self2;
			prev = self2.prev();
			prev1 = self2.prev().prev();
			next = self2.next();
			next1 = self2.next().next();
		}
		current.find('img').attr('src',current_src);
		next.find('img').attr('src',next_src);
		prev.find('img').attr('src',prev_src);
		next1.find('img').attr('src',next_src_ready);
		prev1.find('img').attr('src',prev_src_ready);		
	}
    // fix pos mini cart
    function fix_pos_mini_cart(){
    	$('.mini-cart-box').each(function(){
    		var cart_left = $(this).offset().left;
    		var w_width = $(window).width();
    		if(cart_left > w_width/2) $(this).addClass('hover-right-pos');
    		else $(this).addClass('hover-left-pos');
    	})
    	$('.aside-box').each(function(){
    		$(this).closest('.vc_row').css('z-index',1002);
    	})
    }
    // Letter popup
    function letter_popup(){
    	//Popup letter
		var content = $('#boxes-content').html();
		$('#boxes-content').html('');
		if(content) $('body').append('<div id="boxes">'+content+'</div>');
		if($('#boxes').html() != ''){
			var id = '#dialog';	
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		
			//Set heigth and width to mask to fill up the whole screen
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			
			//transition effect		
			$('#mask').fadeIn(500);	
			$('#mask').fadeTo("slow",0.6);	
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
	              
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		
			//transition effect
			$(id).fadeIn(2000); 	
		
			//if close button is clicked
			$('.window .close-popup').click(function (e) {
				//Cancel the link behavior
				e.preventDefault();
				
				$('#mask').hide();
				$('.window').hide();
			});		
			
			//if mask is clicked
			$('#mask').click(function () {
				$(this).hide();
				$('.window').hide();
			});
		}
		//End popup letter
    }

    /************** FUNCTION ****************/ 
    function tool_panel(){
    	$('.dm-open').on('click',function(){
    		$('#widget_indexdm').toggleClass('active');
    		$('.dm-content .item-content').on('hover',
    			function(){
    				$('#indexdm_img').addClass('active');
	    			var img_src = $(this).find('img').attr('data-src');
	    			$('.img-demo').css('display','block');
	    			$('.img-demo').css('background-image','url('+img_src+')');
	    		},
	    		function(){
	    			$('#indexdm_img').removeClass('active');
	    			$('.img-demo').attr('style','');
	    		}
    		);
    		return false;
    	})
    }
    function auto_width_megamenu(){
    	if($(window).width()>767){
	        var full_width = parseInt($('.container').innerWidth());
	        if($('.main-nav').length > 0){
		        var main_menu_width = parseInt($('.main-nav').innerWidth());
		        var main_menu_left = parseInt($('.main-nav').offset().left);
		        $('.main-nav > ul > li.has-mega-menu').each(function(){
		        	if($(this).find('.mega-menu').length > 0){
		        		var mega_menu_width = parseInt($(this).find('.mega-menu').innerWidth());
				        var li_width = parseInt($(this).innerWidth());
				        var seff = $(this);
				        if($('.rtl').length > 0){
				        	setTimeout(function() {
				        		main_menu_left = parseInt($(window).width() - (seff.parents('.main-nav').offset().left + seff.parents('.main-nav').outerWidth()));
					        	var mega_menu_left = $(window).width() - (seff.find('.mega-menu').offset().left + seff.find('.mega-menu').outerWidth());
						        var li_left = $(window).width() - (seff.offset().left + seff.outerWidth());
						        var pos = li_left - mega_menu_left - mega_menu_width/2 + li_width/2;
						        var pos2 = pos + mega_menu_left + mega_menu_width - main_menu_left - main_menu_width;
						        if(pos2 > 0 ) pos = pos - pos2;
						        if(pos > 0 ) $(this).find('.mega-menu').css('right',pos);
						        else{
						        	pos  = $(window).width() - ($('.container').offset().left + $('.container').outerWidth()) - main_menu_left + (full_width - mega_menu_width)/2;
						        	seff.find('.mega-menu').css('right',pos);
						        }
						       }, 2000);
				        }
				        else{
					        var mega_menu_left = $(this).find('.mega-menu').offset().left;
					        var li_left = $(this).offset().left;
					        var pos = li_left - mega_menu_left - mega_menu_width/2 + li_width/2;
					        var pos2 = pos + mega_menu_left + mega_menu_width - main_menu_left - main_menu_width;
					        if(pos2 > 0 ) pos = pos - pos2;
					        if(pos > 0 ) $(this).find('.mega-menu').css('left',pos);
					        else{
					        	pos  = $('.container').offset().left  - main_menu_left + (full_width - mega_menu_width)/2;
					        	$(this).find('.mega-menu').css('left',pos);
					        }
					    }
				    }
		        })
		    }
	    }
    }
    //Detail Gallery
    function parallax_slider(){
    	if($('.parallax-slider').length>0){
			var ot = $('.parallax-slider').offset().top;
			var sh = $('.parallax-slider').height();
			var st = $(window).scrollTop();
			var top = (($(window).scrollTop() - ot) * 0.5) + 'px';
			if(st>ot&&st<ot+sh){
				$('.parallax-slider .item-slider').css({
					'background-position': 'center ' + top
				});
			}else{
				$('.parallax-slider .item-slider').css({
					'background-position': 'center 0'
				});
			}
		}
    }
	function detail_gallery(){
		if($('.detail-gallery').length>0){
			if($('.fancybox-media').length>0){
				$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',
					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});
			}
			$('.detail-gallery').each(function(){
				var data=$(this).find(".carousel").data();
				var seff = $(this);
				if($(this).find(".carousel").length>0){
					$(this).find(".carousel").jCarouselLite({
						btnNext: $(this).find(".gallery-control .next"),
						btnPrev: $(this).find(".gallery-control .prev"),
						speed: 800,
						visible:data.visible,
						vertical:data.vertical,
					});
				}
				//Elevate Zoom
				$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
				$('.zoomContainer').remove();
				$(this).find('.zoom-style1 .mid img').elevateZoom();
				$(this).find('.zoom-style2 .mid img').elevateZoom({
					scrollZoom : true
				});
				$(this).find('.zoom-style3 .mid img').elevateZoom({
					zoomType: "lens",
					lensShape: "square",
					lensSize: 150,
					borderSize:1,
					containLensZoom:true,
					responsive:true
				});
				$(this).find('.zoom-style4 .mid img').elevateZoom({
					zoomType: "inner",
					cursor: "crosshair",
					zoomWindowFadeIn: 500,
					zoomWindowFadeOut: 750
				});

				$(this).find(".carousel a").on('click',function(event) {
					event.preventDefault();
					$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
					$(this).addClass('active');
					var z_url =  $(this).find('img').attr("data-src");
					var srcset =  $(this).find('img').attr("data-srcset");
					$(this).parents('.detail-gallery').find(".mid img").attr("src", z_url);
					$(this).parents('.detail-gallery').find(".mid img").attr("srcset", srcset);
					$('.zoomWindow,.zoomLens').css('background-image','url("'+z_url+'")');
					$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
					$('.zoomContainer').remove();
					$(this).parents('.detail-gallery').find('.zoom-style1 .mid img').elevateZoom();
					$(this).parents('.detail-gallery').find('.zoom-style2 .mid img').elevateZoom({
						scrollZoom : true
					});
					$(this).parents('.detail-gallery').find('.zoom-style3 .mid img').elevateZoom({
						zoomType: "lens",
						lensShape: "square",
						lensSize: 150,
						borderSize:1,
						containLensZoom:true,
						responsive:true
					});
					$(this).parents('.detail-gallery').find('.zoom-style4 .mid img').elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 750
					});
				});
				$('input[name="variation_id"]').on('change',function(){
					var z_url =  seff.find('.mid img').attr("src");
					$('.zoomWindow,.zoomLens').css('background-image','url("'+z_url+'")');
					$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
					$('.zoomContainer').remove();
					$('.detail-gallery').find('.zoom-style1 .mid img').elevateZoom();
					$('.detail-gallery').find('.zoom-style2 .mid img').elevateZoom({
						scrollZoom : true
					});
					$('.detail-gallery').find('.zoom-style3 .mid img').elevateZoom({
						zoomType: "lens",
						lensShape: "square",
						lensSize: 150,
						borderSize:1,
						containLensZoom:true,
						responsive:true
					});
					$('.detail-gallery').find('.zoom-style4 .mid img').elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 750
					});
				})
			});
		}
	}
    
    // Menu fixed
    function fixed_header(){
        var menu_element;
        menu_element = $('.main-nav:not(.menu-fixed-content)').closest('.vc_row');
        if($('.menu-sticky-on').length > 0 && $(window).width()>1024){           
            var menu_class = $('.main-nav').attr('class');
            var header_height = $("#header").height()+100;
            var ht = header_height + 150;
            var st = $(window).scrollTop();

            if(!menu_element.hasClass('header-fixed') && menu_element.attr('data-vc-full-width') == 'true') menu_element.addClass('header-fixed');
            if(st>header_height){               
                if(menu_element.attr('data-vc-full-width') == 'true'){
                    if(st > ht) menu_element.addClass('active');
                    else menu_element.removeClass('active');
                    menu_element.addClass('fixed-header');
                }
                else{
                    if(st > ht) menu_element.parent().parent().addClass('active');
                    else menu_element.parent().parent().removeClass('active');
                    if(!menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.wrap( "<div class='menu-fixed-content fixed-header "+menu_class+"'><div class='container'></div></div>" );
                    }
                }
            }else{
                menu_element.removeClass('active');
                if(menu_element.attr('data-vc-full-width') == 'true') menu_element.removeClass('fixed-header');
                else{
                    if(menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.unwrap();
                        menu_element.unwrap();
                    }
                }
            }
        }
        else{
            menu_element.removeClass('active');
            if(menu_element.attr('data-vc-full-width') == 'true') menu_element.removeClass('fixed-header');
            else{
                if(menu_element.parent().parent().hasClass('fixed-header')){
                    menu_element.unwrap();
                    menu_element.unwrap();
                }
            }
        }
    }
    //Menu Responsive
    function fix_click_menu(){
    	if($(window).width()<768){
			if($('.btn-toggle-mobile-menu').length>0){
				return false;
			}
			else $('.main-nav li.menu-item-has-children,.main-nav li.has-mega-menu').append('<span class="btn-toggle-mobile-menu"></span>');
		}
		else{
			$('.btn-toggle-mobile-menu').remove();
			$('.main-nav .sub-menu,.main-nav .mega-menu').slideDown('fast');
		}
    }
	function rep_menu(){
		$('.toggle-mobile-menu').on('click',function(event){
			event.preventDefault();
			$(this).parents('.main-nav').toggleClass('active');
		});
		$('.main-nav').on('click','.btn-toggle-mobile-menu',function(event){
			$(this).toggleClass('active');
			$(this).prev().stop(true,false).slideToggle('fast');
		});
		$('.main-nav').on('click','.menu-item > a[href="#"]',function(event){
			event.preventDefault();
			$(this).toggleClass('active');
			$(this).next().stop(true,false).slideToggle('fast');
		});
	}

    function background(){
		$('.bg-slider .item-slider').each(function(){
			$(this).find('.banner-thumb a img').css('height',$(this).find('.banner-thumb a img').attr('height'));
			var src=$(this).find('.banner-thumb a img').attr('src');
			$(this).css('background-image','url("'+src+'")');
		});	
	}
    
    function fix_variable_product(){
    	//Fix product variable thumb    	
        $('body .variations_form select').live('change',function(){
            var id = $('input[name="variation_id"]').val();
            if(id){
                $('.product-gallery #bx-pager').find('a[data-variation_id="'+id+'"]').trigger( 'click' );
            }
        })
        // variable product
        if($('.wrap-attr-product1.special').length > 0){
            $('.attr-filter ul li a').live('click',function(){
                event.preventDefault();
                $(this).parents('ul').find('li').removeClass('active');
                $(this).parent().addClass('active');
                var attribute = $(this).parent().attr('data-attribute');
                var id = $(this).parents('ul').attr('data-attribute-id');
                $('#'+id).val(attribute);
                $('#'+id).trigger( 'change' );
                $('#'+id).trigger( 'focusin' );
                return false;
            })
            $('.attr-hover-box').on('hover',function(){
                var seff = $(this);
                var old_html = $(this).find('ul').html();
                var current_val = $(this).find('ul li.active').attr('data-attribute');
                $(this).next().find('select').trigger( 'focusin' );
                var content = '';
                $(this).next().find('select').find('option').each(function(){
                    var val = $(this).attr('value');
                    var title = $(this).html();
                    var el_class = '';
                    if(current_val == val) el_class = ' class="active"';
                    if(val != ''){
                        content += '<li'+el_class+' data-attribute="'+val+'"><a href="#" class="bgcolor-'+val+'"><span></span>'+title+'</a></li>';
                    }
                })
                if(old_html != content) $(this).find('ul').html(content);
            })
            $('body .reset_variations').live('click',function(){
                $('.attr-hover-box').each(function(){
                    var seff = $(this);
                    var old_html = $(this).find('ul').html();
                    var current_val = $(this).find('ul li.active').attr('data-attribute');
                    $(this).next().find('select').trigger( 'focusin' );
                    var content = '';
                    $(this).next().find('select').find('option').each(function(){
                        var val = $(this).attr('value');
                        var title = $(this).html();
                        var el_class = '';
                        if(current_val == val) el_class = ' class="active"';
                        if(val != ''){
	                        content += '<li'+el_class+' data-attribute="'+val+'"><a href="#" class="bgcolor-'+val+'"><span></span>'+title+'</a></li>';
	                    }
                    })
                    if(old_html != content) $(this).find('ul').html(content);
                    $(this).find('ul li').removeClass('active');
                })
            })
        }
        //end
    }
    
    function afterAction(){
		this.$elem.find('.owl-item').each(function(){
			var check = $(this).hasClass('active');
			if(check==true){
				$(this).find('.animated').each(function(){
					var anime = $(this).attr('data-animated');
					$(this).addClass(anime);
				});
			}else{
				$(this).find('.animated').each(function(){
					var anime = $(this).attr('data-animated');
					$(this).removeClass(anime);
				});
			}
		})
	}
    function s7upf_qty_click(){
    	//QUANTITY CLICK
		$("body").on("click",".detail-qty .qty-up",function(){
            var min = $(this).prev().attr("min");
            var max = $(this).prev().attr("max");
            var step = $(this).prev().attr("step");
            if(step === undefined) step = 1;
            if(max !==undefined && Number($(this).prev().val())< Number(max) || max === undefined || max === ''){ 
                if(step!='') $(this).prev().val(Number($(this).prev().val())+Number(step));
            }
            $( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
            return false;
        })
        $("body").on("click",".detail-qty .qty-down",function(){
            var min = $(this).next().attr("min");
            var max = $(this).next().attr("max");
            var step = $(this).next().attr("step");
            if(step === undefined) step = 1;
            if(Number($(this).next().val()) > Number(min)){
	            if(min !==undefined && $(this).next().val()>min || min === undefined || min === ''){
	                if(step!='') $(this).next().val(Number($(this).next().val())-Number(step));
	            }
	        }
	        $( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
	        return false;
        })
        $("body").on("keyup change","input.qty-val",function(){
        	$( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
        })
		//END
    }
    
    function s7upf_owl_slider(){
    	//Carousel Slider
		if($('.sv-slider').length>0){
			$('.sv-slider').each(function(){
				var seff = $(this);
				var item = seff.attr('data-item');
				var speed = seff.attr('data-speed');
				var itemres = seff.attr('data-itemres');
				var animation = seff.attr('data-animation');
				var nav = seff.attr('data-navigation');
				var pag = seff.attr('data-pagination');
				var text_prev = seff.attr('data-prev');
				var text_next = seff.attr('data-next');
				var pagination = false, navigation= false, singleItem = false;
				var autoplay;
				if(speed != '') autoplay = speed;
				else autoplay = false;
				// Navigation
				if(nav) navigation = true;
				if(pag) pagination = true;
				if(animation != ''){
					singleItem = true;
					item = '1';
				}
				else animation = false;
				var prev_text = '<i class="ion-ios-arrow-left"></i>';
				var next_text = '<i class="ion-ios-arrow-right"></i>';
				if(text_prev) prev_text = text_prev;
				if(text_next) next_text = text_next;
				if(itemres == '' || itemres === undefined){
					if(item == '1') itemres = '0:1,480:1,768:1,1200:1';
					if(item == '2') itemres = '0:1,480:1,768:2,1200:2';
					if(item == '3') itemres = '0:1,480:2,768:2,992:3';
					if(item == '4') itemres = '0:1,480:2,840:3,1200:4';
					if(item >= '5') itemres = '0:1,480:2,768:3,1024:4,1200:'+item;
				}				
				itemres = itemres.split(',');
				var i;
				for (i = 0; i < itemres.length; i++) { 
				    itemres[i] =  $.map(itemres[i].split(':'), function(value){
					    return parseInt(value, 10);
					});
				}
				seff.owlCarousel({
					items: item,
					itemsCustom: itemres,
					autoPlay:autoplay,
					pagination: pagination,
					navigation: navigation,
					navigationText:[prev_text,next_text],
					singleItem : singleItem,
					beforeInit:background,
					addClassActive : true,
					afterAction: afterAction,
					touchDrag: true,
					transitionStyle : animation
				});
			});			
		}
    }

    function s7upf_all_slider(seff,number){
    	if(!seff) seff = $('.smart-slider');
    	if(!number) number = '';
    	//Carousel Slider
		if(seff.length>0){
			seff.each(function(){
				var seff = $(this);
				var item = seff.attr('data-item'+number);
				var speed = seff.attr('data-speed');
				var itemres = seff.attr('data-itemres'+number);
				var text_prev = seff.attr('data-prev');
				var text_next = seff.attr('data-next');
				var nav = seff.attr('data-navigation');
				var pag = seff.attr('data-pagination');
				var animation = seff.attr('data-animation');
				var autoplay;
				var pagination = false, navigation= false, singleItem = false;
				if(animation != '' && animation !== undefined){
					singleItem = true;
					item = '1';
				}
				if(speed === undefined) speed = '';
				if(speed != '') autoplay = speed;
				else autoplay = false;
				if(item == '' || item === undefined) item = 1;
				if(itemres === undefined) itemres = '';
				var prev_text = '<i class="ion-ios-arrow-left"></i>';
				var next_text = '<i class="ion-ios-arrow-right"></i>';
				if(text_prev) prev_text = text_prev;
				if(text_next) next_text = text_next;
				if(nav) navigation = true;
				if(pag) pagination = true;
				// Item responsive
				if(itemres == '' || itemres === undefined){
					if(item == '1') itemres = '0:1,480:1,768:1,1200:1';
					if(item == '2') itemres = '0:1,480:1,768:2,1200:2';
					if(item == '3') itemres = '0:1,480:2,768:2,992:3';
					if(item == '4') itemres = '0:1,480:2,840:3,1200:4';
					if(item >= '5') itemres = '0:1,480:2,768:3,1200:'+item;
				}				
				itemres = itemres.split(',');
				var i;
				for (i = 0; i < itemres.length; i++) { 
				    itemres[i] =  $.map(itemres[i].split(':'), function(value){
					    return parseInt(value, 10);
					});
				}
				seff.owlCarousel({
					items: item,
					itemsCustom: itemres,
					autoPlay:autoplay,
					pagination: pagination,
					navigation: navigation,
					navigationText:[prev_text,next_text],
					addClassActive : true,
					touchDrag: true,
					singleItem : singleItem,
					transitionStyle : animation,
					afterAction: afterAction,
				});
			});			
		}
    }

    /************ END FUNCTION **************/  
	$(document).ready(function(){
		//Menu Responsive 
		letter_popup();
		parallax_slider();
		fix_click_menu();
		rep_menu();
		s7upf_qty_click();
		detail_gallery();
		tool_panel();
		fix_pos_mini_cart();
		login_popup();
		//Video Custom
		if($('.block-video-custom').length > 0){
			$('.block-video-custom').each(function(){
				var self = $(this);
				self.find('.video-button').on('click', function (event) {
					event.preventDefault();
					self.addClass('clicked');
					var video = $('.video-custom').get(0);
					$(this).toggleClass('active');
					if (video.paused) {
						video.play();
					} else {
						video.pause();
					}
				});
			});
		}
		//Alumni Slider
		if($('.alumni-slider').length > 0){
			$('.alumni-slider').each(function(){
				var self = $(this);
				self.append('<div class="alumni-control"><a href="#" class="prev1"></a><a href="#" class="prev"></a><a href="#" class="current"></a><a href="#" class="next"></a><a href="#" class="next1"></a></div>');
				self.find('.alumni-control a').append('<img src="" alt="" />');
				var max = self.find('.item-alumni').length - 1;				
				alumni(self,max,false);
				self.find('.current').on('click',function(event){
					event.preventDefault();
				});
			});
			$('.alumni-slider').on('click','.next',function(event){
				event.preventDefault();
				var self2 = $(this);
				var self = $(this).parents('.alumni-slider');
				var index = self.find('.item-alumni.active').index();
				var max = self.find('.item-alumni').length - 1;	
				if(index == max){
					index = 0;
				}else{
					index = index + 1;
				}
				self.find('.item-alumni').removeClass('active');
				self.find('.item-alumni').eq(index).addClass('active');
				self.find('.alumni-control a.prev1').remove();
				self.find('.alumni-control').append( '<a href="#" class="next1"><img src="" alt="" /></a>' );
				alumni(self,max,self2);
				$(this).attr('class','current');
				$(this).next().attr('class','next');
				$(this).prev().attr('class','prev');
				$(this).prev().prev().attr('class','prev1');
			});
			$('.alumni-slider').on('click','.prev',function(event){
				event.preventDefault();
				var self2 = $(this);
				var self = $(this).parents('.alumni-slider');
				var index = self.find('.item-alumni.active').index();
				var max = self.find('.item-alumni').length - 1;	
				if(index == 0){
					index = max;
				}else{
					index = index - 1;
				}
				self.find('.item-alumni').removeClass('active');
				self.find('.item-alumni').eq(index).addClass('active');
				self.find('.alumni-control a.next1').remove();
				self.find('.alumni-control').prepend( '<a href="#" class="prev1"><img src="" alt="" /></a>' );
				alumni(self,max,self2);
				$(this).attr('class','current');
				$(this).next().attr('class','next');
				$(this).next().next().attr('class','next1');
				$(this).prev().attr('class','prev');
			});
		}
		//Menu Fixed
		$('.close-menu').on('click',function(event){
			if($(window).width()>767) {
				$('.menu-fixed .main-nav').removeClass('active');
				$(this).removeClass('active');
				$('body').removeClass('overlay');
			}
		});
		$('.btn-menu-fixed').on('click',function(event){
			if($(window).width()>767){
				event.preventDefault();
				event.stopPropagation();
				$('body').addClass('overlay');
				$('.close-menu').addClass('active');
				$(this).next().addClass('active').height($(window).height());
			}
		});
		//fix row bg
		$('.fix-row-bg').each(function(){
			var row_class = $(this).attr('class');
			row_class = row_class.replace('vc_row wpb_row','');
			$(this).removeClass(row_class);
			$(this).removeClass('fix-row-bg');
			$(this).wrap('<div class="wrap-vc-row'+row_class+'"></div>');
		})
		//Cat search
		$('.select-cat-search').on('click',function(event){
			event.preventDefault();
			$(this).parents('ul').find('li').removeClass('active');
			$(this).parent().addClass('active');
			var x = $(this).attr('data-filter');
			if(x){
				x = x.replace('.','');
				$('.cat-value').val(x);
			}
			else $('.cat-value').val('');
			$('.current-search-cat').text($(this).text());
		});
		// aside-box cart
		$('.close-minicart').on('click',function(event){
			$('body').removeClass('overlay');
			$('.mini-cart-content').removeClass('active');
		});
		$('.mini-cart-box.aside-box .mini-cart-link').on('click',function(event){
			event.preventDefault();
			event.stopPropagation();
			$('body').addClass('overlay');
			$(this).next().addClass('active');
		});
		//Count item cart
        if($(".get-cart-number").length){
            var count_cart_item = $(".get-cart-number").val();
            $(".set-cart-number").html(count_cart_item);
        }  
		$('.detail-tab-title').find('li').first().addClass('active');
		
		//Fix mailchimp
        $('.sv-mailchimp-form').each(function(){
            var placeholder = $(this).attr('data-placeholder');
            var submit = $(this).attr('data-submit');
            if(placeholder) $(this).find('input[name="EMAIL"]').attr('placeholder',placeholder);
            if(submit) $(this).find('input[type="submit"]').val(submit);
        })      
        //Back To Top
		$('.scroll-top').on('click',function(event){
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow');
		});	

	});

	$(window).load(function(){
		s7upf_owl_slider();
		s7upf_all_slider();
		auto_width_megamenu();	
		fix_css_append();	
		//Pre Load
		$('body').removeClass('preload');
		// Fix height slider
		$('.banner-slider .banner-info').each(function(){
			var height_content = $(this).find('.slider-content-text')["0"].clientHeight;
			$(this).css('height',height_content);
		})
		// menu fixed onload
		$("#header").css('min-height','');
        if($(window).width()>1024){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height','');
        }
        // rtl-enable
        if($('.rtl-enable').length > 0){
            $('*[data-vc-full-width="true"]').each(function(){
            	var pleft = $(this).css('padding-left');
            	pleft = parseFloat(pleft) - 15;
            	$(this).css('padding-left',pleft);
            })
        }
		//menu fix
		if($(window).width() >= 768){
			var c_width = $(window).width();
			$('.main-nav ul ul ul.sub-menu').each(function(){
				var left = $(this).offset().left;
				if(c_width - left < 180){
					$(this).css({"left": "-100%"})
				}
				if(left < 180){
					$(this).css({"left": "100%"})
				}
			})
		}
		//List Item Masonry 
		if($('.blog-grid-view.list-masonry .list-post-wrap').length>0){
			// setTimeout(function() {
				$('.blog-grid-view.list-masonry .list-post-wrap').masonry();
			// }, 2000);
		}
		if($('.product-grid-view.list-masonry .list-product-wrap').length>0){
			// setTimeout(function() {
				$('.product-grid-view.list-masonry .list-product-wrap').masonry();
			// }, 2000);
		}
	});// End load

	/* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    var w_width = $(window).width();
    $(window).resize(function(){
    	fix_pos_mini_cart();
    	auto_width_megamenu();
    	fix_click_menu();
        $("#header").css('min-height','');
        var c_width = $(window).width();
        setTimeout(function() {
            if($('.rtl-enable').length > 0 && c_width != w_width){
                $('*[data-vc-full-width="true"]').each(function(){
                	var pleft = $(this).css('padding-left');
	            	pleft = parseFloat(pleft) - 15;
	            	$(this).css('padding-left',pleft);
                })
                w_width = c_width;
            }
        }, 2000);
    });

	jQuery(window).scroll(function(){
		fixed_header();
		parallax_slider();
		if($(window).width()>1024){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height','');
        }
		//Scroll Top
		if($(this).scrollTop()>$(this).height()){
			$('.scroll-top').addClass('active');
		}else{
			$('.scroll-top').removeClass('active');
		}
	});// End Scroll

	$.fn.tawcvs_variation_swatches_form = function () {
        return this.each( function() {
            var $form = $( this ),
                clicked = null,
                selected = [];

            $form
                .addClass( 'swatches-support' )
                .on( 'click', '.swatch', function ( e ) {
                    e.preventDefault();
                    var $el = $( this ),
                        $select = $el.closest( '.value' ).find( 'select' ),
                        attribute_name = $select.data( 'attribute_name' ) || $select.attr( 'name' ),
                        value = $el.data( 'value' );

                    $select.trigger( 'focusin' );

                    // Check if this combination is available
                    if ( ! $select.find( 'option[value="' + value + '"]' ).length ) {
                        $el.siblings( '.swatch' ).removeClass( 'selected' );
                        $select.val( '' ).change();
                        $form.trigger( 'tawcvs_no_matching_variations', [$el] );
                        return;
                    }

                    clicked = attribute_name;

                    if ( selected.indexOf( attribute_name ) === -1 ) {
                        selected.push(attribute_name);
                    }

                    if ( $el.hasClass( 'selected' ) ) {
                        $select.val( '' );
                        $el.removeClass( 'selected' );

                        delete selected[selected.indexOf(attribute_name)];
                    } else {
                        $el.addClass( 'selected' ).siblings( '.selected' ).removeClass( 'selected' );
                        $select.val( value );
                    }

                    $select.change();
                } )
                .on( 'click', '.reset_variations', function () {
                    $( this ).closest( '.variations_form' ).find( '.swatch.selected' ).removeClass( 'selected' );
                    selected = [];
                } )
                .on( 'tawcvs_no_matching_variations', function() {
                    window.alert( wc_add_to_cart_variation_params.i18n_no_matching_variations_text );
                } );
        } );
    };

    $( function () {
        $( '.variations_form' ).tawcvs_variation_swatches_form();
        $( document.body ).trigger( 'tawcvs_initialized' );
    } );

})(jQuery);