const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('Result of payment is the same as the function', () => {
    const functionSpy = sinon.spy(Utils, 'calculateNumber');
    const apiResult = sendPaymentRequestToApi(100, 20);
    
    expect(functionSpy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiResult);
    
    functionSpy.restore();
  });
});
