import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {
	AngularFireStorage,
	AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class MapsService {
	constructor() {} // private http: HttpClient // private storage: AngularFireStorage, // private db: AngularFirestore

	lat: number = 50.242164851442766;
	lng: number = 19;
	zoom: number = 4;
	selectedPlace;
	// task: AngularFireUploadTask;

	percentage: Observable<number>;
	snapshot: Observable<any>;
	downloadURL: string;
	savedFiles: [];
	getLocation() {
		// return this.http.get('');
	}

	startUpload(file: File, markerId) {
		// The storage path
		// const path = `places/${markerId}/${Date.now()}_${file.name}`;
		// // Reference to storage bucket
		// const ref = this.storage.ref(path);
		// // The main task
		// this.task = this.storage.upload(path, file);
		// // Progress monitoring
		// this.percentage = this.task.percentageChanges();
		// this.snapshot = this.task.snapshotChanges().pipe(
		//   tap(console.log),
		//   // The file's download URL
		//   finalize(async () => {
		//     this.downloadURL = await ref.getDownloadURL().toPromise();
		//     // this.db.collection(`markers/${markerId}`).doc().update({
		//     //   pics:
		//     // });
		//   })
		// );
	}
}
