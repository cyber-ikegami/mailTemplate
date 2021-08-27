function InputRequiredCheck() {
	let flag = 0;
	const university = document.getElementById("university");
	const name = document.getElementById("name");
	const determination = document.getElementById('determination');

	if(university.value== ""){
		flag = 1;
	}
	else if(name.value == ""){
		flag = 1;
	}
		determination.disabled=flag;
}

function OnClickResetButton(){
	document.getElementById("university").value = "";
	document.getElementById("name").value = "";
	InputRequiredCheck();
}

function OnClickButton() {
    resultForm.resultTextArea.value=
    `${document.getElementById("university").value})${document.getElementById("name").value}様

    お世話になっております。
    CSC）池上です。
	
    以上、よろしくお願いいたします。`.replace(/[ \t\r]+/g, "");
}