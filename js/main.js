$(document).ready(function()
{
$(window).scroll(function()
     {
       if($(window).scrollTop()>20)
       {
       	$('.navbar').addClass('navbarfixed');
       }
       else
       {
       		$('.navbar').removeClass('navbarfixed');
       }
     });

   
   
});

