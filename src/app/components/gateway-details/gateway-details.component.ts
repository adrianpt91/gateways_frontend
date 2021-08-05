import { Component, OnInit } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Gateway } from 'src/app/models/gateway.model';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {
  currentGateway: Gateway = {
    serial: '',
    name: '',
    address: '',
    validip: false
  };
  message = '';

  constructor(
    private gatewayService: GatewayService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getGateway(this.route.snapshot.params.id);
  }

  getGateway(id: string): void {
    this.gatewayService.get(id)
      .subscribe(
        data => {
          this.currentGateway = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateValidIP(validip: boolean): void {
    const data = {
      serial: this.currentGateway.serial,
      name: this.currentGateway.name,
      address: this.currentGateway.address,
      validip: validip
    };

    this.gatewayService.update(this.currentGateway.id, data)
      .subscribe(
        response => {
          this.currentGateway.validip = validip;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }
  

  updateGateway(): void {
    this.gatewayService.update(this.currentGateway.id, this.currentGateway)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'This Gateway was update correctly';
        },
        error => {
          console.log(error);
        });
  }

  deleteGateway(): void {
    this.gatewayService.delete(this.currentGateway.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/gateways']);
        },
        error => {
          console.log(error);
        });
  }

}
