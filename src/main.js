
// ES6 deconstructing in the method signature
makeCowSound({
	animal: 'cow',
	sound: 'mooo'
});

function makeCowSound({animal, sound}){
  console.log('The ' + animal + ' says ' + sound + '!' );
}
