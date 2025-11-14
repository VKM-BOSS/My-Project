

export class MathService{
    add(a:number,b:number){
        return a+b;
    }
    subtract(a:number,b:number){
        return a-b;
    }
    multiply(a:number,b:number){
        return a*b;
    }
    divide(a:number,b:number){
        if(a==0 || b== 0){
            throw new Error('Cannot divide 0 or divided by 0')
        }
        return a/b;
    }
}