(function () {
	/* IIFE*/
	console.log('hola')
	function bubbleSort (array) {
		var temp;
		for (var i = 0; i < array.length -1; i++) {
			for (var j = 1; j < array.length -i; j++) {
				if(array[j-1]> array[j]){
					temp=array[j-1];
					array[j-1]=array[j];
					array[j]=temp;
				}
			}
		}
		return array;
	}

	function filter (array) {
		for (var i = 0; i < array.length; i++) {
			if(true)
				return array[i];
		}
		return 'Not found';
	}
	function sums (array) {
		var total=0;
		for (var i = 0; i < array.length; i++) {
			total+=parseInt(array[i]);
		}
		return total;
	}
	var array = [5, 4, 3, 2, 1];
	ob={};
	var obj= ['wfwf', ob, 1];
	var obj2=['sfsf','sfsf','sfs'];
	console.log('Array', array);
	console.log('Sums: '+ sums(array));
	console.log('Sort', bubbleSort(array));
	console.log('Object Array', obj);
})();