(function () {
	/* body... */
	'use strict';
	angular.module('App', [])
	.controller('Ctrl', Ctrl);

	function Ctrl () {
		var ctrl = this;

		ctrl.students=[
		{
			name: "Santiago Robayo",
			id: "201216389",
			email: "s.robayo222@uniandes.edu.co",
			twt:"@_Zantler",
			github:"https://github.com/srobayo222",
			img:"https://avatars3.githubusercontent.com/u/13544207?v=3&s=400"

		},
		{
			name:"Maria Camila Remolina Gutiérrez",
			id:"201217379",
			email:"mc.remolina197@uniandes.edu.co",
			twt:"@MCMCLearnsWeb",
			github:"https://github.com/mariacamilaremolinagutierrez",
			img:"https://avatars1.githubusercontent.com/u/3608776?v=3&s=400"
		},
		{
			name:"Santiago Beltrán Caicedo",
			id:"201313263",
			email:"sbeltrancaicedo@gmail.com",
			twt:"@SantGrink",
			github:"https://github.com/sbeltran10",
			img:"https://avatars2.githubusercontent.com/u/8405184?v=3&s=400"
		},
		{
			name:"Jairo Ivan Bernal Acosta",
			id:"201317123",
			email:"jairo612@gmail.com",
			twt:"@jibernal27",
			github:"https://github.com/jibernal27",
			img:"https://avatars0.githubusercontent.com/u/10744050?v=3&s=400"
		},
		{
			name:"José Felipe Quiroga Peláez",
			id:"201424212",
			email:"josefelipeq@gmail.com",
			twt:"@josefelipeq",
			github:"https://github.com/jFluxie",
			img:"https://avatars2.githubusercontent.com/u/8405184?v=3&s=400"
	
		}]
	}
})();