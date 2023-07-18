import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { ReviewComponent } from './review/review.component';
import { FeatureComponent } from './feature/feature.component';
import { CupComponent } from './cup/cup.component';
import { LightComponent } from './light/light.component';
import { FramesComponent } from './frames/frames.component';
import { MirrorComponent } from './mirror/mirror.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VaseComponent } from './vase/vase.component';
import { CheckOutComponent } from './check-out/check-out.component';
// import { PaymentComponent } from './payment/payment.component';
import { ClocksComponent } from './clocks/clocks.component';
import { HomeComponent } from './home/home.component';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminAddClockComponent } from './admin-add-clock/admin-add-clock.component';
import { AdminAddShelvesComponent } from './admin-add-shelves/admin-add-shelves.component';
import { AdminAddStatueComponent } from './admin-add-statue/admin-add-statue.component';
import { AdminAddMirrorComponent } from './admin-add-mirror/admin-add-mirror.component';
import { AdminAddLightComponent } from './admin-add-light/admin-add-light.component';
import { AdminHomeLightComponent } from './admin-home-light/admin-home-light.component';
import { AdminHomeCupComponent } from './admin-home-cup/admin-home-cup.component';
import { AdminHomeClockComponent } from './admin-home-clock/admin-home-clock.component';
import { AdminHomeShelvesComponent } from './admin-home-shelves/admin-home-shelves.component';
import { AdminHomeStatueComponent } from './admin-home-statue/admin-home-statue.component';
import { AdminHomeMirrorComponent } from './admin-home-mirror/admin-home-mirror.component';
import { AdminUpdateCupComponent } from './admin-update-cup/admin-update-cup.component';
import { AdminUpdateClockComponent } from './admin-update-clock/admin-update-clock.component';
import { AdminUpdateShelvesComponent } from './admin-update-shelves/admin-update-shelves.component';
import { AdminUpdateStatueComponent } from './admin-update-statue/admin-update-statue.component';
import { AdminUpdateMirrorComponent } from './admin-update-mirror/admin-update-mirror.component';
import { AdminUpdateLightComponent } from './admin-update-light/admin-update-light.component';
import { AuthGuard } from './auth.guard';
// import { AdminAuthComponent } from './admin-auth/admin-auth.component';
// import { UserAuthComponent } from './user-auth/user-auth.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { ShelvesDetailsComponent } from './shelves-details/shelves-details.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { LightDetailsComponent } from './light-details/light-details.component';
import { MirrorDetailsComponent } from './mirror-details/mirror-details.component';
import { StatueDetailsComponent } from './statue-details/statue-details.component';
import { ClockDetailsComponent } from './clock-details/clock-details.component';
import { TakeOrdersComponent } from './take-orders/take-orders.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'newHeader', component: NewHeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'productPage', component: ProductPageComponent },
  { path: 'contactus', component: ContactusComponent },

  {path:'home',component:HomeComponent},
  {path:'addtocart',component:AddtocartComponent},
  {path:'review',component:ReviewComponent},
  {path:'feature',component:FeatureComponent},
  {path:'cup',component:CupComponent},
  {path:'light',component:LightComponent},
  {path:'vase',component:VaseComponent},
  {path:'frames',component:FramesComponent},
  {path:'mirror',component:MirrorComponent},
  {path:'sculptures',component:SculpturesComponent},
  {path:'checkOut',component:CheckOutComponent},
  // {path:'payment',component:PaymentComponent},
  {path:'payment-page',component:PaymentPageComponent},
  {path:'clocks',component:ClocksComponent},
  {path:'cart',component:CartPageComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'order',component:OrderComponent},
  
  {path:'details/:productId',component:ProductDetailsComponent},
  {path:'shelvesdetails/:productId',component:ShelvesDetailsComponent},
  {path:'lightdetails/:productId',component:LightDetailsComponent},
  {path:'mirrordetails/:productId',component:MirrorDetailsComponent},
  {path:'statuedetails/:productId',component:StatueDetailsComponent},
  {path:'clockdetails/:productId',component:ClockDetailsComponent},

  // {path:'userAuth',component:UserAuthComponent},
  // {path:'adminAuth',component:AdminAuthComponent},

  {path:'adminAddProduct',component:AdminAddProductComponent,canActivate:[AuthGuard]},
  {path:'adminAddClock',component:AdminAddClockComponent,canActivate:[AuthGuard]},
  {path:'adminAddShelves',component:AdminAddShelvesComponent,canActivate:[AuthGuard]},
  {path:'adminAddStatue',component:AdminAddStatueComponent,canActivate:[AuthGuard]},
  {path:'adminAddMirror',component:AdminAddMirrorComponent,canActivate:[AuthGuard]},

  {path:'adminAddLight',component:AdminAddLightComponent,canActivate:[AuthGuard]},
  {path:'adminHomeCup',component:AdminHomeCupComponent,canActivate:[AuthGuard]},
  {path:'adminHomeClock',component:AdminHomeClockComponent,canActivate:[AuthGuard]},
  {path:'adminHomeShelves',component:AdminHomeShelvesComponent,canActivate:[AuthGuard]},
  {path:'adminHomeStatue',component:AdminHomeStatueComponent,canActivate:[AuthGuard]},
  {path:'adminHomeMirror',component:AdminHomeMirrorComponent,canActivate:[AuthGuard]},
  {path:'adminHomeLight',component:AdminHomeLightComponent,canActivate:[AuthGuard]},

  {path:'adminUpdateCup/:id',component:AdminUpdateCupComponent,canActivate:[AuthGuard]},
  {path:'adminUpdateClock/:id',component:AdminUpdateClockComponent,canActivate:[AuthGuard]},
  {path:'adminUpdateShelves/:id',component:AdminUpdateShelvesComponent,canActivate:[AuthGuard]},
  {path:'adminUpdateStatue/:id',component:AdminUpdateStatueComponent,canActivate:[AuthGuard]},
  {path:'adminUpdateMirror/:id',component:AdminUpdateMirrorComponent,canActivate:[AuthGuard]},
  {path:'adminUpdateLight/:id',component:AdminUpdateLightComponent,canActivate:[AuthGuard]},
  {path:'taken-order',component:TakeOrdersComponent,canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
