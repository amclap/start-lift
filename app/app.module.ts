import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from '@angular/http';
import { NativeScriptModule } from "nativescript-angular/platform";
import { AppRoutingModule } from "./app.routing.module"
import { AppComponent } from "./app.component";
import { HomeModule } from "./home/home.module"
import { SettingsModule } from "./settings/settings.module"

@NgModule({
    imports: [NativeScriptModule, HttpModule, AppRoutingModule, HomeModule, SettingsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
