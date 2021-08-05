import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
import { GatewayService } from 'src/app/services/gateway.service';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  device: Device = {
    uid: undefined,
    vendor: '',
    status: true,
    gatewayId: undefined
  };
  submitted = false;

  gateways?: Gateway[];

  constructor(private deviceService: DeviceService, private gatewayService: GatewayService,) { }

  ngOnInit(): void {
    this.loadGateways();
  }

  loadGateways(): void {
    this.gatewayService.getAll()
      .subscribe(
        data => {
          this.gateways = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  saveDevice(): void {
    const data = {
      uid: this.device.uid,
      vendor: this.device.vendor,
      status: this.device.status,
      gatewayId: this.device.gatewayId,
    };

    this.deviceService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDevice(): void {
    this.submitted = false;
    this.device = {
      uid: undefined,
      vendor: '',
      status: true,
      gatewayId: undefined,
    };
  }

}
