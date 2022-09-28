$(document).ready(function(){
$('table').bind("click", function(e) {
$(e.target).closest("tr").toggleClass("highlight");
});    
});