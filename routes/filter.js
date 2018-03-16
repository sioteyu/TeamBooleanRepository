exports.filterAll = function(query) {
  var natural = require('natural');
  var classifier = new natural.BayesClassifier();
  var types = ['books', 'articles'];

  classifier.addDocument('best top', 'First');
  for (var i = 0; i < types.length; i++) {
    classifier.addDocument('best selling '+types[i]+' top selling ' + types[i], 'type1 ' + types[i]);
    classifier.addDocument('top 10 '+types[i]+' best 10 ' + types[i], 'type2 ' + types[i]);
  }
  classifier.train();

  return classifier.classify(query);
}
