

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	Nrlocuri: [
	'seat 1',
	'seat 2',
	'seat 3',
	'seat 4'
	],
	turnOn: function ()
	{
		this.isTurnedOn =true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function(On){
		console.log("turn car "+On);
		if(On == true){
			this.isTurnedOn = true;
		}
		else{
			this.isTurnedOn = false;
		}
	},
	name: function(name) {
	alert('My name is: '+name);
	}
};

console.log('hello friends!');	