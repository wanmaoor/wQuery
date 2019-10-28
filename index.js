// @ts-nocheck
  $(".test")
    .find(".child")
    .addClass("red")
    .end()
    .addClass('yellow')
    .print()


$('.test').each((element, i)=>{console.log(`${i}: ${element}`);})
$('.test').parent().print()
$('.test').children().print()

let $div = $(`<div>1<span>2</span></div>`)
$div.print()
$div.appendTo(document.body)

$('.child').appendTo($('#container'))

$('#container').find('#container1').find('#container2').end().addClass('xxx')
