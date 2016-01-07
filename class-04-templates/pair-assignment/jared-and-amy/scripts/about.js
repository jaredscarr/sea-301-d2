var aboutView = {};

aboutView.toHtml = function () {
  var templateScript = $('#about-template').html();
  var template = Handlebars.compile(templateScript);
  var context = {
    'header': 'Welcome to my Blog!',
    'interestList': 'Some of my interests:',
    'interest1': 'Coding',
    'interest2': 'Sharing what I\'ve learned',
    'interest3': 'Hanging out with my family'
  }

  var html = template(context);
  $('#about').append(html);
}

$(document).ready(function() {
  aboutView.toHtml();
});
