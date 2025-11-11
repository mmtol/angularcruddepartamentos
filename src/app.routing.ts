import { DeptsComponent } from "./components/depts.component/depts.component";

import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CreateComponent } from "./components/create.component/create.component";
import { DetailsComponent } from "./components/details.component/details.component";

const appRoutes:Routes=
[
    {
        path:"depts",
        component:DeptsComponent
    },
    {
        path:"create",
        component:CreateComponent
    },
    {
        path:"details/:numero/:nombre/:localidad",
        component:DetailsComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing:ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);