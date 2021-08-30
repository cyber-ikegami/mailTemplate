// テンプレートタイプのチェック(空白/受付/パスワード)
function checkTemplate(){
	const template = document.getElementById("template");
	const str = template.options[template.selectedIndex].value;
	if(str == "null"){
		numberItem.hidden = true;
		document.getElementById("number").value = "";
		passwordItem.hidden = true;
		document.getElementById("password").value = "";
		inputRequiredCheck();
	} else if(str == "reception") {
		numberItem.hidden = false;
		document.getElementById("password").value = "";
		passwordItem.hidden = true;
		inputRequiredCheck();
	} else if(str == "password") {
		passwordItem.hidden = false;
		document.getElementById("number").value = "";
		numberItem.hidden = true;
		inputRequiredCheck();
	}
}

// 入力必須チェック
function inputRequiredCheck() {
	const university = document.getElementById("university").value;
	const name = document.getElementById("name").value;
	const number = document.getElementById("number").value;
	const password = document.getElementById("password").value;
	const determination = document.getElementById("determination");
	let checkFormList = [university, name];
	
	if(numberItem.hidden == false){
		checkFormList.push(number);
	} else if(passwordItem.hidden == false) {
		checkFormList.push(password);
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
	document.getElementById("password").value = "";
	document.getElementById("passwordItem").hidden = true;
	inputRequiredCheck();
}

// 出力処理
function outputResult() {
	const university = document.getElementById("university").value;
	const name = document.getElementById("name").value;
	const number = document.getElementById("number").value;
	const password = document.getElementById("password").value;
	let numberValue = "";
	let passwordValue = "";
	
	if(numberItem.hidden == false){
		numberValue = 
		`
		本件について、案件管理番号：${number}で受け付けました。
		` .replace(/[ \t\r]+/g, "");
	}

	if(passwordItem.hidden == false){
		passwordValue = 
		`
		先程の添付ファイルのパスワードは、以下になります。
		------------------------------
		${password}
		------------------------------
		` .replace(/[ \t\r]+/g, "");
	}
    resultForm.resultTextArea.value=
    `${university})${name}様

    お世話になっております。
    CSC）池上です。
	${numberValue}${passwordValue}
    以上、よろしくお願いいたします。`.replace(/[ \t\r]+/g, "");
}