	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Llama has excellent sense of sight, smell and hearing. They dedect potential danger!",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Llamas are stubborn. You place an over weight, they wont move an inch.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"Llamas usually spit at each other to solve misunderstandings in the group. At times they spit at humans too",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"Llamas are social, they live in groups.",
	    	name:"Confucius"
	    }
	    

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

