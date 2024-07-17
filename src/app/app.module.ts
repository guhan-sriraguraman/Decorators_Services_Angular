import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForsComponent } from './ng-fors/ng-fors.component';
import { AddListComponent } from './add-list/add-list.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { LifeHooksDummyComponent } from './life-hooks-dummy/life-hooks-dummy.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { EmoployeeComponent } from './emoployee/emoployee.component';


@NgModule({
  declarations: [
    AppComponent,
    NgForsComponent,
    AddListComponent,
    LifeCycleHooksComponent,
    LifeHooksDummyComponent,
    ReactiveFormsComponent,
    CustomerAddComponent,
    CustomerViewComponent,
    StudentAddComponent,
    StudentViewComponent,
    EmoployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
