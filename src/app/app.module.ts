import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGatewayComponent } from './components/add-gateway/add-gateway.component';
import { GatewayDetailsComponent } from './components/gateway-details/gateway-details.component';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGatewayComponent,
    GatewayDetailsComponent,
    GatewaysListComponent,
    AddDeviceComponent,
    DeviceDetailsComponent,
    DevicesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
