Package.describe({
  summary: "Chat.JS Meteor Integration"
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('chatjs');
  api.add_files(path.join(asset_path, 'css', 'jquery.chatjs.css'), 'client');
  
  api.add_files(path.join(asset_path, 'js', 'jquery.autosize..js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.chatjs.js'), 'client');

});
