var prettyjson = require('prettyjson'),
        StompClient = require('stomp-client').StompClient;

const email = require('psswd.js').email;
const password =  require('psswd.js').password;

var destination = '/topic/TD_MC_EM_SIG_AREA',
        client = new StompClient('datafeeds.networkrail.co.uk', 61618, email, password, '1.0');

let data = [ { SF_MSG:
         { time: '1603204816000',
                    area_id: 'DY',
                    address: '1D',
                    msg_type: 'SF',
                    data: '00' } },
      { SF_MSG:
               { time: '1603204816000',
                          area_id: 'DY',
                          address: '48',
                          msg_type: 'SF',
                          data: '08' } },
      { CB_MSG:
               { time: '1603204817000',
                          area_id: 'LR',
                          msg_type: 'CB',
                          from: '0320',
                          descr: '0M67' } },
      { CA_MSG:
               { to: '4847',
                          time: '1603204818000',
                          area_id: 'TN',
                          msg_type: 'CA',
                          from: '4845',
                          descr: '1F40' } },
      { SF_MSG:
               { time: '1603204818000',
                          area_id: 'NE',
                          address: '2D',
                          msg_type: 'SF',
                          data: '00' } },
      { CA_MSG:
               { to: '0329',
                          time: '1603204818000',
                          area_id: 'WH',
                          msg_type: 'CA',
                          from: '0327',
                          descr: '9T32' } },
      { SF_MSG:
               { time: '1603204819000',
                          area_id: 'NM',
                          address: '03',
                          msg_type: 'SF',
                          data: '84' } },
      { SF_MSG:
               { time: '1603204822000',
                          area_id: 'TN',
                          address: '05',
                          msg_type: 'SF',
                          data: 'C7' } },
      { CA_MSG:
               { to: '0344',
                          time: '1603204822000',
                          area_id: 'WH',
                          msg_type: 'CA',
                          from: '0346',
                          descr: '9R39' } },
      { SF_MSG:
               { time: '1603204822000',
                          area_id: 'NM',
                          address: '23',
                          msg_type: 'SF',
                          data: '04' } },
      { CA_MSG:
               { to: '0407',
                          time: '1603204823000',
                          area_id: 'LR',
                          msg_type: 'CA',
                          from: '0397',
                          descr: '1D43' } },
      { CA_MSG:
               { to: 'LKDF',
                          time: '1603204823000',
                          area_id: 'LR',
                          msg_type: 'CA',
                          from: 'DFLK',
                          descr: '1D43' } },
      { SF_MSG:
               { time: '1603204823000',
                          area_id: 'DY',
                          address: '07',
                          msg_type: 'SF',
                          data: '7B' } },
      { SF_MSG:
               { time: '1603204824000',
                          area_id: 'DY',
                          address: '50',
                          msg_type: 'SF',
                          data: '80' } },
      { SF_MSG:
               { time: '1603204824000',
                          area_id: 'DY',
                          address: '52',
                          msg_type: 'SF',
                          data: '00' } },
      { CA_MSG:
               { to: '0036',
                          time: '1603204824000',
                          area_id: 'WH',
                          msg_type: 'CA',
                          from: '0038',
                          descr: '1P25' } },
      { CA_MSG:
               { to: '0255',
                          time: '1603204824000',
                          area_id: 'WH',
                          msg_type: 'CA',
                          from: '0253',
                          descr: '9O44' } } ];

let arr = data.filter(x => {
    if(x.hasOwnProperty('CA_MSG')){
        return true
    }

});

console.log(arr);

client.connect(function(sessionId) {
        console.log('Trying to connect...');
        client.subscribe(destination, function(body, headers) {

            
            let arr = JSON.parse(body).filter(x => {
                if(x.hasOwnProperty('CA_MSG')){
                    return true
                }

            });
            console.log(prettyjson.render(arr));
            //console.log(prettyjson.render(JSON.parse(body)));
        });
});
