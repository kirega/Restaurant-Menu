import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() tree: any;
  @Input() key: string;
  @Output() node = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  selected(node: any) {
    node['visible'] = node['visible'] ? false : true;
    this.node.emit(node);
  }
}
