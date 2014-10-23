window.addEventListener("load", function(event) { 


});
function sortByColumnNumber(sortByColumn){
	var tablenode = document.getElementById("the-table-body");
	var tablenodeChildren = tablenode.childNodes;

	var newNodes = [];
	for (i=0; i<tablenodeChildren.length; i++)
	  {
	  	if(isElement(tablenodeChildren[i])){
	  		newNodes.push(tablenodeChildren[i]);
	  	}
	  };

	while(tablenode.firstChild){
		tablenode.removeChild(tablenode.firstChild);
	}

	// Henter ut det som skal sorteres
	var arrayToBeSorted = [[],[],[],[],[]]
	for(i = 0; i<newNodes.length; i++){
		for(j = 0; j<3; j++){
			arrayToBeSorted[i].push(newNodes[i].getElementsByTagName('td')[j].innerHTML);
		}	
	}

	arrayToBeSorted.sort(function(a, b) {
	    var valueA, valueB;

	    valueA = a[sortByColumn - 1]; 
	    valueB = b[sortByColumn - 1];
	    if(typeof valueA == 'string' || valueA instanceof String){ // Check if string
	    	if(valueA.charCodeAt(0) < valueB.charCodeAt(0)){
	    		return -1;
	    	}
	    	else if(valueA.charCodeAt(0) > valueB.charCodeAt(0)){
	    		return 1;
	    	}
	    }else{
		    if (valueA < valueB) {
		        return -1;
		    }
		    else if (valueA > valueB) {
		        return 1;
		    }
	    }
	    return 0;
	});

	// Setter tilbake den sorterte arrayen inn i de nye nodene
	for(i = 0; i<newNodes.length; i++){
		for(j = 0; j<3; j++){
			newNodes[i].getElementsByTagName('td')[j].innerHTML = arrayToBeSorted[i][j];
		}
	}	

	// Legger til de nye nodene i DOM
	for(i = 0; i<newNodes.length; i++){
		tablenode.appendChild(newNodes[i]);
	};
}

function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}