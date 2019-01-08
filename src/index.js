import { uniq } from 'lodash';
// 引入我们的config文件
// 默认导出的时候，我们可以随便命名变量进行接收这个变量
// import apikey from '../config';

// 匿名导出，需要用{}
// import { apikey } from '../config'

// 使用匿名导出多个的时候，直接在{}里面写上导出的命名就可以了
// import { apikey,age } from '../config'


// 导出函数greet

// import { key,age,greet } from '../config'

// 在引入的时候，我们也可以通过as关键字进行将引入的变量进行重命名
// import { key as apikey,age,greet } from '../config'
// greet('jiegiser');
// console.log(age);
// console.log(apikey);//在没有导出的时候，他会打印一个空对象
// import moment from 'moment';

// const arr = [1, 22, 1, 22, 123, 123, 2255, 22];
// console.log(arr);

// console.log(uniq(arr)); /* 用于给数组去重*/






import User,{ createURL,gravatr } from './user';
const jiegiser=new User('jiegiser','jiegiser@163.com');
const profile=createURL(jiegiser.name);
const image=gravatr(jiegiser.email);

console.log(image);
console.log(profile);
console.log(jiegiser);