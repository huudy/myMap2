import {
	Component,
	OnInit,
	OnDestroy,
	ViewChild,
	TemplateRef,
} from '@angular/core';
import { MapsService } from 'src/app/service/maps.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { NewPlaceModalComponent } from 'src/app/components/new-place-modal/new-place-modal.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
	selector: 'app-maps',
	templateUrl: 'maps.component.html',
	styleUrls: ['map.component.scss'],
})
export class MapsComponent implements OnInit, OnDestroy {
	focus1;
	newMarkerForm: FormGroup;
	public modalRef: BsModalRef;

	@ViewChild('content', { static: false })
	content: TemplateRef<any>;

	constructor(
		public mapSvc: MapsService,
		private fb: FormBuilder,
		private modalService: BsModalService // private db: AngularFirestore
	) {}
	ngOnInit() {
		var body = document.getElementsByTagName('body')[0];
		// body.classList.add('pricing');
		body.classList.add('index-page');

		this.newMarkerForm = this.fb.group({
			address: [''],
		});
	}
	ngOnDestroy() {
		var body = document.getElementsByTagName('body')[0];
		body.classList.remove('pricing');
	}
	addMarker(marker: Marker) {
		console.log('adding marker to the FIREBASE');
		marker.images = this.mapSvc.savedFiles;
		// return this.db.collection('markers').add({ marker });
	}
	mapClicked($event: any) {
		const config: ModalOptions = { class: 'modal-lg' };

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
				// this.modalService.show(this.content, config);
				const initialState = { address: data[0].formatted_address };
				this.modalRef = this.modalService.show(NewPlaceModalComponent, {
					initialState,
				});
				this.modalRef.content.onClose.subscribe((result) => {
					console.log('results', result);
					let formData = this.newMarkerForm.getRawValue();
					marker.address = formData.address;
					// this.addMarker(marker).then((marker) => {});
				});
				// .result.then(
				// 	(result) => {
				// 		console.log(result);
				// 		console.log('res:', this.newMarkerForm.getRawValue());
				// 		let formData = this.newMarkerForm.getRawValue();
				// 		marker.address = formData.address;
				// 		this.addMarker(marker).then((marker) => {});
				// 	},
				// 	(reason) => {
				// 		console.log(reason);
				// 	}
				// );
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
	onSubmit() {}
}
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
