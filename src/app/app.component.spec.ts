import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing'

describe('AppComponent', () => {
  let app: AppComponent
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports:[RouterTestingModule]
    })
    app = new AppComponent();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practicing'`, () => {
    expect(app.title).toEqual('practicing');
  });

});
