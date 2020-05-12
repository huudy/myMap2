import { BrowserModule } from '@angular/platform-browser';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationModule } from './presentation/presentation.module';

import { IndexComponent } from './index/index.component';
import { SectionsComponent } from './sections/sections.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { LandingpageComponent } from './examples/landingpage/landingpage.component';
import { AboutusComponent } from './examples/aboutus/aboutus.component';
import { Error500Component } from './examples/500error/500error.component';
import { AccountsettingsComponent } from './examples/accountsettings/accountsettings.component';
import { BlogpostComponent } from './examples/blogpost/blogpost.component';
import { BlogpostsComponent } from './examples/blogposts/blogposts.component';
import { ChatpageComponent } from './examples/chatpage/chatpage.component';
import { CheckoutpageComponent } from './examples/checkoutpage/checkoutpage.component';
import { ContactusComponent } from './examples/contactus/contactus.component';
import { EcommerceComponent } from './examples/ecommerce/ecommerce.component';
import { ErrorComponent } from './examples/error/error.component';
import { InvoicepageComponent } from './examples/invoicepage/invoicepage.component';
import { LoginpageComponent } from './examples/loginpage/loginpage.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { MapsComponent } from './examples/maps/maps.component';
import { ProductpageComponent } from './examples/productpage/productpage.component';
import { ResetpageComponent } from './examples/resetpage/resetpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PictureUploadComponent } from './components/picture-upload/picture-upload.component';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { MapComponent } from './examples/map/map.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AngularFireStorageModule } from '@angular/fire/storage/public_api';
import { AngularFirestoreModule } from '@angular/fire/firestore/public_api';
import { NewPlaceModalComponent } from './components/new-place-modal/new-place-modal.component';
import { DropzoneDirective } from './dropzone.directive';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		ProfilepageComponent,
		RegisterpageComponent,
		LandingpageComponent,
		SectionsComponent,
		AboutusComponent,
		Error500Component,
		AccountsettingsComponent,
		BlogpostComponent,
		BlogpostsComponent,
		ChatpageComponent,
		CheckoutpageComponent,
		ContactusComponent,
		EcommerceComponent,
		ErrorComponent,
		InvoicepageComponent,
		LoginpageComponent,
		PricingComponent,
		ProductpageComponent,
		ResetpageComponent,
		NavbarComponent,
		FooterComponent,
		PictureUploadComponent,
		MapComponent,
		MapsComponent,
		NewPlaceModalComponent,
		DropzoneDirective,
		UploaderComponent,
		UploadTaskComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		BsDropdownModule.forRoot(),
		ProgressbarModule.forRoot(),
		PresentationModule,
		TooltipModule.forRoot(),
		TimepickerModule.forRoot(),
		PopoverModule.forRoot(),
		CollapseModule.forRoot(),
		TagInputModule,
		JwBootstrapSwitchNg2Module,
		AngularMultiSelectModule,
		TabsModule.forRoot(),
		PaginationModule.forRoot(),
		AlertModule.forRoot(),
		BsDatepickerModule.forRoot(),
		CarouselModule.forRoot(),
		ModalModule.forRoot(),
		AngularFireModule.initializeApp(environment.firebaseConfig),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyC3nPmrspq_UxlMT5wHV5Y22gbZuUwmFao',
			libraries: ['places'],
		}),
		AngularFirestoreModule,
		AngularFireStorageModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [NewPlaceModalComponent],
})
export class AppModule {}
