'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-07-10T17:01:17.194Z',
    '2023-07-11T23:36:17.929Z',
    '2023-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-07-10T14:43:26.374Z',
    '2023-07-11T18:49:59.371Z',
    '2023-07-12T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Display Movements

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  //console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'yestarday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();

    return Intl.DateTimeFormat(locale).format(date);
  }
};

//numbers formating

const formatCur = function (value, locale, currency) {
  const options = {
    style: 'currency',
    currency: currency,
  };

  return new Intl.NumberFormat(locale, options).format(value);
};

///////////////

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
  </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displaying balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//Total Income in a bank
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(incomes);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  //totol outcome or withdrawl
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(outcome);
  labelSumOut.textContent = formatCur(
    Math.abs(outcome),
    acc.locale,
    acc.currency
  );

  //intrest on each Deposite
  const intrests = acc.movements
    .filter(deposit => deposit > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(intrest => intrest > 1)
    .reduce((acc, intrest) => acc + intrest);
  labelSumInterest.textContent = formatCur(intrests, acc.locale, acc.currency);
  // console.log(intrests);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(names => names[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display Movements
  displayMovements(acc);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
};
//setting time out function
const startLogOutTimer = function () {
  const tick = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${minutes}:${seconds}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'log in to get started';
      containerApp.style.opacity = 0;
    } // Decrese  1s
    time--;
  };

  //set time to 5 min
  let time = 1000;

  //call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

let currentAccount, timer;
//Fake it until you make it.
// currentAccount = account1;
// //startLogOutTimer();
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//Login Current Accounts
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and Message
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;

    // const now = new Date();
    // const month = now.getMonth();
    // const day = now.getDate();
    // const year = now.getFullYear();
    // const hours = now.getHours();
    // const min = now.getMinutes();
    // labelDate.textContent = `${day}/${month}/${year}  ${hours}:${min}`;

    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      //weekday: 'long',
    };

    const locale = navigator.language;
    console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Add transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
    //Update UI
    updateUI(currentAccount);
  }
});

//loan Amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(acc => acc >= loanAmount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(loanAmount);
      // Add lone Date
      currentAccount.movementsDates.push(new Date().toISOString());
      //update UI
      updateUI(currentAccount);
      //reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
  // console.log(loanAmount);
});

//Account closing
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === inputCloseUsername.value
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  //inputCloseUsername.value = inputClosePin.value = '';
});
let shorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !shorted);
  shorted = !shorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

///////////////////////////////////////
/*
/const accArr = accounts.flatMap(mov => mov.movements);
console.log(accArr);

labelBalance.addEventListener('click', function (e) {
  const arrnodeUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log(arrnodeUI);

  const valNode = arrnodeUI.map(el => el.textContent.replace('€', ''));
});
*/
/*
const now = new Date();
console.log(now);

console.log(new Date('Tue Jul 11 2023 19:31:41 '));
console.log(new Date('December 24, 2015'));
console.log(new Date('May 1,2000'));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
*/

/*const future = new Date(2037, 10, 19, 15, 23, 5);
console.log(future);
console.log(future.getFullYear());
*/
/*labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    const type = row
      .querySelector('.movements__type')
      .classList.contains('movements__type--deposit')
      ? 'deposit'
      : 'withdrawal';

    if (type === 'deposit') {
      row.style.backgroundColor = 'green';
    } else if (type === 'withdrawal') {
      row.style.backgroundColor = 'red';
    }
  });
});
*/

/*labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (rows, i) {
    const type = rows
      .querySelector('.movements__type')
      .classList.contains('movements__type--deposit')
      ? 'deposit'
      : 'withdrawal';
    console.log(type);

    if (type === 'deposit') {
      rows.style.backgroundColor = 'lightgreen';
    } else {
      rows.style.backgroundColor = 'red';
    }
  });
});
*/
//const future = new Date(2037, 10, 19, 15, 23);
//console.log(+future);

/*const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs(date1 - date2) / (1000 * 24 * 60 * 60));

const day1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8));

console.log(day1);
*/

/*const name1 = 'jumcamel';
const myObj = {
  name: 'soup',
  getName: function () {
    console.log(this.name);
  },
  getTaste: () => console.log(this.name),
};

myObj.getName();
myObj.getTaste();
*/

/*const num = 3884764.23;

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};

console.log('US:', new Intl.NumberFormat('en-US', options).format(num));

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

/*const time = 3000;
setTimeout(
  () => console.log(`Your pizza is ready after ${time / 1000}sec`),
  time
);
*/
/*console.log('---------------------------------------');

console.log(1);

setTimeout(() => console.log(2), 2000);

setTimeout(() => console.log(3), 0);
console.log(4);
console.log(5);

const ingredients = ['olive', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

const some1 = ingredients.some(mov => mov === 'chilli');

if (some1) clearTimeout(pizzaTimer);
*/
/*setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

*/
/*setInterval(function () {
  const now = new Date();
  const count = new Intl.TimeFormat('en-US').format(now);
  console.log(count.getSeconds());
}, 1000);
*/
/*let i = 10;
setInterval(function () {
  i--;
  console.log(i);
}, 1000);
*/
/*(for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 2000);
}
console.log(i);
*/

/*let person = {
  name: 'ram sahu',
  age: 23,
  greet() {
    console.log(`hello ${this.name}`);
  },
};

let newPerson = person;
person = null;
newPerson.greet();

*/
