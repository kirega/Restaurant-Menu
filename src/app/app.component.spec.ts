import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule
      ],
      declarations: [
        AppComponent,
        TreeComponent
      ],
    }).compileComponents();
  }));

  beforeEach(()=> {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  })
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'menu'`, () => {
    expect(app.title).toEqual('menu');
  });
});
