import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',

  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  @Input() items: any[] = [];
  @Input() page: any = 1;
  @Input() collectionSize: any = 1;
  @Output() itemsChange: EventEmitter<any> = new EventEmitter<any>();
  pageSize = 5;

  constructor() {

  }



  refreshItems() {
    this.items = this.items.map((items, i) => ({ id: i + 1, ...items })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize,
    );
    let data = {
      page: this.page,
      pageSize: this.pageSize
    }
    debugger;
    this.itemsChange.emit(data);
  }
}
