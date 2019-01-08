'use strict';

// const { x,y,...z}={
//     x:1,
//     y:2,
//     a:3,
//     b:4
// }


// const websites=['code','jie'];
// const info=websites.map(website=>`${website} is cool`);
// for(const website of websites){
// console.log(website);
// }

// babel并不能将所有的es6语法能够转换为es5语法，比如set，等等，
// Array.from([1,2,3]);

// 使用profile来完善上面提到的缺陷
// 使用babel的profile插件或者是使用pollyfill.io中的都可以
// 使用下面的的链接就可以


// 原型继承
// function user(name,email){
//     this.name=name;
//     this.email=email;
//     this.info=function(){
//         console.log(`Hi I'm ${name}`)
//     }
// }
// 每次定义对象，都会新生成info，会占用我们的内存
// 对象有一个prototype指向构造函数的原型
// 每一个user实例都有一个__proto__指向原型对象，
// 因此可以将公用的方法写在原型对象上prototype

// 上面的代码可以这样写：

// function user(name,email){
//     this.name=name;
//     this.email=email;
// }
// user.prototype.info=function(){
//     console.log(`Hi I'm ${name}`)
// }

// 原型对象上定义的方法也是可以重写的
// user.prototype.info=function(){
//     console.log(`Hi I'm ${name},my emsil is${this.email}`);
// }

// 给原型对象新增属性
// user.prototype.description=function(){
//     console.log(`I am a user of jiegiesr`);
// }
// const jie=new user('jiegiser','jieigiser@163.com');
// const jiegiser=new user('jieouba','jieigiser@163.com');
// console.log(jie);
// console.log(jiegiser);


// es6中的class
// 类的声明定义类


// 使用计算属性定义info方法
// let nethodName = 'info';
// class user {
//     // 构造函数
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     // 这里需要注意的是，上面的构造函数完成之后，是没有逗号的，如果有就会报错

//     //5.15
//     // info(){
//     //     console.log(`Hi I'm ${name},my emsil is${this.email}`);
//     // }

//     [nethodName]() {
//         console.log(`Hi I'm ${name},my emsil is${this.email}`);
//     }


//     // 定义静态方法
//     // 静态方法就是只能在原型对象上调用，而不能在他的实例上调用
//     // 比如Array.from,只能Array对象调用
//     // 而不能通过['d','d'].from这样调用，会出现错误
//     static description() {
//         console.log(`I am a user of jiegiesr`);
//     }
//     /*
//     上面定义的静态方法只能使用使用。user.description()
//     而jiegiser.description()这样使用会报错，也就是实例上不能使用
//     */

//     // 定义get，set方法
//     set github(value) {
//         this.githubName = value;
//     }
//     get github() {
//         return `https://github.com/${this.githubName}`
//     }
// }
// 类的表达式，定义法
// const User=class{

// }
// 类就是特殊的函数,函数是存在函数提升的。如果我们定义一个函数，
// 可以在定义之前使用，但是class不可以


// 继承class
// 类跟对象写法非常类似
// 方法可以使用计算属性类定义


// console.log(typeof user); //function

// const jie = new user('jiegiser', 'jieigiser@163.com');
// const jiegiser = new user('jieouba', 'jieigiser@163.com');
// console.log(jie);
// console.log(jiegiser);

// import addTax from './chenck';
// addTax(1,12);


// 2019/1/6


// 类的继承
// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.belly = [];
//     }

//     eat(food) {
//         this.belly.push(food);
//     }

//     speak() {
//         console.log(`I'm ${this.name}`);
//     }
// }

// 定义一个子类

/*
下面这样的写法会出现错误。
*/
// class Dog extends Animal {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     bark() {
//         console.log(`Barl bark!`);
//     }
// }


// 在es5中我们这样实现继承
// function Dog(name,age){
//     Animal.call(this,name,age);
//     this.name=name;
//     this.age=age;
// }
// Dog.prototype=new Animal();
// Dog.prototype.constructor=Dog;


