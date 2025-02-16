import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  contacts = [
    {
      company: 'الشركة الالمانية للابادة الحشرية',
      startDate: '1/12/2024',
      endDate: '-',
      name: 'عبدالرحيم إسماعيل ناصف',
      localMin: '7654',
      globalMin: '122',
      money: '61890 ج.م',
    },
    {
      company: 'الشركة الالمانية للابادة الحشرية',
      startDate: '1/12/2024',
      endDate: '1/12/2024',
      name: 'عبدالرحيم إسماعيل ناصف',
      localMin: '7654',
      globalMin: '122',
      money: '61890 ج.م',
    },
    {
      company: 'الشركة الالمانية للابادة الحشرية',
      startDate: '1/12/2024',
      endDate: '1/12/2024',
      name: 'عبدالرحيم إسماعيل ناصف',
      localMin: '7654',
      globalMin: '122',
      money: '61890 ج.م',
    },
    {
      company: 'الشركة الالمانية للابادة الحشرية',
      startDate: '1/12/2024',
      endDate: '1/12/2024',
      name: 'عبدالرحيم إسماعيل ناصف',
      localMin: '7654',
      globalMin: '122',
      money: '61890 ج.م',
    },
  ];

  pages = [1, 2, 3, 4, 5];
  isTooltipVisible: boolean = false;
  tooltipText: string = '';

  truncateText(text: string, maxWords: number): string {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }

  showTooltip(event: MouseEvent, text: string) {
    this.tooltipText = text;
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }
}
