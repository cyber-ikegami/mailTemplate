// テンプレートタイプのチェック(空白/受付/パスワード通知)
function checkTemplate(){
	const template = document.getElementById("template");
	const str = template.options[template.selectedIndex].value;

	switch(str){
		case "null":
			numberItem.hidden = true;
			passwordItem.hidden = true;
			document.getElementById("number").value = "";
			document.getElementById("password").value = "";
			inputRequiredCheck();
			break;
		case "reception":
			numberItem.hidden = false;
			passwordItem.hidden = true;
			document.getElementById("password").value = "";
			inputRequiredCheck();
			break;
		case "password":
			passwordItem.hidden = false;
			numberItem.hidden = true;
			document.getElementById("number").value = "";
			inputRequiredCheck();
			break;
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
	
	if(!numberItem.hidden){
		checkFormList.push(number);
	} else if(!passwordItem.hidden) {
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

// 値の取得(案件管理番号/パスワード)
function getOutputValue(){	
	let numberValue = "";
	let passwordValue = "";

	if(!numberItem.hidden){
		const number = document.getElementById("number").value;
		numberValue = 
		`
		本件について、案件管理番号：${number}で受け付けました。
		` .replace(/[ \t\r]+/g, "");
	}
	
	if(!passwordItem.hidden){
		const password = document.getElementById("password").value;
		passwordValue = 
		`
		先程の添付ファイルのパスワードは、以下になります。
		------------------------------
		${password}
		------------------------------
		` .replace(/[ \t\r]+/g, "");
	}

	return{
		number: numberValue,
		password: passwordValue
	};
}

// 出力処理
function outputResult() {
	const university = document.getElementById("university").value;
	const name = document.getElementById("name").value;
	const {number, password} = getOutputValue();

    resultForm.resultTextArea.value=
    `${university})${name}様

    お世話になっております。
    CSC）池上です。
	${number}${password}
    以上、よろしくお願いいたします。`.replace(/[ \t\r]+/g, "");
}