function isCreditCardValid(inp) {//debugger;


    if (inp.length === 16) {
        if (inp[15] % 2 != 0) return {valid: false, number: inp, error: 'last digit is not even'}

        if (/[\d]{16}/.test(inp)) {

            if (inp.split("").reduce(function (sum, current) {
                    return +sum + current;
                }, 0) < 17)
                return {valid: false, number: inp, error: 'sum of numbers <16!'}

            var a = inp.split("");
            for (var i = 0; i <= a.length; i++) {
                for (var j = 1; j <= a.length; j++) {
                    if (a[j] === a[i]) {
                        a.splice(i, i); // удаляем одинаковый элемент
                    }
                }
            }

            if (a.length === 0)
                return {valid: false, number: inp, error: 'all nambers are the same!'};
            if(validLuhn(inp))
                return {valid: true, number: inp};    //true
            else return {valid: false, number: inp, error: 'Luhn error'};

        }
        else return {valid: false, number: inp, error: 'there are NaN in the string'};
    }
    return {valid: false, number: inp, error: 'length != 16'};
}

function validLuhn(cardNumber) {
    if (cardNumber.length%2!=0) cardNumber="0"+cardNumber;
    var K, Sum=0;
    for (var i=0; i<cardNumber.length; i+=2)
        Sum+=((K=cardNumber.charAt(i)*2)>9?K-9:K)+Number(cardNumber.charAt(i+1));
    return Sum%10==0;
}

var calculateButton = document.getElementById('isCreditCardValid'),
    userInput = document.getElementById('userInput'),
    result = document.getElementById('result');
calculateButton.addEventListener('click', function () {
    result.innerHTML = isCreditCardValid(userInput.value);
});