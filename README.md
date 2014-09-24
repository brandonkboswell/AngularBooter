#Angular Booter
By **[Brandon Boswell](http://brandonkboswell.com)**

##What is Angular Booter?
Angular Booter is simple javascript function *(a convention really)* that makes it easy to use Angular in existing sites without having to move to a Single Page Application. The idea is to be able to sprinkle in Angular into your existing sites where it makes the most sense to have App-like functionality.

##How can I use it?
1. Import the Angular Booter Javascript file into the top of your Layout

	```
	<script src="angularBooter.js"></script>
	```
2. Create an App object by generating a new instance of angularBooter.

	 ```
	<script>
      myApp = new AngularBooter('myApp'); // <-- Pass in what you want to call your ng-app.
    </script>
    ```
3. Register any Configuration, Controllers, Directives, Dependencies, Filters, Services, or anything else you can register with Angular with your instance of Angular Booter.

	```
	<script>
      myApp.controllers.titleController = function($scope) {
        $scope.message = 'Angular Is Alive!';
      }
    </script>
	```
4. At the bottom of your layout call the boot method to kick off Angular!

	```
	<script>
      myApp.boot();
    </script>
	```

<br>

##Register Controllers
angularBooter.controllers is just a javascript object, so to register a controller with Angular Booter call:

```
myApp.controllers.whateverYouWantToCallYourController = function(){
	//This is just a standard Angular controller function;
}
```
##Register Configuration
angularBooter.config is just a javascript array, so to register a Configuration Setting with Angular Booter just append to the array:

```
myApp.config.push([function() {
  console.log('config 2');
}]);
```

##Register Directives
angularBooter.directives is just a javascript object, so to register a directive with Angular Booter call:

```
myApp.directives.myDirective = [function() {
  return function(scope, element, attrs){
   //Do Awesome Directive Stuff As Usual
  };
}];
```

##Register Dependencies
angularBooter.dependencies is just a javascript array, so to register a Dependency with Angular Booter just append to the array:

```
myApp.dependencies.push('ngResource');
```


##Register Filters
angularBooter.filters is just a javascript object, so to register a filter with Angular Booter call:

```
myApp.filters.myFilter = [(function(){
  return function(input, attribute) {
     //Do Awesome Filter Stuff As Usual
  };
})];
```

##Register Services

angularBooter.services is just a javascript object, so to register a service with Angular Booter call:

```
myApp.services.myService = [function () {
  return function() {
    //Do Awesome Service Stuff As Usual
  };
}];
```
