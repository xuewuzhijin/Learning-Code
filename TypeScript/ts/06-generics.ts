
class MinNumber<T> {
    public list:T[] = [];
    push( val:T ):void {
        this.list.push(val)
    };
    min():T {
        var origin = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if( origin > this.list[i] ) {
                origin = this.list[i];
            }
        }
        console.log(origin);
        return origin;
    }
};

let age = new MinNumber<number>();
age.push(5);
age.push(9);
age.push(4);
age.push(2);
age.push(0);
age.min();
// 0