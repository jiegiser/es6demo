// console.log(window.screen);
// console.log(document.getElementById('zoom').style);
// document.getElementById('zoom').style.width=window.screen.width+'px';
// document.getElementById('zoom').style.height=window.screen.height+'px';
// console.log(window.navigator);
// console.log(window.navigator.cpuClass);


// document.getElementById('btn').onclick = () => {
//     with(document) { //with用法就是为一个或一组语句指定默认对象，也就是说下面的属性都是document对象的。都是获取document
//         with(this) {
//             console.log(this);
//         }
//     }
// };

// DOM0级事件处理程序
// document.getElementById('btn').onclick=function(e){
//     console.log(e);
// };
// document.getElementById('btn').onclick=()=>{
//     console.log(this.id);
// };

// DOM2级事件处理程序
let btn=document.getElementById('btn');
// 同样，这里也是不能使用箭头函数，来获取绑定事件的对象
// addEventListener接收三个参数，第一个为要处理的事件名、作为事件处理程序的函数和一个布尔值
// btn.addEventListener('click',function(){  //使用addEventListener好处在于可以给对象通过addEventListener添加多个事件
//     console.log(this);
// },false);//如果为true，表示在捕获阶段调用事件处理程序，如果为false，表示在冒泡阶段调用事件处理程序


// 通过addEventListener添加的事件，只能通过removeEventListener来移除，这也就是说，我们如果想要移除方法，
// 就不能通过匿名函数来添加事件，通过下面的方法是移除不了事件的。
// btn.removeEventListener('click',function(){},false);

// 例子通过addEventListener添加的事件与removeEventListener移除事件
// 这里需要注意的是，添加事件，需要在外部声明函数，进行添加
// function conThis(){
//     console.log(this);
// }
// btn.addEventListener('click',conThis,false);

// document.getElementById('btn2').onclick=function(){
//     btn.removeEventListener('click',conThis,false);
// }


// IE事件处理程序
// IE中与dom中类似的方法就是attachEvent与detachEvent
// attachEvent第一个参数是onclick而不是addEventListener中的click

// attachEvent也可以添加多个事件，但是他执行的顺序不是从上而下，而是从下而上执行
// 还有需要注意的是attachEvent里面的this指代的是windows对象而不是绑定事件对象的本身

function check(formobj){
    console.log(formobj);
    with(this){
        console.log(this.value);
    }
}