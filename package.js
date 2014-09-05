 Package.describe({
  name: 'cfs:tempstore',
  version: '0.0.2',
  summary: 'CollectionFS, temporary storage'
});

Npm.depends({
  'combined-stream': '0.0.4'
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use(['cfs:base-package@0.0.0', 'cfs:file@0.0.0']);

  api.use('cfs:filesystem@0.0.0', { weak: true });
  api.use('cfs:gridfs@0.0.0', { weak: true });

  api.add_files([
    'tempStore.js'
  ], 'server');
});

// Package.on_test(function (api) {
//   api.use('collectionfs');
//   api.use('test-helpers', 'server');
//   api.use(['tinytest', 'underscore', 'ejson', 'ordered-dict',
//            'random', 'deps']);

//   api.add_files('tests/server-tests.js', 'server');
// });
