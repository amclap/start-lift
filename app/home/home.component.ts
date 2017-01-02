import { Component, OnInit } from '@angular/core';
import { Home } from './shared/home.model';
import camera = require("nativescript-camera");
var appSettings = require("application-settings");
let geolocation = require("nativescript-geolocation");
let app = require("application");
@Component({
	moduleId: module.id,
	styleUrls: ['home.component.css'],
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
	// androidApp = app.android;
	home: Home[] = [];
	constructor() {
		this.getlocation();
		let context: any = app.android.context;
		let dir = context.getFilesDir();
		if (app.android) {

			console.log("我们运行在android操作系统智商!");
			console.log(context);
		} else if (app.ios) {
			console.log("We are running on iOS device");
		}
	}
	getlocation() {
		if (geolocation.isEnabled()) {
			geolocation.enableLocationRequest();
			geolocation.getCurrentLocation({ enableHighAccuracy: false, maximumAge: Infinity, timeout: 20000 }).then(data => {
				console.log(data.altitude + " " + data.longitude);
			}, error => {
				console.log("----" + error);
			})
		} else {
			console.log("未启用地理位置！！！")
		}


	}
	messageAdmin() {

		// if (app.android) {
		// 	app.android.registerBroadcastReceiver(app.android.content.Intent.ACTION_BATTERY_CHANGED,
		// 		function onReceiveCallback(context: android.content.Context, intent: android.content.Intent) {
		// 			var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
		// 			var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
		// 			var percent = (level / scale) * 100.0;
		// 			////console.log("Battery: " + percent + "%");
		// 		});
		// }
	}
	take() {
		camera.takePicture();
	}
	ngOnInit() {

	}
}