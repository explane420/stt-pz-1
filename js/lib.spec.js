describe('Test suite for testing lib.js', () => {
  describe('Test suite for testing sum function', () => {
    it('should return sum of two numbers', () => {
      assert.equal(sum(1, 2), 3);
      assert.equal(sum(-10, 5), -5);
      assert.equal(sum(-10, 10), 0);
    });

    it('should return NaN if one parameter is skipped', () => {
      assert.isNaN(sum(1, undefined));
    });

    it('should convert string to number if input parameters are strings', () => {
      assert.equal(sum('5', '1'), 6);
      assert.equal(sum(10, '1'), 11);
      assert.equal(sum('25', 5), 30);
    });
  });

  describe('Test suite for testing pow function', () => {
    it('should raise x to the n power', () => {
      assert.equal(pow(2, 3), 8);
      assert.equal(pow(5, 0), 1);
      assert.equal(pow(-2, 2), 4);
    });
  });

  describe('Test suite for testing removeByName function', () => {
    it('should remove some element from array', () => {
      const initialArray = ['apple', 'banana', 'cherry'];
      const resultArray = removeByName(initialArray, 'banana');
      assert.deepEqual(resultArray, ['apple', 'cherry']);
    });

    it('should not remove element from array if name not found', () => {
      const initialArray = ['apple', 'banana', 'cherry'];
      const resultArray = removeByName(initialArray, 'orange');
      assert.deepEqual(resultArray, ['apple', 'banana', 'cherry']);
    });
  });
});
