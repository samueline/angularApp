import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  
  form: FormGroup;
  id:string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService :ProductsService,
    private router : Router,
    private activeRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params:Params)=>{
    this.id = params.id;
    this.productsService.getProduct(this.id)
    .subscribe(product =>{
      this.form.patchValue(product)
    });

    });
  }


  saveProduct(event :Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct)=>{
        this.router.navigate(['./admin/products']);
      }
      )
    }




  }
  private buildForm(){
    this.form = this.formBuilder.group({
      title:['', Validators.required],
      price:['', Validators.required],
      image:[''],
      description:['', Validators.required]

    });
  }
}
