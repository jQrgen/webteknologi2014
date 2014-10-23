window.addEventListener("load", function(event) { 
	var tablenode = document.getElementById("the-table-body");
	var tablenodeChildren = tablenode.childNodes;

	var sortByColumn = 1;

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
	var arrayToBeSorted = []
	for(i = 0; i<newNodes.length; i++){
		arrayToBeSorted.push(newNodes[i].getElementsByTagName('td')[sortByColumn-1]);
	}

	// tester litt FORTSETT HER, HER MÅ JEG SORTERE KODEN
	arrayToBeSorted[2] = document.createElement("TD");
	var text = document.createTextNode("Y");
	arrayToBeSorted[2].appendChild(text)


	// Setter tilbake den sorterte arrayen inn i de nye nodene
	for(i = 0; i<newNodes.length; i++){
		newNodes[i].replaceChild(arrayToBeSorted[i], newNodes[i].getElementsByTagName('td')[sortByColumn-1]);
		console.log(newNodes[i].getElementsByTagName('td')[sortByColumn-1]);
	}	

	// Legger til de nye nodene i DOM
	for(i = 0; i<newNodes.length; i++){
		tablenode.appendChild(newNodes[i]);
	};

});

function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
);
}