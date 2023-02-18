import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { WalletComponent } from './wallet/wallet.component';
import { NextLeagueComponent } from './next-league/next-league.component';
import { InviteCodeComponent } from './invite-code/invite-code.component';

const components = [DashboardComponent, WalletComponent, NextLeagueComponent, InviteCodeComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, DashboardRoutingModule , SharedModule],
})
export class DashboardModule {}
