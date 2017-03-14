import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { Ning1Component } from './ning-1/ning-1.component';
import { Ning2Component } from './ning-2/ning-2.component';
import { NingComponent } from './ning.component';

const NingRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: Ning1Component },
            { path: 'ning-2', component: Ning2Component },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(NingRoutes)],
    exports: [RouterModule],
})
export class NingRoutingModule { }

export const routedComponents = [NingComponent];