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

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UseraddComponent,
    UserFormComponent
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
      useClass: CustomReuseStrategyService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
