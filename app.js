const privateKey = require('fs').readFileSync("private.key");
const Nexmo = require("nexmo");
const nexmo = new Nexmo({
    apiKey: "d481802a",
    apiSecret: "M4UAROJEgY3wAf4U",
    applicationId: "19e6e7d6-9171-4655-a58a-8a371fb4b5c0",
    privateKey: privateKey
});

nexmo.calls.create({
    to: [{
        type: 'phone',
        number: process.argv[2]
    }],
    from: {
        type: 'phone',
        number: "13603268359"
    },
    answer_url: ['https://johnjbarrett22.github.io/t2s.json']
    }, (err, res) =>{
    if(err) { console.error(err) ; }
    else { console.log(res); }
    });
    