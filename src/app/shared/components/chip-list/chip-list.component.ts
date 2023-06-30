import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
  standalone: true,
  imports: [MatChipsModule, NgFor],
})
export class ChipListComponent {
  @Input() chipList: string[] = [];
}
