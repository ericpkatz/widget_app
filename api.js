var router = require('express').Router();
var Widget = require('./widget');

module.exports = router;

router.get('/', function(req, res){
  Widget.find()
    .then(function(widgets){
      res.send(widgets);
    });
});

router.post('/', function(req, res){
  var widget = new Widget(req.body);
  widget.save()
    .then(function(){
      res.send(widget);
    });
});

router.delete('/:id', function(req, res){
  Widget.findById(req.params.id)
    .then(function(widget){
      return widget.remove();
    })
    .then(function(){
      res.sendStatus(204);
    });
});

router.patch('/:id/:name', function(req, res){
  Widget.findById(req.params.id)
    .then(function(widget){
      widget.name = req.params.name;
      return widget.save();
    })
    .then(function(widget){
      res.send(widget);
    });
});
