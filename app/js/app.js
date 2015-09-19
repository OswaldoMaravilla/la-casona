'use strict';

import angular from "angular";

var app = angular.module('laCasona', [require('angular-route')]);
app.factory('dataFactory', function($http, $routeParams){
	var factory = {};
	factory.getData = function (){
		return $http.get('./../data/data.json');
	}
})
.directive('ngHeader', function(){
	return {
		restrict: "E",
		templateUrl: "./../shared/header/header.html"
	};
})
.directive('ngFooter', function(){
	return {
		restrict: "E",
		templateUrl: "./../shared/footer/footer.html"
	};
})
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './../partials/homepage/homepage.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});