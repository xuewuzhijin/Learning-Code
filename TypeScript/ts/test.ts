
interface genericsFn {
    <T>(property:T):T;
}

var get:genericsFn = function<T>(property:T):T {
    return property;
}

console.log(get('xuewuzhijin'));
console.log(get<number>(100));