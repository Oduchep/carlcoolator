function checkInput(e) {
	let iKeyCode = e.which ? e.which : e.keyCode;
	if (iKeyCode != 46 && iKeyCode > 31 && iKeyCode != 189 && (iKeyCode < 48 || iKeyCode > 57)) return false;

	return true;
}
