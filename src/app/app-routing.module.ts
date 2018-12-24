import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'equipmentInfo', loadChildren: './pages/equipment-info/equipment-info.module#EquipmentInfoPageModule' },
  { path: 'monitoring', loadChildren: './pages/monitoring/monitoring.module#MonitoringPageModule' },
  { path: 'alarm-response', loadChildren: './pages/alarm-response/alarm-response.module#AlarmResponsePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
