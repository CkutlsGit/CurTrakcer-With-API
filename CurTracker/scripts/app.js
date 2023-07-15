const express = require('express');
const path = require('path');
const { GetCur } = require('./CurrencyScript');
const { ConvertCurrency } = require('./CurrencyConverter');

const app = express();
app.use(express.urlencoded({ extended: true })); // Позволяет работать Конвертации, парся данные
// Подключение стилей
app.use('/styles', express.static(path.join(__dirname, '../styles')));
app.use('/scripts', express.static(path.join(__dirname, '../scripts')));
// Подключение стилей

app.get('/', (req, res) => {
  const mainPage = path.join(__dirname, '../templates/html/main.html');
  res.sendFile(mainPage);
});

app.get('/curse', (req, res) => {
  GetCur()
    .then(({
      CurRub, CurEur, CurJpy, CurGbp, CurChf, CurCad
    }) => {
      const cursePage = path.join(__dirname, '../templates/ejs/cursepage.ejs');
      res.render(cursePage, {
        CurRub: CurRub, 
        CurEur: CurEur, 
        CurJpy: CurJpy, 
        CurGbp: CurGbp, 
        CurChf: CurChf, 
        CurCad: CurCad
        // Получив данные, происходит передача для страницы с Курсами
      });
    })
    .catch(error => {
      console.log('Ошибка:', error);
      res.status(500).send('Error 500!');
    });
});

app.get('/convert', (req, res) => {
  const convertPage = path.join(__dirname, '../templates/html/convertator.html');
  res.sendFile(convertPage);
});

app.post('/convert', (req, res) => {
  // Получение тел(формы) и данных с них
  const amount = parseFloat(req.body.amount);
  const toCurrency = req.body.to;
  // Получение тел(формы) и данных с них

  ConvertCurrency(amount, toCurrency)
    .then(result => {
      const convertResultPage = path.join(__dirname, '../templates/ejs/convertresult.ejs');
      res.render(convertResultPage, { result: result, toCurrency: toCurrency, amount: amount });
      // Отправка результата, валюты и кол-во долларов на страницу Результата
    })
    .catch(error => {
      console.log('Ошибка:', error);
      res.status(500).send('Error 500!');
    });
});

app.listen(3000, () => {
  console.log('Сервер запущен - http://localhost:3000');
});
