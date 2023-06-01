const soap = require('soap');

function getParams({ a, b }) {
  const [aValue, bValue] = [parseInt(a['$value']), parseInt(b['$value'])];
  if (Number.isNaN(aValue) || Number.isNaN(bValue)) {
    throw new Error("Invalid input. Please enter integer values for 'a' and 'b'.");
  }
  return { a: aValue, b: bValue };
}

const calculatorService = {
  CalculatorService: {
    CalculatorPort: {
      sum: function (args) {
        const { a, b } = getParams(args);
        return { sumResult: a + b };
      },
      subtract: function (args) {
        const { a, b } = getParams(args);
        return { subtractResult: a - b };
      },
      multiply: function (args) {
        const { a, b } = getParams(args);
        return { multiplyResult: a * b };
      },
      divide: function (args) {
        const { a, b } = getParams(args);
        if (b === 0) {
          throw new Error("Invalid input. Division by zero not allowed.");
        } else {
          return { divideResult: a / b };
        }
      }
    }
  }
};

const xml = require('fs').readFileSync('calculator.wsdl', 'utf8');
const server = require('http').createServer(function (request, response) {
  response.end('404: Not Found: ' + request.url);
});
server.listen(8000);
soap.listen(server, '/calculator', calculatorService, xml);
