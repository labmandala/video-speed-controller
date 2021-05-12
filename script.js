$(document).ready(function(){
    $("#speedSlider").slider({min:0, max:2, value:1, step:.01,
        change: function(event, ui){
           // alert(ui.value);
           $("#myVideo")[0].playbackRate = ui.value; //playbackRate is DOM property, not jquery property
        }
    });
});