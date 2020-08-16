const currencyEle_one=document.getElementById('currency-one');
const currencyEle_two=document.getElementById('currency-two');
const swap=document.getElementById('swap');
const amount_one=document.getElementById('amount-one');
const amount_two=document.getElementById('amount-two');
const Rate=document.getElementById('Rate');

function calculate()
{
  const currency_one=currencyEle_one.value;
  const currency_two=currencyEle_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`).then(api => api.json()).
  then(data => {
    const rate=data.rates[currency_two];
    Rate.innerText=`1 ${currency_one} = ${rate} ${currency_two}`;
    amount_two.value=(rate* amount_one.value).toFixed(2);
    
  })
}
swap.addEventListener('click',() => {
  const temp=currencyEle_one.value;
  currencyEle_one.value=currencyEle_two.value;
  currencyEle_two.value=temp;
  calculate();
})
currencyEle_one.addEventListener('change',calculate);
currencyEle_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);
 calculate();