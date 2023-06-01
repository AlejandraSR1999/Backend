const soap = require('soap');
const url = 'http://localhost:8000/calculator?wsdl';

soap.createClient(url, function(err, client) {
  if (err) {
    console.error(err);
  } else {
    const a = { "$value": 10 };
    const b = { "$value": 5 };

    
    client.sum({a: a, b: b}, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`${a.$value} + ${b.$value} = ${result}`);
      }
    });

    
    client.subtract({a: a, b: b}, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`${a.$value} - ${b.$value} = ${result}`);
      }
    });

    
    client.multiply({a: a, b: b}, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`${a.$value} * ${b.$value} = ${result}`);
      }
    });

    
    client.divide({a: a, b: b}, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        console.log(`${a.$value} / ${b.$value} = ${result}`);
      }
    });
  }
});
