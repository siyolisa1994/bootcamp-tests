describe('YearsAgo function', function(){
    it('should count the years', function(){
        assert.equal(YearsAgo('1991'),27);
    });
    it('should count how old person which was born 1995', function(){
        assert.deepEqual(YearsAgo('sive'), NaN);

    });
});
