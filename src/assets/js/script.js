var functionforscroll = function(id){
    var reqId = "#"+id;
    window.scrollTo(0, $(reqId).offset().top-85);
}