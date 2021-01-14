import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutusComponent } from "./components/aboutus/aboutus.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "about", component: AboutusComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
