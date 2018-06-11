/**
 * Created by 熙冰 on 2018/6/11
 */

let name = "",age =  "     ";
if (name.trim()&&age.trim()) {
    console.log('值都有');
}else if (name.trim()||age.trim()) {
    console.log('其中一个值没有');
} else{
    console.log('值没有');
}