// 在es6中，我们使用super()方法就替代了es5中，Animal.call(this,name,age);还有Dog.prototype=new Animal(); Dog.prototype.constructor=Dog;
// class Dog extends Animal {
//     constructor(name, age) {
//         // 如果基类需要实例化参数，在括号里面写上，
//         super(name);
//         // 在基类中已经实现了this.name=name，我们可以注释掉
//         // this.name = name;
//         this.age = age;
//     }
//     bark() {
//         console.log(`Barl bark!`);
//     }

//     // 如果在子类中定义的方法跟基类的方法相同，会覆盖基类的方法
//     speak() {
//         console.log(`Bark bark! I'm ${this.name}`);
//     }
// }


// 实例化对象，
// const lucky = new Dog('lucky', 2);

// lucky.eat('dd');
// console.log(lucky);


// 扩展内建对象数组

// es5扩展内建对象
// function MyArray() {
//     Array.apply(this,arguments);
// }


// const colors=new MyArray();
// colors[0]='red';
// console.log(colors.length);//undefined

// colors.length=0;
// console.log(colors[0]);//red


// 上面是通过es5来扩展内建对象，我们发现是实现不了的，用es6可以轻松实现
// class MyArray extends Array{
//     constructor() {
//         // super()使得this值指向了Array基类，因此在子类MyArray在基类的基础上修改值，
//         super();
//     }
// }

// const colors=new MyArray();
// colors[0]='red';
// console.log(colors.length);//1

// colors.length=0;
// console.log(colors[0]);//udefined


// 自定义实现类的扩展
// class movieCoollection extends Array{
//     // ...items剩余参数
//     constructor(name,...items){
//         // ...items扩展运算符
//         super(...items);//获取到this
//         this.name=name;
//     }
//     add(movie) {
//         this.push(movie)
//     }
//     topRated(limit = 10){
//         return this.sort((a,b)=>(a.scores>b.scores)? -1 : 1).slice(0,limit);
//     }
// }
// const movies=new movieCoollection('favorite movies',
// {name: 'The Croods', scores: 8.7},
// {name: 'The Shawshank Redemption', scores: 9.6 },
// {name: 'leon', scores: 9.4 },
// {name: 'Days of Summer',scores: 8.0 }
// );
// movies.push({
//     name: 'jie',
//     scores: 9.8
// });
// console.log(movies);
// movies.topRated();
// console.table(movies.topRated());

// for(let movie in movies){
//     console.log(movie);//会打印出一个name，就是我们扩展的name属性
// }

// for(let movie of movies){
//     console.log(movie);//只打印了数组里面的内容
// }
// movies.add({
//     name:'jieouba',
//     scores:9.7
// });
// console.log(movies);


// 遍历器lterator
// const colors=['red','blue','green'];
// const iterator=colors[Symbol.iterator]();
// console.log(iterator)//Array Iterator对象，他有一个next方法，就是一直遍历下一个，
// console.log(iterator.next());//Object类型，一直打印下一个，他有一个属性done，一个value属性是当前值，如果没有到最后一个就是为false，到了最后一个就是为true
// 不过后面如果调用他的next方法，就是done返回为trus，value为undefined

// 数组的entries()也是返回遍历器
// console.log(colors.entries());

// const iterator1=colors.entries();
// console.log(iterator1.next());//他返回的value是一个数组，返回当前元素的key跟value

// // 数组的keys()也是返回遍历器
// console.log(colors.keys());

// const iterator2=colors.keys();
// console.log(iterator1.next());//他返回的value是索引，返回值不是数组

// 数组的values()也是返回遍历器  ---现在浏览器不支持，但是在mdn上可以查到
// console.log(colors.values());

// const iterator3=colors.values();
// console.log(iterator1.next());//他返回的value是索引，返回值不是数组


// 我们在这里就进行扩展实现这个values方法
// Array.prototype.values=function(){
//     let i=0;
//     let items=this;
//     return {
//         next() {
//             const done=i>=items.length;
//             const value=done? undefined :items[i++];
//             return {
//                 value,
//                 done
//             }
//         }
//     }
// }

// const iterator3=colors.values();
// console.log(iterator3.next());//他返回的value是索引，返回值不是数组


