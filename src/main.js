
// ES6 deconstructing in the method signature
makeCowSound({
	animal: 'cow',
	sound: 'mooo'
});

var hola = 'hola';

function makeCowSound({animal, sound}){
  console.log('The ' + animal + ' says ' + sound + '!' );
}
