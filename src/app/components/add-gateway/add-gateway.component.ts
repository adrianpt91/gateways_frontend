import { Component, OnInit } from '@angular/core';
import { Gateway } from 'src/app/models/gateway.model';
import { GatewayService } from 'src/app/services/gateway.service';

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {
  gateway: Gateway = {
    serial: '',
    name: '',
    address: '',
    validip: false
  };
  submitted = false;

  constructor(private gatewayService: GatewayService) { }

  ngOnInit(): void {
  }

  saveGateway(): void {
    const data = {
      serial: this.gateway.serial,
      name: this.gateway.name,
      address: this.gateway.address,
      validip: this.gateway.validip,
    };

    this.gatewayService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGateway(): void {
    this.submitted = false;
    this.gateway = {
      serial: '',
      name: '',
      address: '',
      validip: false
    };
  }

}