// 生成器 Generator

// function* listColors() {
//     // 写死了的返回值
//     yield'red';//相当于return，但是yield是返回本次执行的返回值
//     yield'green';
//     yield'blue';
// }
// const color=listColors();//跟数组的entries一样的返回值,[[GeneratorStatus]]:"suspended"
// console.log(color);
// // 使用next()方法进行调用
// console.log(color.next())


// 上面的代码，是我们将返回值写死了，每次调用listColors方法，就一次返回我们写的返回值
// 下面我写一次自增的
// function* listColors() {
//     let i=0;
//     yield i;
//     i++;
//     yield i;
//     i++;
//     yield i;
// }
// // 下面的这个返回一个[[GeneratorStatus]]:"suspended"，如果里面的数值没有变量完状态为suspended
// // 如果遍历完了他的状态会变为[[GeneratorStatus]]:"closed"
// const color=listColors();//跟数组的entries一样的返回值
// console.log(color);
// // 使用next()方法进行调用
// console.log(color.next())


// 我们利用上面的特性可以实现循环一个数组
// const repos=[
//     {name:'grit',owner:'mojomo',description:'sdfsdfsdfvdfverosijcinfsdv',id:1},
//     {name:'oisofni',owner:'dsfsdvaaas',description:'sdfsdfsdfvdfverosijcinfsdv',id:2},
//     {name:'osndfiuew',owner:'opoasdjoi',description:'sdfsdfsdfvdfverosijcinfsdv',id:3}
// ];
// function* loop(arr){
//     console.log(repos);
//     // 进行循环我们的数组，每次返回当前循环的值
//     for(const repo of repos){
//         yield repo
//     }
// }
// const reGen=loop(repos);
// console.log(reGen.next());//他并不会进行打印数组中的内容，需要我们执行next方法才能进行打印


// ------------------------------------------------

// 使用 Generator 生成器 控制 ajax 工作流

// let userName;
// const userPromise = axios.get('https://api.github.com/users');
// // 打印当前登录用户的信息
// userPromise
//     .then(reponse => {
//         userName = reponse.data[0].login;
//         return axios.get(`https://api.github.com/users/${userName}/repos`);
//     })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(err => {
//         console.log(err);
//     })


// 现在使用Generator来实现上面的功能

// 定义ajax
// function ajax(url){
//     // 不断的每次调用这个方法，将返回值传入到下一个steps中执行的语句，作为他的参数
//     axios.get(url).then(res=>userGen.next(res.data));
// }

// function* steps(){
//     console.log("start!");
//     // 发送3个ajax请求
//     const users=yield ajax('https://api.github.com/users');//返回所用用户的第一个
//     console.log(users);
//     const firstUser=yield ajax(`https://api.github.com/users/${users[0].login}`);//获取第一个用户的信息
//     console.log(firstUser);
//     const followers=yield ajax(firstUser.followers_url);//获取第一个用户的关注着的一些信息
//     console.log(followers);
// }

// const userGen=steps();
// userGen.next();


// -------------------------------------------------

// Proxy---重新定义默认方法，比如说我们对象有一个name属性，我们直接对象.属性就可以获取到属性，我们可以通过
// Proxy来改变返回的属性，这样就修改了默认返回的参数，自己感觉也可以叫做过滤，可以过滤用户的输入，然后我们在读出来的时候
// 就方面， 不用在读取属性的时候在对属性进行处理。
// const person={
//     name:'jiegiser',
//     age:200
// }
// // Proxy（target,handler）第一个参数就是我们要代理的目标对象，（Proxy是让我们可以修改默认对象的属性参数的）
// // 第二个参数就是我们要执行的操作，我们重写的一些操作，他是一个对象
// const personProxy=new Proxy(person,{
//     get:function(target,key){
//         console.log(`target:${target},key:${key}`);
//         console.log(target);
//         return target[key].toUpperCase();
//     },
//     // 删除字符串中的空格。。
//     set:function(target,key,value){
//         if(typeof value === 'string'){
//             target[key]=value.trim();
//         }
//     }
// });
// personProxy.name='jieouba';
// console.log(personProxy);
// console.log(personProxy.name);

