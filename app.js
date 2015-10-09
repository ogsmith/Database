/* use strict */
var app = angular.module("dataGrab", []);

app.service("appService", function ($http, $q)
{
	var deferred = $q.defer();
	$http.get('resources/json/Data1.json').then(function (data)
	{
		deferred.resolve(data);
	});

	this.getData = function ()
	{
		return deferred.promise;
	}
})

.controller("dataCtrl", function ($scope, appService)
{
	var promise = appService.getData();
	promise.then(function (data)
	{
		$scope.players = data.data;
		console.log($scope.players);
	});
})