describe("Payments test", function() {
    beforeEach(function () {        
        paymentTbody.innerHTML = '';
    });

    it('submitPaymentInfo should add a curPayment object to allPayments, update html and reset input values', function(){
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        expect(allPayments).toEqual(
        {"payment1": {
            "billAmt": "50",
            "tipAmt": "5",
            "tipPercent": 10}
        })
        expect(paymentTbody.childNodes.length).toEqual(1);
        expect(summaryTds[0].innerHTML).toEqual("$50");
        expect(summaryTds[1].innerHTML).toEqual("$5");
        expect(summaryTds[2].innerHTML).toEqual("10%");
    });


    it('createCurPayment should return the payment for a billAmt and tipAmt', function(){
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
        let curPayment = createCurPayment();
        // console.log(curPayment);
        expect(curPayment.billAmt).toEqual("50");
        expect(curPayment.tipAmt).toEqual("5");
        expect(curPayment.tipPercent).toEqual(10);
    });

    it('appendPaymentTable should append a td with the input value', function(){
        let curPayment = {
            "billAmt": "50",
            "tipAmt": "5",
            "tipPercent": 10
        }      
        appendPaymentTable(curPayment)
        expect(paymentTbody.childNodes.length).toEqual(1); 
    });

    it('updateSummary should create table row element and pass to appendTd with calculated sum of all payment', function(){
        allPayments = {
            "payment0": {
                "billAmt": "50",
                "tipAmt": "5",
                "tipPercent": 10
            }      
        };
        updateSummary();
        expect(summaryTds[0].innerHTML).toEqual("$50");
        expect(summaryTds[1].innerHTML).toEqual("$5");
        expect(summaryTds[2].innerHTML).toEqual("10%");
    });

    afterEach(function() {
        allPayments = {};
        billAmtInput.value = '';
        tipAmtInput.value = ''
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});