// -------------------------------------------------
// Proxy可以重写默认对象上的一些方法

// Proxy例子
// 格式化电话号码

// const phonerHandler={
//     // 存储值的时候，进行去除空格
//     set:function(target,key,value){
//         target[key]=value.match(/[0-9]/g).join('');
//     },
//     // 取出值的时候，进行格式化
//     get:function(target,key){
//         return target[key].replace(/(\d{3})(\d{4})(\d{4})/,'$1-$2-$3');
//     }
// }
// const phoneNumber=new Proxy({},phonerHandler);

// phoneNumber.home='131 1544 6565';
// phoneNumber.work='185 543 45125';

// console.log(phoneNumber);
// console.log(phoneNumber.home);
// console.log(phoneNumber.work);


// 第二个例子
// 比如有一个对象，他的属性id为小写，但是有的人就是不知道是大写还是小写，
// 我们可以通过Proxy来进行设置set方法，通过过滤进行判断将对象里面的key值以及用户输入的key进行转换为小写进行判断
// 如果有相同的就抛出异常，说明对象的属性已存在，如果不同就给对象进行添加属性


// const person={id: 2};
// person.ID=2;
// person.iD=2;
// person.Id=2;

// const safeHandler={
//     // 对用户赋值操作进行保护
//     set:function(target,key,value){
//         const likekey=Object.keys(target).find(k=>k.toLowerCase()===key.toLowerCase());
//         // 如果我们要设置的属性他不存在，或者跟我们对象 的属性相似，就抛出一个异常
//         if(!(key in target)&& likekey){
//             throw new Error(`Ooops! looks like we already have a property ${key} but with the case of ${likekey}`);
//         }
//         target[key]=value;
//     } 
// }
// const safetyProxy=new Proxy({ id: 2 },safeHandler);

// safetyProxy.ID=5;


// -------------------------------------------------

// Set数据类型
// Set集合中的元素是唯一的，不会有重复,他与数组唯一的区别就是，Set不能通过索引进行取值，或者赋值，就是一系列的集合
// const colors=new Set();
// colors.add('red'); //添加元素
// colors.add('green'); 
// colors.add('blue'); 
// // 获取长度
// console.log(colors.size);
// console.log(colors);

// 这里需要注意的是在Set中，5跟'5'是不一样的
// colors.add(5);
// colors.add('5');
// // 删除一个值,他返回值为布尔类型的，为true就说明删除成功
// console.log(colors.delete('5'));
// // 检验某一个值是否存在,他返回值为布尔类型的，为true就说明值存在
// console.log(colors.has('red'));
// // 移除掉所有的元素
// // colors.clear();

// // Set也有iterator的属性，可以通过他的values获取到SetIterator，然后进行next方法进行循环了
// const iterator=colors.values();

// console.log(iterator.next());

// for(let color of colors){
//     console.log(color);
// }

// // forEach循环
// colors.forEach((item,key,ownSet)=>{
//     console.log(item,key,ownSet);
// })


// const fruits=new Set(['apple','banana','mongo']);
// console.log(fruits);//{"apple", "banana", "mongo"},他也一个Set集合
// // 帮助数组去重
// const numbers=[1,2,3,4,5,5,5,5,5,5,5];
// const numbersSet=new Set(numbers);
// console.log(numbersSet);
// // 转换为数组
// const uniqueNumber=[...numbersSet];
// console.log(uniqueNumber);


// -------------------------------------------------
// WeakSet 

/**
 * 
 * 1. 跟Set不一样的地方就是，首先他的元素必须是对象
 * 如果添加的元素为字符串，就会报错的，
 * 2. 不能通过for of循环
 * 3. 没有forEach方法，
 * 4. 没有clear方法。
 * 5. 最大的区别就是WeakSet有自动清理的机制，不会造成内存泄漏
 */
// let jiegiser={name:'jiegiser',age:18};
// let jieouba={name:'jieouba',age:18};


// const people=new WeakSet([jiegiser,jieouba]);
// console.log(people);
// // 查看一个元素是否在WeakSet当中
// console.log(people.has(jiegiser));

