import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cart, order } from '../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  paymentForm!: FormGroup;
  showSuccessMessage: boolean = false;
  show = false;
  totalPrice: number | undefined;
  cartData: cart[] | undefined;
  orderMsg: string | undefined;

  openpopup() {
    this.show = true;
  }
  closepopup() {
    this.show = false;
  }

  constructor(private formBuilder: FormBuilder, private product: ProductService, private router: Router) { }

  ngOnInit() {
    this.product.currentCart().subscribe((result) => {

      let price = 0;
      this.cartData = result;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })
      this.totalPrice = price + (price / 10) + 100 - (price / 10);

      console.warn(this.totalPrice);

    })


    this.paymentForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      nameOnCard: ['', [Validators.required, Validators.minLength(4)]],
      // creditCardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      creditCardNumber: ['', [Validators.required, Validators.pattern(/^\d{4}\d{4}\d{4}\d{4}$/)]],
      expiryMonth: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^([0-2][1-9]|3[0-1])$/)]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
    });

  }



  orderNow(data: { email: string, address: string, contact: string }) {
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse(user).id;
    if (this.totalPrice) {
      let orderData: order = {
        ...data,
        totalPrice: this.totalPrice,
        userId,
        id: undefined
      }

      this.cartData?.forEach((item) => {
        setTimeout(() => {
          item.id && this.product.deleteCartItems(item.id);
        }, 700)
      })

      this.product.orderNow(orderData).subscribe((result) => {
        if (result) {
          this.orderMsg = "Order has been placed";
          setTimeout(() => {
            this.orderMsg = undefined;
            this.router.navigate(['/my-orders'])
          }, 4000);

        }

      })
    }






    // onSubmit(): void {
    //   if (this.paymentForm.valid) {
    //     // Perform submit action here
    //     alert('Payment Successful !!');
    //     this.showSuccessMessage = true;

    //   } else {
    //     // Handle invalid form submission
    //     alert('Form submission failed. Please check the form.');
    //   }
    // }

  }
}
