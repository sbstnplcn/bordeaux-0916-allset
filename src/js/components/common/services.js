((app) => {
    'use strict'
    app.component("services", {
      bindings:{
        editMode:"<",
        ngModel:"="
      },
        templateUrl: 'js/components/common/services.html'
    })
})(angular.module('app.common'))
