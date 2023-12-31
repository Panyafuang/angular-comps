import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: async () => {
      const m = await import('./elements/elements.module');
      return m.ElementsModule;
    }
  },
  {
    path: 'collections',
    loadChildren: async() => {
      const m = await import('./collections/collections.module');
      return m.CollectionsModule;
    }
  },
  {
    path: 'views',
    loadChildren: async() => {
      const m = await import('./views/views.module');
      return m.ViewsModule;
    }
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
