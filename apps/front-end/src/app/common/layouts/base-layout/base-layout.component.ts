import { Component } from '@angular/core';

@Component({
  selector: 'mn-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  title?: string;
  isCollapsed = false;
}
