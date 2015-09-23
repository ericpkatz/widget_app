var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/widget_db');
var WidgetSchema = mongoose.Schema({
  name: { type: String, required: true }
});

var Widget = mongoose.model('widget', WidgetSchema);

module.exports = Widget;
