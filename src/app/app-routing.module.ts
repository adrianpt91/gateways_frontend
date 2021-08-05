import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { GatewayDetailsComponent } from './components/gateway-details/gateway-details.component';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'gateways', component: GatewaysListComponent },
  { path: 'gateways/:id', component: GatewayDetailsComponent },
  { path: 'add', component: AddGatewayComponent },
  { path: 'devices', component: DevicesListComponent },
  { path: 'devices/:id', component: DeviceDetailsComponent },
  { path: 'add-device', component: AddDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
