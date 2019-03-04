import { Component, OnInit } from '@angular/core';
import { TYPES, OPERATORS } from '../core/constant/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  typeList = TYPES;
  currentGroups = [];
  groupCounter = 0;
  itemCounter = 0;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Add new group
   */
  addGroup = () => {
    this.currentGroups.push({
      id: ++this.groupCounter,
      items: []
    });
  }

  /**
   * Add new item
   */
  addItem = (groupIndex: number) => {
    this.currentGroups[groupIndex].items.push({
      id: ++this.itemCounter,
    });
  }

  /**
   * Manage type change
   */
  onTypeChange = (type: string, item: any) => {
    item.operators = OPERATORS.filter(o => o.type.includes(type));
    item.selectedOperator = item.operators[0].id;
  }

  /**
   * Remove Item
   */
  removeItem = (groupIndex: number, itemIndex: number) => {
    this.currentGroups[groupIndex].items.splice(itemIndex, 1);
    if (this.currentGroups[groupIndex].items.length === 0) {
      this.currentGroups.splice(groupIndex, 1);
    }
  }
}
