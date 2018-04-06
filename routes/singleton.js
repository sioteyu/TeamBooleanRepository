var _config;
var _configAdmin;
function config(){
  if(_config == null){
    _config = {
        apiKey: 'AIzaSyD_wHMWNXjgp3SGUFODlEespynmWRnqN5o',
        authDomain: 'teambooleaniacademy.firebaseapp.com',
        databaseURL: 'https://teambooleaniacademy.firebaseio.com',
        projectId: 'teambooleaniacademy',
        storageBucket: 'teambooleaniacademy.appspot.com',
        messagingSenderId: '490332136'
      }
    return _config;
  }else{
    return _config;
  }
}
function configAdmin(){
  if (_configAdmin == null) {
    const keyFilename='./serviceKey.json';
    const projectId = 'teambooleaniacademy';
    const bucketName = `${projectId}.appspot.com`;
    const gcs = require('@google-cloud/storage')({
        projectId,
        keyFilename
    });
    _configAdmin = gcs.bucket(bucketName);
    return _configAdmin;
  }else{
    return _configAdmin;
  }
}

module.exports = {
  config:config(),
  configAdmin:configAdmin()
}
