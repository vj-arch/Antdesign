import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JsonstructComponent } from "./jsonstruct/jsonstruct.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "json", component: JsonstructComponent },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)
  },
  { path: "list", loadChildren: "./list/list.module#ListModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
