import { ClarityModule } from 'clarity-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Ning1Component } from './ning-1/ning-1.component';
import { Ning2Component } from './ning-2/ning-2.component';
import { NingComponent } from './ning.component';
import { NingRoutingModule } from './ning.routing';
import { TreeModule } from 'angular-tree-component';

@NgModule({
    imports: [
        NingRoutingModule,
        CommonModule,
        FormsModule,
        TreeModule,
        ClarityModule.forRoot()
        ],
    declarations: [Ning1Component, Ning2Component, NingComponent],
    providers: [],
})

export class NingModule { }
