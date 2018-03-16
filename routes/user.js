exports.upload = function(req, res){
  var form = new formidable.IncomingForm();
  var bookRef = ref.child('books');

  bucket.upload('./'+req.files.fileUploaded.path.replace('\\', '/'), function(err, file) {
    var photoName = req.files.fileUploaded.path.split('\\');
    bookRef.push({
      title:req.body.title,
      author:req.body.author,
      description:req.body.description,
      photo:photoName[1]
    });
      if(err)
      {
          console.log(err);
          return;
      }
    });

    res.render('landingPage');

};
exports.logout = function(req, res){
  req.session.destroy();
  res.render('index');
};
