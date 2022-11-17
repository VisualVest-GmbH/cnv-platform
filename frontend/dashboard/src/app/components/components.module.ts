import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material.module";
import { HeaderComponent } from "./header/header.component";
import { LoadingComponent } from "./loading/loading.component";
import { ObjectTreeComponent } from './object-tree/object-tree.component';
import { TimelineComponent } from "./timeline/timeline.component";
import { UserMenuComponent } from './user-menu/user-menu.component';


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        LoadingComponent,
        ObjectTreeComponent,
        TimelineComponent,
        UserMenuComponent
    ],
    exports: [
        HeaderComponent,
        LoadingComponent,
        ObjectTreeComponent,
        TimelineComponent,
        UserMenuComponent
    ],
})
export class ComponentsModule { }


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
