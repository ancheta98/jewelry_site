import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any;

  constructor(private _http: HttpService, private _router: Router) {
    this.products= [];
    this.getProducts();
   }

  ngOnInit() {
  }
  getProducts(){
    let obs = this._http.serviceProducts();
    obs.subscribe(data => {
      this.products= data;
      console.log("all products: ", this.products)
    })
  }

}
