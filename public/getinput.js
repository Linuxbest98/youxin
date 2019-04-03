function getInput(input){
	if (input.length == 0) {
		return null;
	}
	var result;
	var len = input.length;
	if(len <= 20){
		result = input;
	}else{
		var startStr = input.substring(0,10);
		var endStr = input.substring(len-10,len);
		result = startStr + len +endStr;
	}
	return result;

}