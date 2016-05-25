'use strict';

// ES6 deconstructing in the method signature
makeCowSound({
	animal: 'cow',
	sound: 'mooo'
});

function makeCowSound(_ref) {
	var animal = _ref.animal;
	var sound = _ref.sound;

	console.log('The ' + animal + ' says ' + sound + '!');
}