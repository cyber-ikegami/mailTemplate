function OnClickButton() {
	var flag = 0;

	if(document.getElementById("daigaku").value== ""){
		flag = 1;
	}
	else if(document.getElementById("name").value == ""){
		flag = 1;
	}

	if(flag){
		window.alert('必須項目に未入力がありました'); 
	}
	else{
    resultForm.resultTextArea.value=
    document.getElementById("daigaku").value + "）" + document.getElementById("name").value + 
    "様\n\nお世話になっております。\nCSC）池上です。\n\n以上、よろしくお願いいたします。";
	}
}