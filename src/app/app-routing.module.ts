import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent, NotFoundPageComponent } from './auth/containers';

const routes: Routes = [
  { path: 'login', component: AppComponent },
  { path: 'notFound', component: NotFoundPageComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
