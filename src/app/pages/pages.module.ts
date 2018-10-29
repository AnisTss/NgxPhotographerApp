import { MatSidenavModule } from '@angular/material/sidenav';
import { SlideshowModule } from 'ng-simple-slideshow';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        PortraitsComponent,
        ClientsComponent,
        AboutComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        PagesRoutingModule,
        MatSidenavModule,
        SlideshowModule
    ],
    exports: [
        PagesComponent
    ],
    providers: [],
})
export class PagesModule { }
