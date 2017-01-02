import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router"
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { AppComponent } from "./app.component";
export const routes = [
    { path: "", component: HomeComponent },
    { path: "settings", component: SettingsComponent }
];
@NgModule({
    imports: [NativeScriptRouterModule, NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }