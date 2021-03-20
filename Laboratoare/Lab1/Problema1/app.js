console.log('Welcome to data transmission');
document.getElementById('message').innerHTML = 'Message from JavaScript';

var sum = 10;
var name = 'Alexandru';
var isActive = true ;
var user = {
    id : 1,
    name : 'Andrei',
    age : 21
};

//Formatarea obiectului in JSON
var user = {
    'id': 1,
    'name': 'Alexandru Cristea',
    'username': 'acristea',
    'email': 'acristea@test.com',
    'address': {
        'street': 'Padin',
        'number': 'Ap. 10',
        'city': 'Cluj-Napoca',
        'zipcode': '123456',
        'geo': {
            'lat': '46.783364',
            'lng': '23.546472'
        }
    },
    'phone': '004-07xx-123456',
    'company': {
        'name': 'QWERTY',
        'domain': 'Air Traffic Management',
        'cities': ['Cluj-Napoca', 'Roma', 'Oregon']
    }
}

//Afisam diferite caaracteristici ale obiectului
console.log(user.name);
console.log(user.address.geo.lat);
console.log(user.company.name);
console.dir(user.company.cities);
console.log(user.company.cities[0]);

//definim si apelam o functie
function print(message) {
    console.log(message);
}
print('HI!');

//Op. ternar *am schimbat parola
var password='123454';
console.log(password=='123456'? 'ALLOW ACCES':'DENY ACCES');

//ternar = if
if(password == '123456')
{
    console.log('Permission granted');
}
else
{
    console.log('Permission denied');
}
//jQuery
$('#message3').html('I have changed the password');
$('#message2').html('This message is for problem1');
