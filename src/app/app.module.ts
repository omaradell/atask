import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import for two-way data binding
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { ImageComponent } from './image/image.component';
import { NameComponent } from './name/name.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ResourceTypeComponent } from './resource-type/resource-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationsComponent,
    WorkingHoursComponent,
    ImageComponent,
    NameComponent,
    HeaderComponent,
    ResourceTypeComponent,
  ],
  imports: [
    
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // Add FormsModule for two-way data binding
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
