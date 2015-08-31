/// Require components for Browserify.

window.jQuery = window.$ = require('../components/jquery/dist/jquery.js');
require('../components/velocity/velocity.js');
require('../components/velocity/velocity.ui.js');


/// Document ready.

$(document).ready(function(){
	var toggleNav = $('header').find('.toggleNav a');
	var navPanel = $('header').find('nav .navigation');
	
	/// If toggleNav is visible(only on small devices), bind a click event to it.

	if(toggleNav.is(':visible')){
		navPanel.hide();
		toggleNav.on('click', function(e){
			e.preventDefault();
			
			if(navPanel.is(':hidden')){	
				navPanel.velocity({
					opacity: 1
				},{queue:false, duration:450});			
				navPanel.velocity('slideDown',{display:'flex', duration:450});
				$(this).find('span').addClass('rotate180');
			} else {	
				navPanel.velocity({
					opacity: 0
				},{queue:false, duration:450});			
				navPanel.velocity('slideUp',{duration:450, queue: false});				
				$(this).find('span').removeClass('rotate180');
			}
			
		});
	}


	
});