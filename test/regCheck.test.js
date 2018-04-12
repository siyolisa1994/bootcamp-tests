
describe('regCheck', function(){

    it('should check the registration number for Mphumalanga', function(){
        assert.equal(regCheck('CA746643','CK'),false);
    });
    it('should check the regNumber correctly', function(){

        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
      });
        it('should check  the registration number of Durban', function(){
            assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
          });
          it('should return false if the regNumber is not for Gauteng', function(){

              assert.equal(regCheck('CY189-012', 'CY'),false);
    });
});
