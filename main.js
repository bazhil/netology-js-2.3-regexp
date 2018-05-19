//Домашнее задание к лекции 2.3 «Регулярные выражения»
'use strict';

//task 1
console.log('task 1');
let codes = [
	'Madam, I’m Adam',
	'A man, a plan, a canal. Panama',
	'----<-------Eve------->-----',
	'[__777-x-44-x-777__]',
	'1234564321',
	'Olson in Oslo',
];

function checkCoupon(code) {
	let result = code.toLowerCase().replace(/\W/g, '');
	if (result.length >= 10) {
		return true;
	}
}

for (let code of codes) {
	let result = checkCoupon(code) ? 'подходит' : 'не подходит';
	console.log(`Код «${code}» ${result}`);
}

//task 2
console.log('task 2');
function stripTags(text) {
	return text.replace(/<.*?>/g, '');
}

const texts = [
	'<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
	'<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
];

for (let text of texts) {
	console.log(stripTags(text));
}

//task 3
const fields = [
	{ name: 'name', rule: /^[a-z ]{5,}$/i },
	{ name: 'email', rule: 'email' },
	{ name: 'phone', rule: 'phone' },
];

const forms = [
	{ name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
	{ name: 'III', email: 'ivan@test', phone: '11111' },
];

console.log('task 3');
const emailRegExp = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
const phoneRegExp = /(?:\+|\d)[\d\-\(\) ]{9,}\d/;

function validate(form, fields) {
	for (let i = 0; i <fields.length; i++) {
		if (typeof(fields[1].rule) === 'string'){
      fields[1].rule = emailRegExp;
    }

    if (typeof(fields[2].rule) === 'string'){
      fields[2].rule = phoneRegExp;
    }
    
    if (fields[0].rule.test(form.name) === true && fields[1].rule.test(form.email) === true && fields[2].rule.test(form.phone) === true) {
      return true;
		} else {
      return false;
    }
	} 
}

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}

