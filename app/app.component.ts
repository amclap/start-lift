import { Component } from "@angular/core";
import dialogs = require("ui/dialogs");

@Component({
    selector: "anmc-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    public onTap() {
        this.counter--;

    }
}
