import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

class DataItem {
	constructor(public id: number, public name: string) { }
}

@Component({
	moduleId: module.id,
	selector: 'list-test',
	styleUrls: ['settings.component.css'],
	templateUrl: 'settings.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent {
	public myItems: Array<DataItem>;
	private counter: number;
	constructor() {
		console.log("-------------come in")
		this.myItems = [];
		this.counter = 0;
		setTimeout(() => {
			this.myItems.push(new DataItem(4, "data item " + 4));
		}, 1000)
	}
	public onItemTap(args) {
		console.log("------------------------ ItemTapped: " + args.index);
	}
}