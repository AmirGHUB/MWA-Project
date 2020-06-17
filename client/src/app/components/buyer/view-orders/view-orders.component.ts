import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Order } from '../../../common/order';
import { buyerService } from '../../../services/buyer.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders: Order[];
  constructor(private router: Router, private buyerService: buyerService) { }

  ngOnInit(): void {
    let buyerId = '5ee920a906927d6f944a25ee'; ///////////////////NEEDS To bE changed static from login
    this.buyerService.getOrdersByBuyerId(buyerId)
    .subscribe(data => {
      this.orders = data;
      //console.log(data.result);
    });

  }

  printToPdf(): void {
    
  }

}
