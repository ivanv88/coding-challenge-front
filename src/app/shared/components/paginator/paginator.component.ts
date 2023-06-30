import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatPaginatorModule],
})
export class PaginatorComponent {
  @Input({ required: true }) defaultPage!: number | undefined;
  @Input({ required: true }) defaultLimit!: number | undefined;
  @Input({ required: true }) count!: number | null;

  @Output() paginationChange: EventEmitter<{ page: number, limit: number }> = new EventEmitter();

  pageChange(event: PageEvent): void {
    const { pageIndex, pageSize } = event;
    const page = pageIndex + 1;
    const limit = pageSize;
    this.paginationChange.emit({ page, limit });
  }
}
