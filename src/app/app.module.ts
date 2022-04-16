import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { GraphComponent } from './graph/graph.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapDialogComponent } from './map-dialog/map-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [AppComponent, LoginComponent, GraphComponent, HeaderComponent, FooterComponent, MapDialogComponent],
  imports: [
    RouterModule,
    NgxChartsModule,
    MatSelectModule,
    FlexLayoutModule,
    GoogleMapsModule, 
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  bootstrap: [AppComponent],
  entryComponents: [MapDialogComponent],
})
export class AppModule {}
