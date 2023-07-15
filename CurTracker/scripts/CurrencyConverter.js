const { GetCur } = require('./CurrencyScript');

function ConvertCurrency(amount, toCurrency) {
  return GetCur()
    .then(({
      CurRub, CurEur, CurJpy, CurGbp, CurChf, CurCad
    }) => {
      // Перевод Валюты(Доллар = Выбранная валюта)
      const rubToUsd = 1 / CurRub;
      const eurToUsd = 1 / CurEur;
      const jpyToUsd = 1 / CurJpy;
      const gbpToUsd = 1 / CurGbp;
      const chfToUsd = 1 / CurChf;
      const canToUsd = 1 / CurCad;
      // Перевод Валюты(Доллар = Выбранная валюта)

      let result;

      if (toCurrency === 'RUB') {
        result = amount / rubToUsd;
      }
       else if (toCurrency === 'EUR') {
        result = amount / eurToUsd;
      } 
      else if (toCurrency === 'JPY') {
        result = amount / jpyToUsd;
      }
      else if (toCurrency === 'GBP') {
        result = amount / gbpToUsd;
      }
      else if (toCurrency === 'CHF') {
        result = amount / chfToUsd;
      }
      else if (toCurrency === 'CAN') {
        result = amount / canToUsd;
      }
      else {
        throw new Error('Invalid currency conversion.');
      }

      return result.toFixed(2);
    });
}

module.exports = {
  ConvertCurrency
};
