import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleModule} from "./modules/article/article.module";
import {CategoryModule} from "./modules/category/category.module";
import {ContractModule} from "./modules/contract/contract.module";
import {CustomerModule} from "./modules/customer/customer.module";
import {EmployeeModule} from "./modules/employee/employee.module";
import {ImageModule} from "./modules/image/image.module";
import {ProductModule} from "./modules/product/product.module";
import {RoleModule} from "./modules/role/role.module";
import {StatusModule} from "./modules/status/status.module";
import {UserModule} from "./modules/user/user.module";
import {UserHasRoleModule} from "./modules/user-has-role/user-has-role.module";
import {FinaceModule} from "./modules/finace/finace.module";
import {HomePageModule} from "./modules/home-page/home-page.module";
import {ArticlePageModule} from "./modules/article-page/article-page.module";
import {HttpClientModule} from "@angular/common/http";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
// import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    CategoryModule,
    ContractModule,
    CustomerModule,
    EmployeeModule,
    ImageModule,
    ProductModule,
    RoleModule,
    StatusModule,
    UserModule,
    UserHasRoleModule,
    FinaceModule,
    HomePageModule,
    ArticlePageModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{
}
