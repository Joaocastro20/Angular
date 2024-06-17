import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";
import { ImplementationsComponent } from "./views/implementations/implementations.component";
import { JavascriptFuncionalComponent } from "./views/javascript-funcional/javascript-funcional.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  { path: "products", component: ProductCrudComponent },
  { path: "products/create", component: ProductCreateComponent },
  {
    path: "products/create/:id/:name/:price",
    component: ProductCreateComponent
  },
  {
    path: "implementations",
    component: ImplementationsComponent
  },
  {
    path: "javascript",
    component: JavascriptFuncionalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
