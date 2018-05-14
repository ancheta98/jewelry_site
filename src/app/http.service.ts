import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  serviceProducts(){
    return this._http.get('/api/products');
  }

  postProduct(newProduct){
    console.log("SERVICE", newProduct);
    return this._http.post('/api/newProduct', newProduct); 

  }

  oneProduct(id){
    return this._http.get('/api/products/'+id)
  }

  serviceEditProduct(id, product){
    return this._http.put('/api/products/'+id, product)
  }
  
  serviceRemoveProduct(id){
    return this._http.delete('/api/products/'+id)
  }
  
}
