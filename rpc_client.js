var zerorpc = require('zerorpc')
// var bodyParser = require('body-parser');

var client = new zerorpc.Client()
client.connect('tcp://127.0.0.1:4242')
// calls the method on the python object
var data = {
  name: 'hahnsang',
  age: 40
}
client.invoke('hello', JSON.stringify(data), function(error, reply, streaming) {
  if (error) {
    console.log('ERROR: ', error)
  }
  var jsonobj = JSON.parse(reply)
  console.log(jsonobj.key)
  console.log(jsonobj.arr)
})
