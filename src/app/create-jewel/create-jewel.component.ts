import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-create-jewel',
  templateUrl: './create-jewel.component.html',
  styleUrls: ['./create-jewel.component.css']
})
export class CreateJewelComponent implements OnInit {
  newProduct: any;
  errors:any;
  constructor(private _httpService: HttpService, private _router: Router) { 
    this.newProduct= {name: "", price: "", description: "", pic: ""}
    this.errors =[];
  }

  ngOnInit() {
  }
  addErrors(errors){
    for (var key in errors){
      this.errors.push(errors[key].message);
      console.log(this.errors);
    }
  }

  //USE ARROW FUNCTIONS IN TS FILES!!!!!
  createProduct(newProduct){
    this._httpService.postProduct(this.newProduct)
    .subscribe((data:any)=>{
      this.errors = [];
      if(data.errors){
        this.addErrors(data.errors)
      }else{
        this._router.navigate(['home']);
        // console.log('wathappen')
      }
    })
  }


}