// 最大的区别就是WeakSet有自动清理的机制，不会造成内存泄漏
// const peoArr=[jiegiser,jieouba];
// console.log(peoArr);//[{…}, {…}]
// jiegiser=null;
// console.log(peoArr);//[{…}, {…}],jiegiser并没有被清理掉

// 使用WeakSet
// const peoArr=new WeakSet([jiegiser,jieouba]);
// console.log(peoArr);//都变成了一个
// jiegiser=null;
// console.log(peoArr);//都变成了一个


// ---------------------------------------------------------------------------
// Map

// 存储键值对
// const people =new Map();
// people.set('jiegiser',18);//添加新的元素，jiegiser是key，18是值
// people.set('jieouba',18);
// people.set('jelly',25);

// // 他的key可以任意数据类型
// people.set({},3);

// // 获取里面的属性
// console.log(people.get('jiegiser'));
// // 获取键值对的数量
// console.log(people.size);
// // 查看某一个属性是否存在
// console.log(people.has('jiegiser'));//boolean
// // 删除元素
// // people.delete('jieouba');
// // // 删除所有属性
// // people.clear();
// console.log(people);

// // foreach循环
// people.forEach(function(value,key,map){
//     console.log(value,key,map);
// });
// // for of
// for(let person of people){
//     console.log(person);//他返回的是一个数组，数组的元素分别是键跟值
// }
// // 也可以通过下面的写法，进行解构，来获取到值跟键
// for(let [key,value] of people){
//     console.log(key,value);
// }

// // 也可以通过传入参数的方法，进行赋值
// const fruit=new Map([['apple',6],['banana',5]]);//数组中分别是键和值
// console.log(fruit);


// ---------------------------------------------------------------------------
//  Map 的应用
// 由于 Map 的 Key 可以是对象，那么我们可以用它来存储元数据。这一节我们就通过一个例子来看一下 Map 的应用。
// 可以用来存储元数据,存储对象相应的信息，而不是将信息存储到相应的对象上。
// 通过map来存储button对应的元数据，就是点击多少次等等，这样就不会发生如果我们的button的id去除之后，相应的点击的数据丢失等等

// const clickCounts=new Map();

// const buttons=document.querySelectorAll('button');
// buttons.forEach(button=>{
//     //设置默认初始值为0，每次点击之前，这里将button的Dom节点直接存储为属性，对应的键为dom，值为0，
//     clickCounts.set(button,0);
//     // 给每一个button添加点击事件，
//     button.addEventListener('click',function(){
//         // 获取到点击的button
//         const val=clickCounts.get(this);
//         // 设置点击的button的值为val+1
//         clickCounts.set(this,val+1);
//         console.log(clickCounts);
//     });
// });
// console.log(clickCounts);


// weakMap与Map的区别就是，
// 1. 如果他的属性在其他地方没有使用，WeakMap会使用垃圾回收装置自动清理，垃圾回收
// 2. WeakSet属性必须是一个对象。
// 3. WeakSet不能循环
// 4. WeakSet没有size方法

// let Jelly={name:'Jelly'};
// let miffy={name:'miffy'};
// const strong=new Map();
// const weak=new WeakMap();
// strong.set(Jelly,"jelly is a dddd");
// weak.set(miffy,'miffy is a ggggg');
// console.log(strong);
// console.log(weak);

// console.log(weak.size);//undefined
// console.log(strong.size);

// weak.clear();//报错
// strong.clear();

// weak.set('fruit','aple');//报错

// Jelly=null;
// miffy=null;


// console.log(strong)//还是存在
// console.log(weak);//已经被清空

// // 不能循环
// for(let person of weak){
//     console.log(person);
// }

// weakMap使用应用场景：
// 1. 当我们的设置的属性是对象的时候，选择使用
// 2. 当我们希望我们的对象，在使用完成后，通过垃圾回收进行自动回收优化内存，使用
// 3. 如果需要使用循环进行查看属性以及获取大小，使用Set


// var ad = ['dd', 'aa'];
// ad.filter(function (re) {
//   console.log(re);
// });
