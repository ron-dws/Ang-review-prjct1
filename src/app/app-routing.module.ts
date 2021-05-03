import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremierCicleComponent } from './Components/Students/premier-cicle/premier-cicle.component';
import { SecondCicleComponent } from './Components/Students/second-cicle/second-cicle.component';

const routes: Routes = [
  {path: 'premiercicle', component: PremierCicleComponent},
  {path: 'secondcicle', component: SecondCicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ PremierCicleComponent, SecondCicleComponent]
