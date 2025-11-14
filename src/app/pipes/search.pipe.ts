import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'searchTable'
})

export class SearchPipe implements PipeTransform {
    transform(value: any[], args: string,page:number) {
        if (!value) return [];
        if (!page) return value;

        const filteredArray = value.filter((obj: any) => {
            return Object.values(obj).some((val: any) => {
                return String(val).toLowerCase().includes(args.toLowerCase())
            }
            )
        })
        return filteredArray.slice((page*10)-9,(page*10)+1)
    }
}