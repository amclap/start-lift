import { Component, ElementRef, ViewChild } from '@angular/core';

export class DataItem {
	constructor(public itemDesc: string) { }
}
@Component({
	moduleId: module.id,
	selector: 'tab-view-test',
	styleUrls: ['./settings.component.css'],
	templateUrl: './settings.component.html'
})
export class SettingsComponent {
	public items: Array<DataItem>;
	@ViewChild("tableView") view: any;
	constructor() {
		console.log(this.view);
		this.items = new Array<DataItem>();
		for (let i = 0; i < 5; i++) {
			this.items.push(new DataItem("item " + i));
		}

	}
}