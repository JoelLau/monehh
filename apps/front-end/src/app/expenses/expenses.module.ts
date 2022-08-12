import { NgModule } from '@angular/core';
import { CommonModule } from '../common/common.module';
import { ExpensesPageComponent } from './expenses-page.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [ExpensesPageComponent],
  imports: [CommonModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
