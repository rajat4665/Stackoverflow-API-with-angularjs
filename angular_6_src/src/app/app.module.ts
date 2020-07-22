import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StackApiComponent } from './stack-api/stack-api.component';
import { RoutingModule } from './routing.module';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    StackApiComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
