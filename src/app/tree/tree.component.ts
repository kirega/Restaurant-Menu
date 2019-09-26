import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() menu: object;
  constructor() { }

  ngOnInit() {
  }

  selected(node) {
    node["visible"] = node["visible"] ? false : true;
  }
}
