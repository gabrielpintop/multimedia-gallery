import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultimediaListComponent } from './components/multimedia-list/multimedia-list.component';

const routes: Routes = [
  {
    path: '',
    component: MultimediaListComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
