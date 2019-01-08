// 在这里使用我们在index中导出的信息
import { url } from '../config';
import slug from 'slug';
import md5 from 'md5';


export default function User(name,email){
    return{
        // name:name,可以简写为下面的这个
        name,
        email
    }
}

// 通过引入slug包，可以将用户输入的不规则的url进行转换npm install slug --save
export function createURL(name){
    return `${url}/user/${slug(name)}`;//通过slug过滤
}
// 使用第三方库生成邮箱的hash值,来生成头像
export function gravatr(email){
    return `https://www.gravatar.com/avatar/${md5(email)}`
}