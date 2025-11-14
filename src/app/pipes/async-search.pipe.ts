import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchlate'
})

export class PipeAsync implements PipeTransform {
    transform(value: any[], args: any):Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!value) reject([])
                const filteredArray = value.filter((obj: any) => {
                    return Object.values(obj).some((val: any) => {
                        return String(val).toLowerCase().includes(args.toLowerCase())
                    }
                    )
                })
                resolve(filteredArray)
            }, 3000)
        })
    }
}