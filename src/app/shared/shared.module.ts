import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildCardComponent } from './components/wild-card/wild-card.component';
import { QuickWalletComponent } from './components/quick-wallet/quick-wallet.component';
import { BannerComponent } from './components/banner/banner.component';

const modules: any = [];

const components: any = [
  WildCardComponent,
  QuickWalletComponent,
  BannerComponent,
];

const directives: any = [];

const pipes: any = [];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components, ...directives, ...pipes],
})
export class SharedModule {}
