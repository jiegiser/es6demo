let firstName='jie';
let lastName="giser";
let year='2018';

// 将变量暴露出去
export {firstName,lastName,year};

// // 也可以这样写
// export let firstName='jie';
// export let lastName="giser";
// export let year='2018';

// // export不仅可以输出变量，还可以输出函数或者类
// export function multiply(x,y){
//     return x*y;
// }

// 可以通过as关键字进行输出变量名重命名
// let firstName='jie';
// let lastName="giser";
// let year='2018';

// // 将变量暴露出去
// export {firstName as v1,lastName as v2,year as v3};

// // 如果暴露的为函数，也可以使用as进行重命名
// function v1(){};
// function v2(){};
// function v3(){};
// export {v1 as firstName,v2 as lastname,v3 as year};

// // export数据输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以去到模块内部实时的值
// export let foo='bar';
// setTimeout(() => foo='baz', 500);