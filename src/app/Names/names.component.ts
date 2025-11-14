import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { HttpService } from "../Services/http.service";
import { debounceTime, distinctUntilChanged, Subscription, Subject } from "rxjs";
@Component({
    selector: 'app-Names',
    templateUrl: 'names.component.html'
})
export class NamesComponent implements OnInit, OnDestroy {
    names: any[] = [];
    searchObs = new Subject<string>;
    sub = new Subscription();
    @ViewChild('input') input?: ElementRef;
    constructor(private http: HttpService) { }
    ngOnInit(): void {
        this.getNames('');
        this.sub = this.searchObs.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((res) => {
            this.getNames(res);
        })
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    trackByid(index: number, item: any) {
        return item._id
    }

    getNames(name: string) {
        this.http.get('find', `name=${name}`).subscribe(
            {
                next: (res: any) => this.names = res,
                error: (err) => console.log(err)
            }
        )
    }

    addNames(name: string) {
        this.http.post('add', { name }).subscribe(
            {
                next: (res: any) => {
                    (<HTMLInputElement>this.input?.nativeElement).value = '';
                    this.names.push(res.name);
                },
                error: (err) => console.log(err)
            }
        )
    }

    searchMethod(value: string) {
        this.searchObs.next(value);
    }
}