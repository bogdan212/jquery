var $ = require('jquery');
var _ = require('underscore');


function changeForm () {
    $(function(){
        $("[name='CVF[1677]'],[name='CVF[1234]']").each(function(index, input){
            var $input = $(input);
            var rep = $("<input class='awesome_input'/>")
                .change(e => e.target.nextSibling.value=e.target.value)
                .insertBefore($input);
            $input.hide();
        })
    });
};

function check() {
  if($('name="CVF[1677]"').lenght>0 && $('name="CVF[1677]"').lenght>0) {
    $("#submit").prop('disabled', false);
  } else {
    $("#submit").prop('disabled', true);
  }
};
module.exports = timeline;
