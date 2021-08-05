import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.css']
})
export class DevicesListComponent implements OnInit {

  devices?: Device[];
  currentDevice?: Device;
  currentIndex = -1;
  vendor = '';

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices(): void {
    this.deviceService.getAll()
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.loadDevices();
    this.currentDevice = undefined;
    this.currentIndex = -1;
  }

  setActiveDevice(device: Device, index: number): void {
    this.currentDevice = device;
    this.currentIndex = index;
  }

  
  searchVendor(): void {
    this.deviceService.findByVendor(this.vendor)
      .subscribe(
        data => {
          this.devices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
