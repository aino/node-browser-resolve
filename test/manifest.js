var assert = require('assert');
var resolve = require('../');

var fixtures_dir = __dirname + '/fixtures';

test('manifest package', function(done) {
    resolve('module-b', { filename: fixtures_dir + '/phony.js', modulesDir: 'bower_components' }, function(err, path) {
        assert.ifError(err);
        assert.equal(path, require.resolve('./fixtures/bower_components/module-b/foo'));
        done();
    });
});

test('manifest bower', function(done) {
    resolve('module-b', { filename: fixtures_dir + '/phony.js', modulesDir: 'bower_components', manifest: 'bower.json' }, function(err, path) {
        assert.ifError(err);
        assert.equal(path, require.resolve('./fixtures/bower_components/module-b/main'));
        done();
    });
});
