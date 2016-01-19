(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    var qs = '?per_page=100&sort=updated';

    $.ajax({
      url: 'https://api.github.com/users/jaredscarr/repos' + '?per_page=5&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + GITHUB_TOKEN},
      success: function(data, message, xhr) {
              console.log(data);
              repos.all = data;
              callback();
         }
    });

    // $.get('/github/users/jaredscarr/repos' + qs)
    // .done(function(data, message, xhr) {
    //   console.log('my data - ' + data); //log it out so we can see it
    //   repos.all = data; //creates the array of objects from the data and stores it in repos.all array
    // })
    // .done(callback);

    // DONE: Model method that filters the full collection for repos with a particular attribute.
    // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
    repos.with = function(attr) { //filter by
      return repos.all.filter(function(repo) {
        return repo[attr];
      });
    }
  };

  module.repos = repos; //exporting repos object to the window object
})(window);
