import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Should be imported ONLY in the root module with `.forRoot()`
 *
 * example:
 * ```angular
 * // app.module.ts
 * imports: [
 *    CoreModule.forRoot()
 * ]
 * ```
 */
@NgModule({
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
    };
  }
}
