import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { IconsProviderModule } from '../modules/icons-provider.module';

export const NGZORRO_MODULES = [
  IconsProviderModule,
  NzLayoutModule,
  NzMenuModule,
  NzTypographyModule,
];
