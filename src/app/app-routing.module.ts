import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { BundlesComponent } from './components/bundles/bundles.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'contact' , component: ContactComponent},
  {path: "inventory", component: InventoryComponent},
  {path: "bundles", component: BundlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
