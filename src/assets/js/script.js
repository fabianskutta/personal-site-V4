function functionforscroll (id){
    var reqId = "#"+id;
    window.scrollTo(0, $(reqId).offset().top-85);
}