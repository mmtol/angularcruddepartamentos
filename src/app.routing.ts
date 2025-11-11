import { DeptsComponent } from "./components/depts.component/depts.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CreateComponent } from "./components/create.component/create.component";

const appRoutes:Routes=
[
    {
        path:"depts",
        component:DeptsComponent
    },
    {
        path:"create",
        component:CreateComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);