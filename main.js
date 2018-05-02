$('#box1,#box2,#box3').click(function (event) {
    var $el = event.target;
    event.stopPropagation();
    $el.style.backgroundColor = "yellow";
    alert('Work stopPropagation method and stop bubbling in parent element.');
});

$('#box11,#box22,#box33').click(function (event) {
    var $el = event.target;
    $el.style.backgroundColor = "yellow";
    alert('Without stopPropagation method and bubbling are in parent element.');
});

$('.url').click(function (event) {
    var $el = event.target;
    event.preventDefault();
})