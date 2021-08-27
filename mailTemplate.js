function inputRequiredCheck() {
	let flag = 0;
	const university = document.getElementById("university");
	const name = document.getElementById("name");
	const determination = document.getElementById("determination");

	if(university.value== ""){
		flag = 1;
	}
	else if(name.value == ""){
		flag = 1;
	}
		determination.disabled=flag;
}

function resetForm(){
	document.getElementById("university").value = "";
	document.getElementById("name").value = "";
	inputRequiredCheck();
}

function outputResult() {
    resultForm.resultTextArea.value=
    `${document.getElementById("university").value})${document.getElementById("name").value}様

    お世話になっております。
    CSC）池上です。
	
    以上、よろしくお願いいたします。`.replace(/[ \t\r]+/g, "");
}