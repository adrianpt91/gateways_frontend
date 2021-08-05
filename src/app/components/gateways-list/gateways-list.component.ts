import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.css']
})
export class GatewaysListComponent implements OnInit {
  gateways?: Gateway[];
  currentGateway?: Gateway;
  currentIndex = -1;
  name = '';

  constructor(private gatewayService: GatewayService) { }

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

  refreshList(): void {
    this.loadGateways();
    this.currentGateway = undefined;
    this.currentIndex = -1;
  }

  setActiveGateway(gateway: Gateway, index: number): void {
    this.currentGateway = gateway;
    this.currentIndex = index;
  }

  
  searchName(): void {
    this.gatewayService.findByName(this.name)
      .subscribe(
        data => {
          this.gateways = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
