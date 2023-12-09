describe("Helpers test", function() {
    it('sumPaymentTotal should reuturn the total billAmt', function(){
        allPayments = {
            0: {"billAmt": 10},
            1: {"billAmt": 20},
            2: {"billAmt": 40}
        };
        let total = sumPaymentTotal('billAmt');
        expect(total).toEqual(70);
    });

    it('calculateTipPercent should return the tip percentage', function(){
        let percentage = calculateTipPercent(50, 5);
        expect(percentage).toEqual(10);
    })

    it('appendTd should add a td to a tr', function(){
        let tr = document.createElement('tr');
        appendTd(tr, 'this');
        expect(tr.firstChild.innerText).toEqual('this');
    });

    afterEach(function() {
        allPayments = {};
      });
});

