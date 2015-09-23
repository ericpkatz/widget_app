$(function(){
  $('.btn-success').click(function(){
    var $input = $(this).parents('.form').find('input');
    if($input.val() == '')
      return alert('put something in the input field');
    $.ajax({
        url: '/api/widgets',
        method: 'POST',
        data: JSON.stringify({ name: $input.val() }),
        contentType: 'application/json',
        success: function(){
          getWidgets();
          $input.val('');
        }
    });
  });

  $('ul').on('click', '.btn-primary', function(){
    var $listItem = $(this).parents('li');
    var $input = $listItem.find('input');
    $.ajax({
      method: 'PATCH',
      url: '/api/widgets/' + $listItem.attr('data-id') + '/' + $input.val(),
      success: function(){
        getWidgets();
      }
    });
  });

  $('ul').on('click', '.btn-warning', function(){
    var $listItem = $(this).parents('li');
    var $input = $listItem.find('input');
    $.ajax({
      method: 'DELETE',
      url: '/api/widgets/' + $listItem.attr('data-id'),
      success: function(){
        getWidgets();
      }
    });
  });

  function getWidgets(){
  $.ajax({
    url: '/api/widgets',
    success: function(widgets){
      $('ul').empty();
      widgets.forEach(function(widget){
        var $listItem = $("<li />");
        $listItem.addClass('list-group-item');
        $listItem.attr('data-id', widget._id);

        var $input = $("<input />");
        $input.addClass('form-control');
        $input.val(widget.name);
        $listItem.append($input);

        var $saveButton = $('<button />');
        $saveButton.addClass('btn btn-primary');
        $saveButton.html('Save');

        var $deleteButton = $('<button />');
        $deleteButton.addClass('btn btn-warning');
        $deleteButton.html('Delete');


        $listItem.append($saveButton);
        $listItem.append($deleteButton);
        $("ul").append($listItem);
      });
    }
  });
  };
  getWidgets();
});
