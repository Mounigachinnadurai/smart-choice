import { Component, OnInit } from '@angular/core';
import { mirror } from '../mirror';
import { MirrorService } from '../services/mirror.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-mirror',
  templateUrl: './admin-add-mirror.component.html',
  styleUrls: ['./admin-add-mirror.component.css']
})
export class AdminAddMirrorComponent implements OnInit {
  [x: string]: any;
  addProductMessage: string | undefined;

  constructor(private mirror: MirrorService ,private router:Router) { }

  ngOnInit() :void{
  }
    submit(data: mirror) {

      this.mirror.addProduct(data).subscribe((result: any) => {
        console.warn(result);
        if (result) {
          this.addProductMessage = 'Product is added successfully';
        }
      });
      setTimeout(() => {
              this.addProductMessage = undefined
      }, 3000);
  }

}
