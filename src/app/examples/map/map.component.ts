import { Router } from '@angular/router';
import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	NgZone,
	TemplateRef,
} from '@angular/core';
// import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MapsAPILoader } from '@agm/core';
import {
	AngularFirestore,
	AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MapsService } from 'src/app/service/maps.service';
@Component({
	selector: 'app-map',
	templateUrl: 'map.component.html',
	styleUrls: ['map.component.scss'],
})
export class MapComponent implements OnInit {
	closeResult: string;
	markers;

	markerCollectionRef: AngularFirestoreCollection<Marker>;
	marker$: Observable<Marker[]>;
	newMarkerForm: FormGroup;
	@ViewChild('search', { static: false })
	public searchElementRef: ElementRef;

	@ViewChild('classic', { static: false })
	classic: TemplateRef<any>;

	@ViewChild('errorModal', { static: false })
	errorModal: TemplateRef<any>;

	constructor(
		public mapSvc: MapsService,
		// private modalService: NgbModal,
		private mapsAPILoader: MapsAPILoader,
		private ngZone: NgZone,
		private db: AngularFirestore,
		private fb: FormBuilder,
		private router: Router
	) {
		// this.markerCollectionRef = this.db.collection('markers');
		// this.marker$ = this.markerCollectionRef.valueChanges({ idField: 'id' });
	}

	ngOnInit() {
		console.log(this.markers);
		// this.mapsAPILoader.load().then(() => {
		// 	this.setCurrentLocation();
		// });

		this.newMarkerForm = this.fb.group({
			address: [''],
		});
	}

	getMarkers() {
		this.db
			.collection('markers')
			.valueChanges({ idField: 'id' })
			.subscribe((markers) => {});
	}
	clickedMarker(marker: Marker, index: number) {
		this.router.navigateByUrl(`place/${marker.id}`);
	}

	mapClicked($event: any) {
		let marker = {
			lat: $event.coords.lat,
			lng: $event.coords.lng,
			draggable: true,
			icon: '../../assets/sports.png',
			animation: google.maps.Animation.DROP,
			address: '',
		};
		this.getFullAddressFromLatLng({
			lat: marker.lat,
			lng: marker.lng,
		})
			.then((data) => {
				console.log(data);
				this.newMarkerForm.patchValue({
					address: data[0].formatted_address,
				});
				// this.modalService
				//   .open(this.classic, {
				//     ariaLabelledBy: "modal-basic-title",
				//     windowClass: "modal-login modal-primary",
				//   })
				//   .result.then(
				//     (result) => {
				//       console.log(result);
				//       console.log("res:", this.newMarkerForm.getRawValue());
				//       let formData = this.newMarkerForm.getRawValue();
				//       marker.address = formData.address;
				//       this.addMarker(marker).then((marker) => {});
				//     },
				//     (reason) => {
				//       console.log(reason);
				//     }
				//   );
			})
			.catch((err) => {
				//dispaly dialog with error
				// this.modalService
				//   .open(this.errorModal, {
				//     ariaLabelledBy: "modal-basic-title",
				//   })
				//   .result.then(
				//     (result) => {
				//       console.log(result);
				//       console.log("res:", this.newMarkerForm.getRawValue());
				//       // this.addMarker(marker);
				//     },
				//     (reason) => {
				//       console.log(reason);
				//     }
				//   );
				console.log(err);
			});
	}

	onMouseOver(infoWindow, $event: MouseEvent) {
		infoWindow.open();
	}

	onMouseOut(infoWindow, $event: MouseEvent) {
		infoWindow.close();
	}
	onSubmit() {
		// this.modalService.dismissAll();
		console.log('res:', this.newMarkerForm.getRawValue());
	}

	addMarker(marker: Marker) {
		console.log('adding marker to the FIREBASE');
		marker.images = this.mapSvc.savedFiles;
		return this.db.collection('markers').add({ marker });
	}

	markerDragEnd(m: Marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

	// Get Current Location Coordinates
	private setCurrentLocation() {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				// this.latitude = position.coords.latitude;
				// this.longitude = position.coords.longitude;
				this.mapSvc.zoom = 8;
				// this.getAddress(this.latitude, this.longitude);
			});
		}
	}

	getFullAddressFromLatLng(latlng) {
		console.log('getting full address');
		console.log(latlng);
		return new Promise(function (resolve, reject) {
			new google.maps.Geocoder().geocode({ location: latlng }, function (
				result,
				status
			) {
				console.log(status);
				console.log(result);

				if (status == 'OK') {
					resolve(result);
				} else {
					reject(new Error('Could not find addres for lat and lng:' + latlng));
				}
			});
		});
	}

	onFileSelected(event) {
		console.log(event);
	}

	// open(content, type, modalDimension) {
	//   console.log("opening");

	//   if (modalDimension === "sm" && type === "modal_mini") {
	//     this.modalService
	//       .open(content, { windowClass: "modal-mini modal-primary", size: "sm" })
	//       .result.then(
	//         (result) => {
	//           this.closeResult = `Closed with: ${result}`;
	//         },
	//         (reason) => {
	//           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	//         }
	//       );
	//   } else if (modalDimension == undefined && type === "Login") {
	//     this.modalService
	//       .open(content, { windowClass: "modal-login modal-primary" })
	//       .result.then(
	//         (result) => {
	//           this.closeResult = `Closed with: ${result}`;
	//         },
	//         (reason) => {
	//           this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	//         }
	//       );
	//   } else {
	//     this.modalService.open(content).result.then(
	//       (result) => {
	//         this.closeResult = `Closed with: ${result}`;
	//       },
	//       (reason) => {
	//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	//       }
	//     );
	//   }
	// }

	// private getDismissReason(reason: any): string {
	//   if (reason === ModalDismissReasons.ESC) {
	//     return "by pressing ESC";
	//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	//     return "by clicking on a backdrop";
	//   } else {
	//     return `with: ${reason}`;
	//   }
	// }
}
// just an interface for type safety.
interface Marker {
	id?: number;
	lat: number;
	lng: number;
	label?: string;
	address?: string;
	images?: string[];
	draggable: boolean;
	animation: number;
	icon: string;
}
