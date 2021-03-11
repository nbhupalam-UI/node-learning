const calculateTotalWithTip = (total, tipPercent = 0.2) => {
  const tip = total * tipPercent;
  return total + tip;
};

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) / 1.8;
};

const celsiusToFahrenheit = (temp) => {
  return temp * 1.8 + 32;
};

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers must be non-negative");
      }

      resolve(a + b);
    }, 1000);
  });
};

// console.log(calculateTotalWithTip(100, 0.1));

module.exports = {
  calculateTotalWithTip,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  add,
};
