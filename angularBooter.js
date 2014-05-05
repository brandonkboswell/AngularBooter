AngularBooter = function(appName) {
  return {
    config:       [],
    controllers:  {},
    directives:   {},
    dependencies: [],
    filters:      {},
    services:     {},
    appName:      appName ? appName : 'myApp',
    boot: function() {
      var thiz = this;

      //Create The App Module and Inject Any Dependencies
      angular.module(this.appName, this.dependencies);

      console.log('Booted Dependencies', this.dependencies);

      //Instantiate All Of Our Registered Services
      angular.forEach(this.services, function (serviceFunction, serviceName) {
        angular.module(thiz.appName).factory(serviceName, serviceFunction);
      });

      console.log('Booted Services', this.services);

      //Instantiate our Registered Directives and Controllers
      angular.module(this.appName)
        .directive(this.directives)
        .controller(this.controllers);

      console.log('Booted Directives', this.directives);
      console.log('Booted Controllers', this.controllers);

      angular.forEach(this.config, function (c) {
        angular.module(thiz.appName).config(c);
      });

      console.log('Booted Configs', this.config);

      //Instantiate our Registered Filters
      angular.forEach(this.filters, function (filterFunction, filterName) {
        angular.module(thiz.appName).filter(filterName, filterFunction);
      });

      console.log('Booted Filters', this.filters);
    }
  };
}
