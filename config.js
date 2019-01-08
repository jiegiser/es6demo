// 包含我们项目的所用的配置信息
// const apikey='abc123';

// 使用默认导出我们的变量

// export default apikey;

// 也可以使用匿名导出,在其他地方使用的时候，必须要用同样的命名。以及需要使用{}大括号进行包裹
// 匿名可以导出多个内容
// export const age=23;
// export const apikey='bbbbbb';


// // 也可以导出函数

// export function greet(name){
//     console.log(`Hello ${name}`);
// }

// 如果我们要导出很多，可以用下面的代码
// const age=23;
// const apikey='bbbbbb';
// 

// 也可以导出函数

// function greet(name){
    // console.log(`Hello ${name}`);
// }
// export { age,apikey,greet }

// 如果想要将变量导出为其他名称，可以在导出的时候，通过as进行重命名
// export { age,apikey as key,greet }


export const url='http://jiegiser.win'