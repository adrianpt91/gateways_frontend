import { Component, OnInit } from '@angular/core';
import { DeviceService } from 'src/app/services/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { GatewayService } from 'src/app/services/gateway.service';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

  currentDevice: Device = {
    uid: undefined,
    vendor: '',
    status: true
  };
  message = '';

  gateways?: Gateway[];

  constructor(
    private deviceService: DeviceService,
    private gatewayService: GatewayService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getDevice(this.route.snapshot.params.id);
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

  getDevice(id: string): void {
    this.deviceService.get(id)
      .subscribe(
        data => {
          this.currentDevice = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateStatus(status: boolean): void {
    const data = {
      uid: this.currentDevice.uid,
      vendor: this.currentDevice.vendor,
      status: status
    };

    this.deviceService.update(this.currentDevice.id, data)
      .subscribe(
        response => {
          this.currentDevice.status = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateDevice(): void {
    this.deviceService.update(this.currentDevice.id, this.currentDevice)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'This Device was update correctly';
        },
        error => {
          console.log(error);
        });
  }

  deleteDevice(): void {
    this.deviceService.delete(this.currentDevice.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/devices']);
        },
        error => {
          console.log(error);
        });
  }

}
