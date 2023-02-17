import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildCardComponent } from './components/wild-card/wild-card.component';

const modules: any = [];

const components: any = [];

const directives: any = [];

const pipes:any = []

@NgModule({
  declarations: [WildCardComponent],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components, ...directives,...pipes],
})
export class SharedModule {}
