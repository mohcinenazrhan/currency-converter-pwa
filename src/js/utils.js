/**
 * 
 * @param {Object} obj - object to turn into an iterable
 */
export function* iterObj(obj = {}) {
	for (let prop of Object.keys(obj)){
		if(obj.hasOwnProperty(prop)){
			yield obj[prop];
		}
	}
}


/**
 * handles errors of fetch reponse
 * @param {Object} response - response object to handle 
 */
export const handleErrors = (response) => {
	if (!response.ok) throw Error(response.statusText);
	return response.json();
}

/**
 * Insert newNode after referenceNode
 * @param {Object} newNode - Dom node to insert 
 * @param {*} referenceNode - Dom node to insert after
 */
export const insertAfter = (newNode, referenceNode) => {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}