(function ($) {
  Drupal.behaviors.yourBehaviorName = {
    attach: function (context, settings) {

    	$('.pane-custom.pane-4 .pane-content a:last-child').click(function () {
    		
    		if($('.panel-pane.pane-block.pane-search-form').hasClass("show-search-form")){
    			$('.panel-pane.pane-block.pane-search-form').removeClass("show-search-form");
    		}else{
    			$('.panel-pane.pane-block.pane-search-form').addClass("show-search-form");
    		}

		});


		$('body #navbar .header-top').click(function () {
    		
    	if($('body #navbar .header-top').hasClass("click") && screen.width< 524){
    		$('body #navbar .header-top').animate({ 'marginTop': '-40%' }, 1000);
    		$('body #navbar .header-top').removeClass("click");
    	}else{
    		$('body #navbar .header-top').animate({ margin: "0%" }, 1000);
    		$('body #navbar .header-top').addClass("click");
    	}

		});


		$('.expanded.dropdown').mouseover(function() {
  			$( ".expanded.dropdown" ).addClass("open");
		});

		$('.expanded.dropdown').mouseleave(function() {
  			$(".expanded.dropdown").removeClass("open");
		});
		

		$(".view.view-top-slider-front-page").mouseover(function() {
  			$(".views-slideshow-controls-text-previous-processed").animate({ 'opacity': '1' }, 1000);
		});

		$(".view.view-top-slider-front-page").mouseover(function() {
  			$(".views-slideshow-controls-text-next-processed").animate({ 'opacity': '1' }, 1000);
		});   

		$(".view.view-top-slider-front-page").mouseleave(function() {
  			$(".views-slideshow-controls-text-previous-processed").animate({ 'opacity': '0' }, 1000);
		});

		$(".view.view-top-slider-front-page").mouseleave(function() {
  			$(".views-slideshow-controls-text-next-processed").animate({ 'opacity': '0' }, 1000);
		}); 

		$(".pane-views-our-projects-block-1 .col-1 ").mouseover(function() {
  			$(".pane-views-our-projects-block-1 .col-1 .views-field.views-field-view-node").animate({ 'opacity': '1' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-1 .views-field.views-field-title").animate({ 'opacity': '1' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-2 ").mouseover(function() {
  			$(".pane-views-our-projects-block-1 .col-2 .views-field.views-field-view-node").animate({ 'opacity': '1' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-2 .views-field.views-field-title").animate({ 'opacity': '1' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-3 ").mouseover(function() {
  			$(".pane-views-our-projects-block-1 .col-3 .views-field.views-field-view-node").animate({ 'opacity': '1' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-3 .views-field.views-field-title").animate({ 'opacity': '1' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-4 ").mouseover(function() {
  			$(".pane-views-our-projects-block-1 .col-4 .views-field.views-field-view-node").animate({ 'opacity': '1' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-4 .views-field.views-field-title").animate({ 'opacity': '1' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-1 ").mouseleave(function() {
  			$(".pane-views-our-projects-block-1 .col-1 .views-field.views-field-view-node").animate({ 'opacity': '0' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-1 .views-field.views-field-title").animate({ 'opacity': '0' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-2 ").mouseleave(function() {
  			$(".pane-views-our-projects-block-1 .col-2 .views-field.views-field-view-node").animate({ 'opacity': '0' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-2 .views-field.views-field-title").animate({ 'opacity': '0' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-3 ").mouseleave(function() {
  			$(".pane-views-our-projects-block-1 .col-3 .views-field.views-field-view-node").animate({ 'opacity': '0' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-3 .views-field.views-field-title").animate({ 'opacity': '0' }, 1000);
		});

		$(".pane-views-our-projects-block-1 .col-4 ").mouseleave(function() {
  			$(".pane-views-our-projects-block-1 .col-4 .views-field.views-field-view-node").animate({ 'opacity': '0' }, 1000);
  			$(".pane-views-our-projects-block-1 .col-4 .views-field.views-field-title").animate({ 'opacity': '0' }, 1000);
		});

    }
  };
})(jQuery);