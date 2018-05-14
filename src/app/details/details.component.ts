import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailProduct: any;
  id: String;
  errors:any;

  constructor(private _httpService: HttpService, private _router: Router, private _route: ActivatedRoute) {
    this.detailProduct = {name: "", price: "", description: "", pic: ""}
   }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      this.id = params.get('id');
      this._httpService.oneProduct(this.id)
      .subscribe((data: object)=>{
        console.log(data);
        this.detailProduct = data;
      })
    })
  }
  componentDelete(id){
    let obs = this._httpService.serviceRemoveProduct(id);
    obs.subscribe(data => {
      this._httpService.serviceProducts();
      this._router.navigate(['home']);
    })
  }
  goBack(){
    this._router.navigate(['home']);
  }

}
