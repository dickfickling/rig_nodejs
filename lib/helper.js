var exec = require('child_process').exec;

exports.getIdentity = function(callback) {
    exec('rig', function(error, stdout, stderr) {
        callback(to_json(stdout));
    });
};

function to_json(rig_output) {
    var identity = rig_output.split('\n');
    var name = identity[0].split(' ');
    var city_state_zip = identity[2].split(' ');
    return {'first_name': name[0],
        'last_name': name[1],
        'email': name[0].toLowerCase() + '_' + name[1].toLowerCase() + '@example.com',
        'street_address': identity[1],
        'city': city_state_zip[0].slice(0,-1),
        'state': city_state_zip[1],
        'zip': city_state_zip[3],
        'phone': identity[3].replace(/x/g, '5'),
        'credit_card': '4111111111111111',
        'cvv': '123'
    };
}
