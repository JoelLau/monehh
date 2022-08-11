import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ExpensesPageComponent } from './expenses-page.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [ExpensesPageComponent],
  imports: [SharedModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
