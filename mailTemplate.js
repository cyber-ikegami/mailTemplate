// テンプレートタイプのチェック(空白/受付)
function checkTemplate(){
	const template = document.getElementById("template");
	const str = template.options[template.selectedIndex].value;
	if(str == "null"){
		numberItem.hidden = true;
		document.getElementById("number").value = "";
		inputRequiredCheck();
	} else if(str == "reception"){
		numberItem.hidden = false;
		inputRequiredCheck();
	}
}

// 入力必須チェック
function inputRequiredCheck() {
	const university = document.getElementById("university").value;
	const name = document.getElementById("name").value;
	const number = document.getElementById("number").value;
	const determination = document.getElementById("determination");
	let checkFormList = [university, name];
	
	if(numberItem.hidden == false){
		checkFormList.push(number);
	}
	
	determination.disabled = (checkFormList.includes(""));
}

// リセット処理
function resetForm(){
	document.getElementById("template").value = "";
	document.getElementById("university").value = "";
	document.getElementById("name").value = "";
	document.getElementById("number").value = "";
	document.getElementById("numberItem").hidden = true;
	inputRequiredCheck();
}

// 出力処理
function outputResult() {
	const university = document.getElementById("university").value;
	const name = document.getElementById("name").value;
	const number = document.getElementById("number").value;
	let numberValue = "";
	
	if(numberItem.hidden == false){
		numberValue = 
		`
		本件について、案件管理番号：${number}で受け付けました。
		` .replace(/[ \t\r]+/g, "");
	}

    resultForm.resultTextArea.value=
    `${university})${name}様

    お世話になっております。
    CSC）池上です。
	${numberValue}
    以上、よろしくお願いいたします。`.replace(/[ \t\r]+/g, "");
}