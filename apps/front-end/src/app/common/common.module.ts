import { NgModule } from '@angular/core';
import { SHARED_DECLARATIONS as declarations } from './constants/shared-declarations';
import { SHARED_IMPORTS as imports } from './constants/shared-imports';

/**
 * Should be imported in EVERY feature module, including the root (app) module.
 */
@NgModule({
  imports,
  declarations,
  exports: [...imports, ...declarations],
})
export class CommonModule {}
