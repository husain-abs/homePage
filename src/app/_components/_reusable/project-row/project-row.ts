import { Component, Input } from '@angular/core';
import { Project } from '../../../_data/models';

@Component({
  selector: 'app-project-row',
  imports: [],
  styles: ``,

  template: `
    <div class=" flex items-center gap-2 py-1.5 border-b border-[#1e1e34] last:border-0 rounded-md cursor-pointer transition-colors hover:bg-[#1e1e38]">
      <div class=" w-1.5 h-1.5 rounded-full shrink-0"
         [style.background]="color">
      </div>
      <span class="text-xs text-[#c4cce0]">{{ project.title }} </span>
      <span class="text-[10px] text-[#3a3a5c] ml-auto">{{ project.subtitle }}</span>
  </div>

  `,

})
export class ProjectRow {
  @Input() project!: Project;
  @Input() color!: string;
}
