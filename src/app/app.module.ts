import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UseraddComponent } from './components/useradd/useradd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategyService } from './services/custom-reuse-strategy.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseraddComponent,
    UserFormComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    ProductslistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategyService,
      
    },
    ProductService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
