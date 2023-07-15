function GetCur() {
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

    return new Promise((resolve, reject) => {
        import('node-fetch') // Так называемый динамический импорт
            .then(fetch => fetch.default(apiUrl))
            .then(response => response.json())
            .then(data => {
                // Получение данных из JSON
                const CurRub = data.rates.RUB;
                const CurEur = data.rates.EUR;
                const CurJpy = data.rates.JPY;
                const CurGbp = data.rates.GBP;
                const CurChf = data.rates.CHF;
                const CurCad = data.rates.CAD;
                // Получение данных из JSON

                resolve({ 
                    CurRub: CurRub.toFixed(2), 
                    CurEur: CurEur.toFixed(2), 
                    CurJpy: CurJpy.toFixed(2), 
                    CurGbp: CurGbp.toFixed(2), 
                    CurChf: CurChf.toFixed(2), 
                    CurCad: CurCad.toFixed(2)
                    // Отправка данных/переменных с ограниченными цифрами(то есть после точки могут быть только два числа)
                 });
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports = {
    GetCur
};
