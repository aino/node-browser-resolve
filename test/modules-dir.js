var assert = require('assert');
var resolve = require('../');

var fixtures_dir = __dirname + '/fixtures';

test('bower', function(done) {
    resolve('module-a', { filename: fixtures_dir + '/phony.js', modulesDir: 'bower_components' }, function(err, path) {
        assert.ifError(err);
        assert.equal(path, require.resolve('./fixtures/bower_components/module-a/index'));
        done();
    });
});


