export function validateEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}

export function validateName(name) {
	return name.length;
}

export function validatePhone(phoneNumber) {
	return phoneNumber.length;
}

export function validateMessage(message) {
	return message.length;
}
