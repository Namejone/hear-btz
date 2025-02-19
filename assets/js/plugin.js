(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {

        $('#progress-circle').circleProgress({
            value: 0.85,
            size: 80,
            fill: {
				gradient: ["#0CD17E", "#019B63"]
			},
    		lineCap: 'round',
            thickness: 10,
            emptyFill: '#fff',
            startAngle: -Math.PI / 2,
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('.progress-percentage').html(Math.round(95 * progress) + '<span></span>');
        });

    });

    jQuery(window).load(function(){

    });

}(jQuery));