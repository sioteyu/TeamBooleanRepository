exports.upload = function(req, res){
  var form = new formidable.IncomingForm();
  var bookRef = ref.child('books');

  bucket.upload('./'+req.files.fileUploaded.path.replace('\\', '/'), function(err, file) {
    var photoName = req.files.fileUploaded.path.split('\\');
    bookRef.push({
      title:req.body.title,
      author:req.body.author,
      description:req.body.description,
      longitude:req.body.longitude,
      latitude:req.body.latitude,
      photo:photoName[1],
      owner:req.session.user
    });
      if(err)
      {
          console.log(err);
          return;
      }
    });

    res.render('profile', {name:req.session.name});

};
exports.logout = function(req, res){
  req.session.destroy();
  res.render('index');
};
