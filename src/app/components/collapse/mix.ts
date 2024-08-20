import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-collapse-mix',
  template: `
    <nz-collapse  class="bg-transparent" [nzBordered]="false">
      <nz-collapse-panel class="{{collapsePanelClass}}" *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p class="text-[15px] font-normal text-light dark:text-white/60">{{ panel.name }}</p>
        <div *ngIf="panel.childPanel && panel.childPanel.length > 0">
          <nz-collapse class="bg-transparent mt-[20px]" [nzBordered]="false">
            <nz-collapse-panel class="{{collapsePanelClass}}" *ngFor="let childPanel of panel.childPanel" [nzHeader]="childPanel.name" [nzActive]="childPanel.active">
            <p class="text-[15px] font-normal text-light dark:text-white/60">{{ panel.name }} A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
            </nz-collapse-panel>
          </nz-collapse>
        </div>
      </nz-collapse-panel>
    </nz-collapse>
  `,
  styles: [`
  :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header{
    @apply text-15 font-normal text-dark/[.85] dark:text-white/[.87];
  }
  :host ::ng-deep .ant-collapse-borderless > .ant-collapse-item:last-child{
    @apply border-b-1 border-regular dark:border-white/10 border-solid;
  }
  :host ::ng-deep .ant-collapse-content > .ant-collapse-content-box{
    @apply px-6 pt-5 pb-[30px] #{!important};
  }
  :host ::ng-deep .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
    @apply text-[9px] text-light dark:text-white/60;
  }
`]
})
export class NzDemoCollapseMixComponent {
  collapsePanelClass: string = 'mb-1 font-medium text-dark bg-transparent dark:text-white/[.87] text-15 border-regular border-1 dark:border-white/10 rounded-6 [&>.ant-collapse-content]:border-none [&>.ant-collapse-header]:px-[20px] [&>.ant-collapse-header]:py-[12px] aria-expanded:[&>.ant-collapse-header]:border-b-1 [&>.ant-collapse-header]:border-regular dark:[&>.ant-collapse-header]:border-white/10';
  panels = [
    {
      active: true,
      disabled: false,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: true,
          name: 'This is panel header 1-1'
        },
        {
          active: false,
          name: 'This is panel header 1-2'
        }
      ]
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 3'
    }
  ];
}
