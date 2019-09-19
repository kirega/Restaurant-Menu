import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeComponent } from './tree.component';
import { CommonModule } from '@angular/common';


describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.key ="choices"
    component.tree = {
      name: "test",
      choices: [{name: "hey"}]
    };
    // fixture.detectChanges();
    // // console.log(component);
    // let node = {}
    // component.selected(node);
    console.log(component);
    expect(component).toBeTruthy();
  });
  it('Should update node with key visible if node was not previously open', () => {
    const node = {}
    component.selected(node);
    expect(node).toEqual({visible: true});
  });
  it('Should update node with key invisible if node was previously visible', () => {
    const node = {visible: true}
    component.selected(node);
    expect(node).toEqual({visible: false});
  });
});
