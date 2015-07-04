/*$(function() {
	function buildCat() {
		var catName = "J.R.R. TolKitten";
		function catFactory() {
			
			alert(catName);
		}
		catFactory();
	}
	
	$('#buildcat').click(function() {
		buildCat();
		
	});
	
});*/

$(function() {
	function buildCat() {
		var catName = "Catrick Stewart";
		function catFactory() {
			alert(catName);
		}
		return catFactory;
	}
	$('#buildcat').click(function() {
		var myNewCat = buildCat();
		
		myNewCat();
		
	});
	
});