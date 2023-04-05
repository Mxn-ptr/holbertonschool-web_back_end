const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Result of payment is the same as the function', () => {
    const functionSpy = sinon.spy(utils, 'calculateNumber');
    const apiResult = sendPaymentRequestToApi(100, 20);
    
    expect(functionSpy.calledOnceWith('SUM', 100, 20)).to.equal(true);
    expect(utils.calculateNumber('SUM', 100, 20)).to.equal(apiResult);
    
    functionSpy.restore();
  });
});
