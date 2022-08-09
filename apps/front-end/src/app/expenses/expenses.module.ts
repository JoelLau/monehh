import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExpensesPageComponent } from './expenses-page.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  declarations: [ExpensesPageComponent],
  imports: [CommonModule, ExpensesRoutingModule],
})
export class ExpensesModule {}
