import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './productPage/productPage.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ReviewComponent } from './review/review.component';
import { FeatureComponent } from './feature/feature.component';
import { FramesComponent } from './frames/frames.component';
import { VaseComponent } from './vase/vase.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { LightComponent } from './light/light.component';
import { ClocksComponent } from './clocks/clocks.component';
import { MirrorComponent } from './mirror/mirror.component';
import { CupComponent } from './cup/cup.component';
import { OrderPopupComponent } from './order-popup/order-popup.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { FilterPipe } from './shared/filter.pipe';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminAddMirrorComponent } from './admin-add-mirror/admin-add-mirror.component';
import { AdminAddShelvesComponent } from './admin-add-shelves/admin-add-shelves.component';
import { AdminAddLightComponent } from './admin-add-light/admin-add-light.component';
import { AdminAddClockComponent } from './admin-add-clock/admin-add-clock.component';
import { AdminAddStatueComponent } from './admin-add-statue/admin-add-statue.component';
import { AdminUpdateCupComponent } from './admin-update-cup/admin-update-cup.component';
import { AdminUpdateMirrorComponent } from './admin-update-mirror/admin-update-mirror.component';
import { AdminUpdateShelvesComponent } from './admin-update-shelves/admin-update-shelves.component';
import { AdminUpdateLightComponent } from './admin-update-light/admin-update-light.component';
import { AdminUpdateClockComponent } from './admin-update-clock/admin-update-clock.component';
import { AdminUpdateStatueComponent } from './admin-update-statue/admin-update-statue.component';
import { AdminHomeCupComponent } from './admin-home-cup/admin-home-cup.component';
import { AdminHomeShelvesComponent } from './admin-home-shelves/admin-home-shelves.component';
import { AdminHomeMirrorComponent } from './admin-home-mirror/admin-home-mirror.component';
import { AdminHomeLightComponent } from './admin-home-light/admin-home-light.component';
import { AdminHomeClockComponent } from './admin-home-clock/admin-home-clock.component';
import { AdminHomeStatueComponent } from './admin-home-statue/admin-home-statue.component';
// import { AdminAuthComponent } from './admin-auth/admin-auth.component';
// import { UserAuthComponent } from './user-auth/user-auth.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { ShelvesDetailsComponent } from './shelves-details/shelves-details.component';
import { ShelvesCartComponent } from './shelves-cart/shelves-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LightDetailsComponent } from './light-details/light-details.component';
import { ClockDetailsComponent } from './clock-details/clock-details.component';
import { StatueDetailsComponent } from './statue-details/statue-details.component';
import { MirrorDetailsComponent } from './mirror-details/mirror-details.component';
import { StatueDetailComponent } from './statue-detail/statue-detail.component';
import { TakeOrdersComponent } from './take-orders/take-orders.component';



@NgModule({
  declarations: [																																																																
    AppComponent,
      HomeComponent,
      FooterComponent,
      HeaderComponent,
      LoginComponent,
      SignupComponent,
      ContactusComponent,
      DashboardComponent,
      ProductPageComponent,
      AddtocartComponent,
      ReviewComponent,
      FeatureComponent,
      FramesComponent,
      VaseComponent,
      SculpturesComponent,
      LightComponent,
      ClocksComponent,
      MirrorComponent,
      CupComponent,
      OrderPopupComponent,
      CheckOutComponent,
      FilterPipe,
      AdminAddProductComponent,
      AdminAddMirrorComponent,
      AdminAddShelvesComponent,
      AdminAddLightComponent,
      AdminAddClockComponent,
      AdminAddStatueComponent,
      AdminUpdateCupComponent,
      AdminUpdateMirrorComponent,
      AdminUpdateShelvesComponent,
      AdminUpdateLightComponent,
      AdminUpdateClockComponent,
      AdminUpdateStatueComponent,
      AdminHomeCupComponent,
      AdminHomeShelvesComponent,
      AdminHomeMirrorComponent,
      AdminHomeLightComponent,
      AdminHomeClockComponent,
      AdminHomeStatueComponent,
      // AdminAuthComponent,
      // UserAuthComponent,
      NewHeaderComponent,
      ProductDetailsComponent,
      CartPageComponent,
      CheckoutComponent,
      OrderComponent,
      ShelvesDetailsComponent,
      ShelvesCartComponent,
      PaymentPageComponent,
      LightDetailsComponent,
      ClockDetailsComponent,
      StatueDetailsComponent,
      MirrorDetailsComponent,
      StatueDetailComponent,
      TakeOrdersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
