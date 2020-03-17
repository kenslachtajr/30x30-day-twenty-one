import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTokenInterceptorService } from '@dogs-ngrx/core-data';

import { CoreDataModule } from '@dogs-ngrx/core-data';
import { CoreStateModule } from '@dogs-ngrx/core-state';
import { MaterialModule } from '@dogs-ngrx/material';
import { UiLibrariesModule } from '@dogs-ngrx/ui-libraries';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogsItemComponent } from './dogs/dogs-item/dogs-item.component';
import { DogsDetailsComponent } from './dogs/dogs-details/dogs-details.component';
import { DogsListComponent } from './dogs/dogs-list/dogs-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogsItemComponent,
    DogsDetailsComponent,
    DogsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
