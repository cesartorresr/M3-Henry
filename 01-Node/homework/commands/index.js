let fs = require('fs');
let request = require('request');

module.exports = {
  echo: function(args, print) {
    print(args.join(' '));
    // echo
  },
  date: function(args, print) {
    print(Date()); // fecha

  },
  ls: function(args, print) {
    fs.readdir('.',function(err, files) {
      if(err) throw err;
      print(files.join("\n"));
    }) // lista de archivos

  },
  pwd: function(args, print) {
    print(process.cwd())
  }, // ubicacion

  cat:function(args, print) {
    // args = el nombre del archivo
    fs.readFile(args[0], 'utf-8', function(err, data) {
      if(err) throw err;
      print(data)
    })// lee el archivo
  },
  head: function(args, print) {
    fs.readFile(args[0], 'utf-8', function(err, data) {
      if(err)throw err;
      print(data.split('\n').splice(0, 10).join('\n'))
    }) // te devuelve las primeras lineas
  },
  tail: function(args, print) {
    fs.readFile(args[0], 'utf-8', function(err, data){
      if(err) throw err;
      print(data.split('\n').splice(-args[1]).join('\n'));
    }) // de atras para adelante
  },
  curl: function(args, print) {
    // nos devuelve un html, nos devuelve una peticion
    request(args[0], function(err, data) {
      if(err) throw err;
      print(data.body);
    })
  }
}