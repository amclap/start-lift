import { NgModule } from "@angular/core"
import { HomeComponent } from "./home.component"

import { NativeScriptModule } from "nativescript-angular/platform";
@NgModule({
    imports: [NativeScriptModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule {
}