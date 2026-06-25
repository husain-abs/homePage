import { Component, computed, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  imports: [],
  template: `
    <span [class]="classes()">
      <ng-content />
    </span>
  `,
  styles: '',
})
export class Chip {
  @Input() variant: 'light' | 'dark' = 'light';
  @Input() color: 'blue' | 'purple' | 'teal' | 'amber' = 'blue';

  private lightMap = {
    blue: 'bg-pill-blue-bg text-pill-blue-text',
    purple: 'bg-pill-purple-bg text-pill-purple-text',
    teal: 'bg-pill-teal-bg text-pill-teal-text',
    amber: 'bg-pill-amber-bg text-pill-amber-text',
  };

  private darkMap = {
    blue: 'bg-accent-dim text-accent',
    purple: 'bg-[#1e1a3a] text-[#a78bfa]',
    teal: 'bg-[#0e2a24] text-[#5dcaa5]',
    amber: 'bg-[#2a1e0e] text-[#e8a060]',
  };

  classes = computed(() => {
    const map = this.variant === 'dark' ? this.darkMap : this.lightMap;
    return `${map[this.color]} text-[10px] px-2 py-0.5 rounded-full me-1`;
  });
}
