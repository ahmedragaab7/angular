import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-parent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.scss'],
})
export class NumberParentComponent {
  isDropdownOpen: boolean = false;
  isTooltipVisible: boolean = false;
  tooltipText: string = '';

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.icon-container')) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  editNumber() {
    console.log('تعديل الرقم clicked');
    this.isDropdownOpen = false;
  }

  cancelClassification() {
    console.log('إلغاء التصنيف clicked');
    this.isDropdownOpen = false;
  }

  truncateText(text: string, maxWords: number): string {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }

  isTextTruncated(text: string, maxWords: number): boolean {
    const words = text.split(' ');
    return words.length > maxWords;
  }

  showTooltip(event: MouseEvent, text: string) {
    this.tooltipText = text;
    this.isTooltipVisible = true;
  }

  hideTooltip() {
    this.isTooltipVisible = false;
  }
}
