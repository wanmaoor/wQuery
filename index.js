// @ts-nocheck
$("button").on("click", () => {
  $(".test").addClass("red");
});

$(".child")
  .parent()
  .print("测试parent api");

$(".parent")
  .children()
  .print("测试children api");

$('.parent')
  .attr('xxx', 'wanmao')

const xxx = $('.parent').attr('xxx')
console.log('xxx', xxx);
setTimeout(() => {
  $(".parent")
    .find(".child")
    .addClass("green");
  $(".parent")
    .find(".child")
    .end()
    .addClass("blue");
  $(".remove").remove();
  $(`<div>我要添加在append1的尾巴</div>`).appendTo($(".append"));
  $(`<div>我是append2的尾巴</div>`).appendTo($(".append"), 1);
}, 2000);

setTimeout(() => {
  $(`<div>我要添加在body的尾巴</div>`).appendTo(document.body);
}, 3000);

