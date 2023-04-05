const Utils = {
  calculateNumber(type, a, b) {
    if (!type) throw new TypeError('missing type argument');
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
      case 'SUBSTRACT':
        return Math.round(a) - Math.round(b);
      case 'DIVIDE':
        if (Math.round(b) === 0) return 'Error';
        return Math.round(a) / Math.round(b);
      default:
        break;
    }
  }
};

module.exports = Utils;
