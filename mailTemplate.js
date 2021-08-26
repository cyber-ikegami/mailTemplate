function InputCheck() {
	var flag = 0;
	var daigaku = document.getElementById("daigaku");
	var name = document.getElementById("name");

	if(daigaku.value== ""){
		flag = 1;
	}
	else if(name.value == ""){
		flag = 1;
	}

	if(flag){
		document.getElementById('kettei').disabled=true;
	} else {
	   	document.getElementById('kettei').disabled=false;
	}	
}

function Reset(){
	document.getElementById("daigaku").value = "";
	document.getElementById("name").value = "";
	InputCheck();
}

function OnClickButton() {
    resultForm.resultTextArea.value=
    document.getElementById("daigaku").value + "）" + document.getElementById("name").value + 
    "様\n\nお世話になっております。\nCSC）池上です。\n\n以上、よろしくお願いいたします。";
}