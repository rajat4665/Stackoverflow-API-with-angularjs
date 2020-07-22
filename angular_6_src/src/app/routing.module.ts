import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StackApiComponent} from './stack-api/stack-api.component';

const routes: Routes = [
    { path: 'stackApi', component: StackApiComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
