import { TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent',()=>{
    beforeEach(()=>TestBed.configureTestingModule({
        declarations:[AdminComponent]
    }))

    it('Admin app created',()=>{
        const fixture = TestBed.createComponent(AdminComponent);
        const appAdmin = fixture.componentInstance;
        expect(appAdmin).toBeTruthy();
    })

    it('h1 have value as Admin Component worked',()=>{
        const fixture = TestBed.createComponent(AdminComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement
        expect(compiled.querySelector('h1')?.textContent).toContain('Admin Component worked')
    })
})