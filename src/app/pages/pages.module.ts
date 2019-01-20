import { VideoCardComponent } from './../components/video-card/video-card.component';
import { SidebarContentComponent } from './../components/sidebar-content/sidebar-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SlideshowModule } from 'ng-simple-slideshow';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FictionComponent } from './fiction/fiction.component';
import { DocumentaryComponent } from './documentary/documentary.component';

@NgModule({
    declarations: [
        PagesComponent,
        HomeComponent,
        PortraitsComponent,
        ClientsComponent,
        AboutComponent,
        ContactComponent,
        EventsComponent,
        SidebarContentComponent,
        ContactFormComponent,
        FictionComponent,
        VideoCardComponent,
        DocumentaryComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        PagesRoutingModule,
        MatSidenavModule,
        SlideshowModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatCardModule
    ],
    exports: [
        PagesComponent
    ],
    providers: [],
})
export class PagesModule { }
