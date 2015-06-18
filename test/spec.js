/* eslint-disable no-unused-expressions */
ES6Promise.polyfill();

describe('chai and plugins', function () {
  it('chai', function () {
    true.should.be.true;
    expect(true).to.be.true;
    assert(true, 'true is true');
  });

  describe('chai-fuzzy', function () {
    it('should', function () {
      return Promise.resolve(true).should.eventually.equal(true);
    });

    it('expect', function () {
      return expect(Promise.resolve(true)).to.eventually.equal(true);
    });

    it('assert', function () {
      return assert.eventually.equal(Promise.resolve(true), true, 'This had better be true, eventually');
    });
  });

});

