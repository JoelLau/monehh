import { NgModule } from '@angular/core';
import { SHARED_DECLARATIONS as declarations } from './shared-declarations';
import { SHARED_IMPORTS as imports } from './shared-imports';

/**
 * Should be imported in EVERY feature module, including the root (app) module.
 */
@NgModule({
  imports,
  declarations,
  exports: [...imports, ...declarations],
})
export class SharedModule {}
