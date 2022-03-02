import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { PaisesComponent } from '../components/paises/paises.component';


const routes : Routes = [
  
  {
    path:'',
    component:PaisesComponent
  },
  


  
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }