// import { relative } from "path";

// import { fchown } from "fs";

// let a=1;
// console.log(a);
// let b=3;
// let c=6;
// console.log(c);

// var varible//变量；
// var a="jiegiser";

// //console.log(a);
// window.onload=function(){
//     console.log(a);
// };//页面全部加载之后执行
// 2018.10.23
//var a = "jiegiser";
// {
//     let a = "jiegiser 局部";
// }
// console.log(a); //可以访问到a，a全局变量({里面let声明的访问不到})

// // 方法体中，使用的变量一般用let声明，不污染全局变量；

// const b="jiegiser";
// // var b='ddd';常量是不可以改变
// console.log(b);


//-------------------数组与对戏结构-----
// 2018.10.24
// 定义变量
// let [a,b,c]=[0,1,2];
// console.log(a);
// console.log(b);
// console.log(c);

// 比如我们需要定义数组
// let [a,[b,c],d]=[0,[1,2],3];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// 定义变量的时候需要定义默认值
// let [foo="true"]=[];
// console.log(foo);  //会打印出默认值，不会打印undefined


// undefined与null的区别,undefined是代表没有赋值，就取默认值，null是有值，就读，
// let [a,b="jiegiser"]=['gis'];//第一个值为gis，第二个为jiegiser，如果后面设置为null，null为一个对象，就会被赋值

// let [a,b="jiegiser"]=['gis',undefined];
// console.log(a+b);
// let [c,d="jiegiser"]=['gis',null];
// console.log(c+d);

// 对象的属性结构是没有位置关系的，前面的数组进行结构的时候，根位置有关，对象我们在后面使用了key值进行了赋值
// let {a,b}={a:'jiegiser',b:'杰'};  //这两个值必须要对应。
// console.log(a+b);

//------------------------z注意！！！------------------------
// 下面是一个小坑，，就是先赋值了，之后需要结构，必须在解构的外面加一个小括号；
// let foo;
// ({foo}={foo:"jiegiser"});

 
// 字符串的结构（单引号回使得压缩速度增块）
// const [a,b,c,d,e,f]='jiegis';  //做权限的时候也许会用到，
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//---------------------扩展运算符和rest运算符-------------------
// 2018.10.25
// 不确定参数的个数，就使用扩展运算符
// function jiegiser(...arg){
//    console.log(arg[0]); 
//    console.log(arg[1]); 
//    console.log(arg[2]); 
//    console.log(arg[3]); //没有的值为undefined，不会报错
// }
// jiegiser(1,2,3);


// let arr1=['www','jiegiser','com'];
// let arr2=arr1;//arr2没有开辟新的内存空间，只是将arr1复制给arr2
// console.log(arr2);
// arr2.push('jieouba');
// console.log(arr1);

//  解决上面的办法
// let arr1=['www','jiegiser','com'];
// let arr2=[...arr1];//有...就是指的是里面还有元素，并不是将arr1复制给arr2
// console.log(arr2);
// arr2.push('jieouba');
// console.log(arr1);//两个一样

// rest运算符  剩余的意思
// function jiegiser(first,...arg){
//     console.log(arg.length);
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
//     console.log(arg[4]);
//     console.log(arg[5]);
//     console.log(arg[6]);
// }
// jiegiser(0,1,2,3,4,5,6,7);//输出7

// rest运算符  剩余的意思
// function jiegiser(first,...arg){
//     for(let val of arg){ //比普通的循环速度快
//         console.log(val);
//     }
// }
// jiegiser(0,1,2,3,4,5,6,7);//输出7




// 2018.11.10
// const func=a=>console.log("ssss"+a);
// console.log(func("sss"));


// 2018.11.12
// let state=1;
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// });

// 声明多变量的方法,两边对应数量不一致则会出现错误
// let [a,b,ccc,cccccccc]=[112,'ddd',4444,5555];

// // 下面是错误的声明方法
// let[s,d,v]=[ss,'s']
// console.log(s);
// console.log(d);
// console.log(v);   //提示ss 是undefined

// 结构赋值，允许使用默认值，
// let[a=true]=[];
// console.log(a);


// 利用上面的特性，我们可以在变量声明的时候，防止数值为undefined或者null
// 比如我们常做的用户输入框中如果输入面积，我们往数据库中进行插值
// 如果为null或者undefined就会报错，我们可以设置初始变量，使其不为null或者undefined

// let [c,b='jiegiser']=['jieouba'];
// console.log(c);
// console.log(b);

// 注意undefined与null的区别，undefined为一个对象，。。
// let [c,b='jieouba']=['jiegiser',undefined];
// console.log(c);
// console.log(b);
// let [e,f='hh']=['jiegiser',null];
// console.log(e);
// console.log(f);

// 2018.11.13
// const jelly={
//     name:'jiegiser',
//     bobbies:['coding','sleping','reading'],
//     print:function(){
//         this.bobbies.map(hobby=>{
//             console.log(`${this.name}loves ${hobby}`);
//         });
//     }
// }
// jelly.print();

// 2018.11.14
// 以前我们写函数，函数里面包含参数如下：
// function func(a,b){
//     a=a||5;
//     b=b||3;
//     console.log( a+b);
// }
// func(8,3);

// 箭头函数的写法；
// 可以跟参数进行默认定义
// function func(a=3,b=5){
//  return a+b;
// }
// console.log(func(7));
// 假如我们第一个参数是没有传，需要使用默认值，则我们字啊调用方法的时候第一个参数需要传递undefined：
// function func(a=3,b=5){
//  return a+b;
// }
// console.log(func(7));

// 箭头函数的局限

// 1. 作为构造函数，一个方法需要绑定到对象
// const Person=(name,potions)=>{
//     this.name=name;
//     this.potions=potions;
// }
// const jiegiser=new Person('jiegiser',5);
// Person.prototype.updatePoints=()=>{
//     // 指向的不是他的原型的potions了，指向的是windows
//     this.potions++;
//     console.log(this.poin);
// }
// Uncaught TypeError: Cannot set property 'name' of undefined

// 上面就需要使用function来定义函数了

// const Person=function(name,potions){
//     this.name=name;
//     this.potions=potions;
// }
// const jiegiser=new Person('jiegiser',5);
// Person.prototype.updatePoints=function(){
//     // 指向的不是他的原型的potions了，指向的是windows
//     this.potions++;
//     console.log(this.poin);
// }

// 8节课 2:35
// 2018.11.17
// 当你真的需要this的时候
// const button=document.querySelector('.zoom');
// button.addEventListener('click',function(){
//     this.classList.add('in');//箭头函数不会进行绑定到这个button
//     // 而是绑定到了windows
//     console.log(this);
//     setTimeout(()=>{
//         this.classList.remove('in');
//         // 这里的this是定时器
//     });
// },2000);

// 需要使用arguments对象
// const sum=()=>{
//     // 箭头函数中没有arguments
//     return Array.from(arguments).reduce((prevSum,value)=>prevSum+value,0);
// }

// const sum=function(){
//     // 箭头函数中没有arguments
//     return Array.from(arguments).reduce((prevSum,value)=>prevSum+value,0);
// }

// 2018.11.18
// 模板字符串
// const person='jiegiser';
// const age='5';
// const sentence=`${person} is ${age} years old`;
// // 里面也可以带计算函数
// const sentence1=`${person} is ${age*8} years old`;
// console.log(sentence);
// console.log(sentence1);

// // 进行书写模板,模板字符串会保留里面的空格，
// const template=`
//  <div class='main'>
//  <p>main</p>
//  </div>
// `.trim();//可以使用trim来删除空格

// vue 中也可以使用
// new Vue({
//     template:`
//     <div class='main'>
//     <p>${preson}</p>
//     </div>
//     `,
// });

// 2018.11.20
// 字符串模板
// const jiegiser={
//     name:"jiegiser",
//     date:'2018-11-20',
//     todos:[
//         {name:"go to store",completed:false},
//         {name:"watch movie",completed:true},
//         {name:"running",completed:true}
//     ]
// }
// 这样可以进行循环打印出todos中的内容
// const template=`
// <ul>
//     <li>${jiegiser.todos[0]}</li>
// </ul>
// `
// 也可以通过array的map函数进行遍历
// 以为map返回一个数组，所以通过join('')来去掉数组中的，
// const template=`
// <ul>
//     <li>${jiegiser.todos.map(todo=>`<li>${todo.name}</li>`)}</li>
// </ul>
// `
// console.log(template);
// // 在浏览器中进行显示
// document.body.innerHTML=template;

// 在模板字符串中是实现三元表达式，判断todos中completed为true返回对号，false返回错号
// const template=`
// <ul>
// ${jiegiser.todos.map(todo=>`
//     <li>
//     ${jiegiser.name} ${todo.completed ? '对':'错'}
//     </li>`).join('')}
// </ul>
// `
// console.log(template);
// // 在浏览器中进行显示
// document.body.innerHTML=template;


// 下面实现的是将模板字符串循环的内容抽象成一个函数，在渲染的时候模板字符串读取函数
// 这里注意的是，模板字符串可以掉函数，执行函数
// const template=`
// <div class="panel">
// <div class="panel-header">${jiegiser.name}</div>
// <div class="panel-body">
// ${render(jiegiser.todos)}
// </div>
// <div class="panel-footer">${jiegiser.date}</div>
// </div>
// `;
// function render (todos){
//     return(
//         `
//         <ul>
//         ${todos.map(todo=>`<li>${todo.name} ${todo.completed ? '✅':'❌'}</li>`).join('')}
//         </ul>
//         `
//     )
// }
// document.body.innerHTML = template;

// 测试将工作中写的打印库房信息转换为es5常用语法
// const response=[
//     {
//         KFH:'ss',
//         PJH:'ss',
//         KGH:'ss',
//         DAHH:'sss'
//     }
// ]
// const a=`档案位置：${response[0].KFH}-${response[0].PJH}-${response[0].KGH}-${response[0].DAHH}`;
// console.log(a);


// 2018.11.22
// 通过import命令加载在export暴露的内容

// import {firstName,lastName,year} from 'a.js';
// console.log(`${firstName}-${lastName}-${year}`);

// import中也可以使用as来重命名，这里需要注意的是，引入的
// 变量名必须跟暴露出来的变量名一样；

// import命令输入的变量都是只读的，因为它的本质是输入接口，
// 也就是说，不允许在加载模块的脚本里面，改写接口；
// import { a } from './xxx.js';

//  a = {}; // Syntax Error : 'a' is read-only;

// 如果我们通过import引入模块，不想写路径，可以通过配置模块的路径
// 这样在引入的时候只需要写上模块名字即可;


// 注意的是:import具有提升效果,会提升到整个模块的头部,首先执行;
// foo();
// import {foo} from 'a.js'
// 上面的代码不会报错，因为import的执行早于foo（）。
// 这种行为的本质是,import命令是编译阶段执行的,在代码运行之前;


// 由于import是静态执行，所以不能使用表达式和变量，
// 这些只有在运行时才能得到结果的语法结构。
// 报错
// import { 'f' + 'oo' } from 'my_module';

// // 报错
// let module = 'my_module';
// import { foo } from module;

// // 报错
// if (x === 1) {
//   import { foo } from 'module1';
// } else {
//   import { foo } from 'module2';
// }
// 上面三种写法都会报错，因为它们用到了表达式、变量和if结构。
// 在静态分析阶段，这些语法都是没法得到值的


// import语句会执行所加载的模块,下面的代码是执行了模块

// import 'lodash';//仅仅执行了lodash模块，但是不输入任何值
// 注意多次重复执行同一句import语句，那么只会执行一次，
// 而不会执行多次


// import { foo } from 'my_module';
// import { bar } from 'my_module';

// // 等同于
// import { foo, bar } from 'my_module';
// 上面代码中，虽然foo和bar在两个语句中加载，
// 但是它们对应的是同一个my_module实例。
// 也就是说，import语句是 Singleton 模式。


// 模块的整体加载
// 通过使用*指定一个对象，所有输出值都加载在这个对象里面
// 如下面的circle.js文件输出两个方法
// export function area(redius){
//     return Math.PI*redius*redius;
// }
// export function circumference(redius){
//     return 2*Math.PI*redius;
// }
// 进行加载模块，第一种是逐个进行加载
// import {area,circumference} form 'circle.js'
// 下面是整体加载
// import * as circle from './circle.js';
// console.log(circle.area(44));
// console.log(circle.circumference(1));
// 需要注意的是，模块整体加载所在的那个对象（上面的circle）
// 应该是可以静态分析的，所以不允许运行时改变，下面的写法是错的
// import * as circle from './circle.js';
// circle.foo='false';
// circle.area=function(){};

// export default 命令
// 他是为模块指定默认输出,下面的函数是默认输出一个函数
// export default function(){
//     console.log('foo');
// }

// 其他模块加载该模块时,import命名了可以为给匿名函数指定任意的名字
// import custimName from './export-default';
// custimName();


// export default 命令用在非匿名函数前，也是可以的
// export default function foo(){
// console.log('ss');
// } 
// 或者写成
// function foo(){
// console.log('foo');
// }
// export default foo; //这里可以不用加上花括号

//前面使用是，需要加上花括号。正确
// function f() {}
// export {f};

// 下面比较一下默认输出和正常输出
// 默认输出
// export default function crc32(){//输出
//     //..
// }
// import crc32 from 'crc32.js'//输入

// // 正常输出
// export function crc32(){ //输出

// }
// import { crc32 } from "crc32.js";
// 上面代码的两组写法，第一组是使用export default时，
// 对应的import语句不需要使用大括号；
// 第二组是不使用export default时，对应的import语句需要使用大括号。

// export default 命令用于指定规模的默认输出，一个模块只能有一个默认输出
// 因此export default命令只能使用一次；所以import后面才可以不用大括号，因为只可能唯一对应export default命令

// 需要注意的是 同样默认输出也可以使用as重命名

// function add(x,y){
// return x*y;
// }
// export {add as default};
// 等同于
// export default add;
// 引入该模块
// import {default as foo }from 'add.js';
// 等同于
// import foo from 'modules';
// 默认输入与输出都是必须要加上大括号的

// 注意export default命令其实只是输出一个叫做default的变量，所以他后面不能跟一个变量声明语句
// export let a=1; //正确

// let a=1;
// export default a;

// // 错误
// export default let b=4;


// 需要注意的是export defult 命令的本质是将后面的值，赋值给default变量，
// 所以后面可以直接将一个值写在export default后面

// // 正确
// export default 45;
// // 错误
// export 47;

// 如果想在一条import语句中，同时输出默认方法和其他接口，可以下次下面
// import _,{forEach,each} from 'dd.js';

// 对应上面的代码
// export default function(obj){
//     // ...
// }
// export function each(obj, iterator, context) {
//     // ···
//   }
// export { each as forEach };

// export default也可以用来输出类
// export default class{}
// import myClass from 'myclass';
// let o=new myClass();

// export与import复合写法
// 如果在一个模块中，先输入后输出同一个模块。import 语句可以与export语句写在一起；

// export {foo,bar} from 'my_moudle';
// // 可以简单理解为
// import {foo,bar} from 'my_moudle';
// export {foo,bar};
// 上面代码中，export和import语句可以结合在一起，写成一行。
// 但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，
// 只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。



// 下面是整体加载与整体输出：
// 进行加载模块，第一种是逐个进行加载
// import {area,circumference} form 'circle.js'
// 下面是整体加载
// import * as circle from './circle.js';
// console.log(circle.area(44));
// console.log(circle.circumference(1));

// 整体输出
// 接口改名
// export {foo as myFoo} from 'my_moudle';

// // 整体输出
// export * from 'my_moudle';




// 2018.12.6
// 标签模板字符串

// 如果
// string一个数组，模板字符串的普通数组，
// function highlight(string,...values){  //标签模板字符串，他会打印出laravist，他会将模板字符串作为参数，
//     // string包含三个参数，
//     // debugger;  //进去调试模式
//     // return 'laravist';

//     const highlight=values.map(value=>`<span class="hightlight">${value}</span>`);
//     let str='';
//     string.forEach((string,i)=>str+=`${string}${highlight[i]||''}`);
//     // return str;
//     // 数组的reduce方法，prev 之前操作的值，curr当前的值 i
//     return string.reduce((prev,curr,i)=>`${prev}${curr}${highlight[i]||''}`);
// }
// const user='mary';
// const topic='Learn to use markdown';

// // 如果模板字符串第一个是字符串模板，则highlight的string数组第一个为空，如果第一个不是
// // 字符串模板，则string的第一个值不是空；开头跟结尾是一样的
// const sentence=highlight`jiegiser ${user} has component on your topic ${topic}.`;
// document.body.innerHTML=sentence;



// 2018.12.25
// 字符串的四种方法：
// const id='620403199505013122';
// const fan='I love jiegiser';

// // 注意这个检查的方法是大小写敏感
// // 检查开头是否为62
// console.log(id.startsWith('62'));
// // 从指定位置检查是否开头为一个字符串，
// // 第一个参数为是否包含的被人，第二个参数为从第几个位置开始检查
// console.log(id.startsWith('1995',6));

// // 检查结尾的函数
// // 大小写敏感
// // 检查最后一位是不是2
// console.log(id.endsWith('2'));
// // 检查指定字符串是否以第几位结尾
// console.log(id.endsWith('95',10));


// // 检查子字符串是否在字符串中：

// // 一般我们使用indexOf来进行检查，下面是原始检查字符串
// // 是否包含某个字符串,!=-1就是包含
// console.log(fan.indexOf('jiegiser')!==-1);

// // es6中的写法：
// console.log(fan.includes('jiegiser'));
// // 他也是有参数的，第一个是否包含的字符串，第二个参数是从第几个位置开始检查
// console.log(fan.includes('jiegiser',10));

// // repeat()进行将字符串重复
// // 参数为重复的字数
// console.log(fan.repeat(10));
// console.log(`${'='.repeat(5)}${fan} ${'='.repeat(5)}`);

// // 可以通过repeat方法实现对齐效果
// // 打印实现右对齐
// function padder(string,length=25){
//     return `${' '.repeat(Math.max(length-string.length,0))}${string}`
// }

// console.log(padder(id));
// console.log(padder(fan));


// 对象解构

// const Tom={
//     name:'tom',
//     age:22,
//     family:{
//         mother:'jig',
//         father:'jiegiser',
//         brother:"gon"
//     }
// }

// 把对象的属性赋值给变量，通常这样写
// const name=Tom.name;
// const age=tom.age;
// 在es6可以这样写
// const {name,age}=Tom;  //他会找tom对象，然后把同名属性会赋值给变量
// console.log(name);
// console.log(age);

// 如果我们希望自己声明的变量在这之前，而不是赋值的时候声明，那么需要
// 赋值的时候外层在嵌套一个大括号
// let name='';

// ({name,age}=Tom); //es6会认为（）里面的是一个代码块
// console.log(name);
// console.log(age);


// 对象解构可以嵌套
// const {father,mother,brother}=Tom.family;
// console.log(father);
// console.log(mother);
// console.log(brother);

// 对象解构中重命名，（有时候我们在前面声明了变量，但是在结构的时候，需要同样的）

// 他声明的是f，并不是声明了father，他只是找到对象中的father然后赋值给f
// const father='cc';
// const {father:f,mother,brother}=Tom.family;
// console.log(f);
// console.log(mother);
// console.log(brother);

// 如果我们在对象解构时，获取的内容对象里面没有，会返回undefined
// const {sister}=Tom.family;
// console.log(sister);

// 为了避免这样，我们可以在解构 的时候进行给他赋予一个初始值，这样即使对象没有，也会有初始值，而不是报错
// 只有为undefined就是没有的时候，才会使用默认值，不是false或者空字符串，
// const {sister='no sister'}=Tom.family;
// console.log(sister);



// 数组的解构
// const number=['one','two','three','four'];

// const [one,two]=number;

// 如果想要获得0，跟3位置，如下
// const [one,,two]=number;
// console.log(one);
// console.log(two);
// 如果想要获取到除了第一个后面所有的，代码如下
// const [one,...other]=number;
// console.log(other);

// 跟对象解构一样，可以给解构的变量赋予初始值，防止数组中没有足够的值赋值
// 一样，当明确为undefined的时候，才会使用默认参数
// const [one,two,three,four,five='hh']=number;
// console.log(one,two,three,four,five);


// 数组最常用的就是交换两个变量的值

// let a=30;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);


// for of循环
// const number=['one','two','three','four'];
// // for循环
// for (let index = 0; index < number.length; index++) {
//      console.log(number[index]);
// }
// forEach
// number.forEach(num=>{
//     // 不能终止或者跳过
//     console.log(num);
// });

// for in 循环
// for(let num in number){
//     console.log(num);//打印结果为0,1,2,3,4
//     console.log(number[num]);//这样可以获取
// }

// for of循环，不会遍历数组的非数字属性，
// 也可以进行终止
// for (let num of number){
//     if(num==='one'){
//         continue;
//     }
//     console.log(num);
// }



// const number=['one','two','three','four'];
// for (let num of number){
//     console.log(num);
// }
// 数组有一个entries()属性，他有两个属性，一个为布尔值，为false代表循环未结束
// 第二个属性为一个数组，数组的第一个值为对应值的索引，第二个为对应的值
// for (let num of number.entries()){
//     // 如果我们只需要获取他的值，就按照下面的写法
//     console.log(num[1]);
//     // 使用entries（）方法的好处是，可以同时获取到数组对应的索引值以及对应的数值
// }

// 我们也可以使用数组解构的方法进行将索引与数值分开
// fou of不支持对象
// for (let [index,num] of number.entries()){
//     console.log(`${index} in numbern ${num}`);
// }


// for of 的应用场景
// 比如我们需要一个函数，来计算所有穿进去的参数的和，
// 方法的arguments是一个对象数组;_proto_
// function sum(){
//     // console.log(arguments);
//     let total=0;
//     for(let num of arguments){
//         total=total+num;
//     }
//     console.log(total);
//     return total;

// }
// sum(1,2,3,4,5,6,7,8,9);
// 而数组的_proto_是一个数组,包含我们常用的数组的方法
//我们可以先将方法的arguments转换为数组，然后使用for of来进行计算和


// for of 也可以运用与字符串
// let name='jiegiser';
// for(let i of name){
//     console.log(i);
// }

// 可以用于nodeList

// const lis=document.querySelectorAll('li');
// console.log(lis);
// for(let li of lis){
//     li.addEventListener('click',function(){
//         console.log(this);
//         this.classList.toggle('complete');
//     })
// }


// Array.from（）方法跟Array.of()
// const lis=document.querySelectorAll('li');
// w我们发现这样会报错的，因为lis并不是一个真正的数组，而是一个nodeList，
// 一个类数组对象，也就是有一个length属性
// const names=lis.map(todo=>todo.textContent);
// console.log(names);


// 我们可以通过Array.from（）将这个类数组转换为真正的数组
// const nameArray=Array.from(lis);
// const names=nameArray.map(todo=>todo.textContent);
// console.log(names);

// Array.from可以包含两个参数，第一个是要转换的类数组，第二个为遍历每一个的
// 数值在进行一次操作，跟数组的map的方法一样。。上面的代码我们可以这样写：
// const nameArray=Array.from(lis,todo=>todo.textContent);
// console.log(nameArray);


// 另一个例子。方法中arguments参数转换为数组
// function sum(){
//     return Array.from(arguments).reduce((prev,curr)=>prev+curr,0)
// }
// console.log(sum(1,2));

// 将字符串转换为数组
// const str='jiegiser';
// console.log(Array.from(str));


// Array.of()就是为Array的缺陷而来
//比如我们使用Array创建数组。传一个参数就是创建一个对应几个的大小的数组
// 比如我们传入5，就是创建一个5个长度的数组,如果传入两个就是，以这两个进行创建数组
// 我们使用Array.of（）不管传入几个参数，他都是以传入的参数为元素创建数组
// const ss= Array.of(4)
// console.log(ss);




// 2018.12.26
// 数组的新方法
// const iventory=[
//     {name:'apples',quantity:2},
//     {name:'bananas',quantity:3},
//     {name:'cherries',quantity:8}
// ];
//以前 查找满足某个条件的方法我们会使用for或者foreach进行循环查找。
// find方法查找符合要求某个条件的元素，一旦查找，会立刻停止，返回结果
// 包含三个参数，第一个为当前值，第二个为索引值，第三个为遍历的数组
// const bananas=iventory.entries.find((element,index,array));
// const bananas=iventory.find(fruit=>{
//     if(fruit.name==='bananas'){
//         return true
//     }
//     return false
// });
// // 他会查找到那个元素，进行返回，而不是返回true
// console.log(bananas);


// 上面的代码可以简写为
// const bananas=iventory.find(fruit=>fruit.name==='bananas');
// console.log(bananas);

// findIndex方法,跟find包含的参数一样。
// const bananasIndex=iventory.findIndex(fruit=>{
//     if(fruit.name==='bananas'){
//         return true
//     }
//     return false
// })
// // 他返回的为查找的索引值
// console.log(bananasIndex);

// 上面的代码也可以简写为
// const bananasIndex=iventory.findIndex(fruit=>fruit.name==='bananas');
// console.log(bananasIndex);


// some跟every方法
// some跟every的区别就是some为只有查询的条件有一个满足就返回true，而every
// 只有所有的元素都满足的时候，才会返回true

// const someApple=iventory.some(fruit=>fruit.quantity>0);
// 如果查找到就会返回，不会进行查找下面的
// console.log(someApple);

// const everyAll=iventory.every(fruit=>fruit.quantity>5);
// // 主要有一个为false就会停止，不会执行下面的
// console.log(everyAll);

// const everyAll=iventory.every(fruit=>{
//     console.log(fruit.name)
//     if(fruit.quantity>5){
//         return true
//     }
//     return false
// });
// 主要有一个为false就会停止，不会执行下面的
// console.log(everyAll);


// 剩余参数
// 在参数计算的时候
// function sum(...numbers){
//     // console.log(numbers);//为一个数组
//     return numbers.reduce((prev,curr)=>prev+curr,0);
// }
// console.log(sum(1,2,3));


// 应用场景,计算汇率
// function converCurrency(rate,...amounts){
//     // console.log(rate,amounts)
//     return amounts.map(amount=>amount*rate);
// }
// const amounts=converCurrency(0.898,78,56,58,66);
// console.log(amounts);

// 变量的解构
// const player=['jiegiser',123,5.4,5454.2,56.5]
// // ...scores获取后面所有的分数
// const [name,id,...scores]=player;
// console.log(name,id,scores);


// 扩展运算符
// const youngers=['dsds','jiegiser','sdsd','hhh'];
// const olders=['dsddsds','jidddegiser','sdsvvsd','hhvvvh'];
// 将上面两个数组进行整合
// const mun=youngers.concat(olders);
// console.log(mun);

// 如果想要在这两个数组中间新加一个数值
// let numers=[];

// numers=numers.concat(youngers);
// numers.push('Merry');
// numers=numers.concat(olders);
// console.log(numers);


// 扩展字符串
// const arrli=[...'jiegiser'];
// console.log(arrli);//数组中的每一个值就是字符串的每一个字符

// 上面的例子可以这样写，通过扩展字符串
// const nu=[...youngers,'Marry',...olders];
// console.log(nu);


// 比如我们要使用赋值操作
// const mn=nu;
// console.log(mn);//这样我们会发现我们修改mn里面的值时候，对应的nu里面的值也会修改
// 他的赋值实际上是直接将索引都赋值给了mn

// 我们可以用下面的方法来避免这个问题，通过空数组来进行连接nu实现
// const mn=[].concat(nu);
// console.log(mn);

// 我们可以通过扩展运算符来解决这个问题
// const hh=[...nu];
// console.log(hh);


// 小例子：

