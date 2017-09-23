angular.module('listings').factory('Listings', ['$http',
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('limitless-atoll-26674.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $http.post('limitless-atoll-26674.herokuapp.com/api/listings', listing);
      },

      read: function(id) {
        return $http.get('limitless-atoll-26674.herokuapp.com/api/listings' + id);
      },

      update: function(id, listing) {
        return $http.put('limitless-atoll-26674.herokuapp.com/api/listings' + id, listing);
      },

      delete: function(id) {
        return $http.delete('limitless-atoll-26674.herokuapp.com/api/listings' + id);
      }
    };

    return methods;
  }
]);
