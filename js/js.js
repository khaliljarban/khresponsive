/*
project name: khresponsive
Version: 1.0
License: my code - private!!!, open source code - by their license
description: an css & js plugin making the develope at responsive more easer
other plugins i use: 
css reset:
	http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
jQuery:
 jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license 
*/

jQuery(window).load(function(){
	jQuery('body').loadkhResponsive();
});
/*
 * kh responsive
 * develope by:khalil jarban
 * ver 1
 * publish date 8.1.2015
 * 444802@gmail.com
 */
(function($) {
	 $.fn.loadkhResponsive = function() {
    	var khResponsive=new khSlider();
		// process the nav menu
		khResponsive.do_nav_menu();
    }
	function khSlider(){
			var rs=this;			
			$('body').addClass('khresponsive_loaded');
			rs.do_nav_menu=function(){
				// check if the nav exists
				if($('.nav').length==0){ return false; }
				//get the first level items
				var navCount=jQuery('.nav ul > li').length;
				//set classes attributes
				jQuery('.nav ul > li').addClass('td-1-'+navCount);
				// get the template of the nav							
				rs.get_nav_template();
			}
			rs.get_nav_template=function(){
				$('.nav').each(function(){
					var navID=$(this).data('id');
					var navTemplate=$(this).data('template');
					switch(navTemplate){
						case 'nav-template-1':
							$(this).addClass('nav-template-1');
							$(this).prepend('<label for="nav-id-'+navID+'" class="mobile-nav-toggle hide-destop" ><small></small><small></small><small></small></label><input type="checkbox" id="nav-id-'+navID+'" class="hide-all" />');
							$(this).find('ul').eq(0).wrap('<div class="mobile-nav-outer hide-mobile fullwidth">');
						break; 
					
					}
				});
			}
	}
}(jQuery));