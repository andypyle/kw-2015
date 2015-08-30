/// Require components for Browserify.

window.jQuery = window.$ = require('../components/jquery/dist/jquery.js');
require('../components/velocity/velocity.js');
require('../components/velocity/velocity.ui.js');


/// Document ready.

$(document).ready(function(){
	var toggleNav = $('header').find('.toggleNav a');
	var navPanel = $('header').find('nav .navigation');
	var navHeight = $('header').outerHeight();
	
	/// If toggleNav is visible(only on small devices), bind a click event to it.

	if(toggleNav.is(':visible')){
		navPanel.hide();
		toggleNav.on('click', function(e){
			e.preventDefault();
			
			if(navPanel.is(':hidden')){				
				navPanel.velocity('slideDown',{display:'flex', duration:275});
			} else {				
				navPanel.velocity('slideUp',{duration:275, queue: false});				
			}
			
		});
	}


	
});