const holopin = require('./src');


holopin('vinitshahdeo').then((x) => console.log(x)).catch((err) => console.log(err));

holopin('vinitshahdeo', (err, res) => {
    console.log(res, err)
});