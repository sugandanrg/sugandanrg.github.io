$(function() {
	$('.skillsect').click(function(){
     event.preventDefault();
     $('.chart').easyPieChart({
       scaleColor: false,
       lineWidth: 20,
       lineCap: 'butt',
       barColor: '#ff005a',
       trackColor:	"#fff",
       size: 100,
       animate: 3000
    });
   });

});

$(function() {
	$('.skillsect').click(function(){
     event.preventDefault();
     $('.chart-off').easyPieChart({
       scaleColor: false,
       lineWidth: 30,
       lineCap: 'butt',
       barColor: '#ff005a',
       trackColor:	"#fff",
       size: 307,
       animate: 3000
    });
   });

});
