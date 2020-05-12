import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-new-place-modal',
	templateUrl: './new-place-modal.component.html',
	styleUrls: ['./new-place-modal.component.scss'],
})
export class NewPlaceModalComponent implements OnInit {
	public address;
	public onClose: Subject<boolean>;
	constructor(private _bsModalRef: BsModalRef) {}

	ngOnInit(): void {
		this.onClose = new Subject();
		console.log('newplacemodal');
		console.log(this.address);
	}

	public onConfirm(): void {
		this.onClose.next(true);
		this._bsModalRef.hide();
	}

	public onCancel(): void {
		this.onClose.next(false);
		this._bsModalRef.hide();
	}
}
