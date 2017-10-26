import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DocsComponent} from "./docs/docs.component";
/**
 * Created by He on 24/08/2017.
 */
export const appRoutes: Routes = [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
        },
        {path: 'home', component: HomeComponent},
        // {path: 'parent', loadChildren: './parent/parent.module#ParentModule'},
        // {path: 'css', loadChildren: './css/css.module#CssModule'},
        {
            path: 'security',
            loadChildren: './security/security.module#SecurityModule'
        },
        {
            path: 'parent',
            loadChildren: './parent/parent.module#ParentModule'
        },
// children: [
//     {
//         path: 'security1',
//         loadChildren: './security/security.module#SecurityModule'
//     },
//     {
//         path: 'security2',
//         loadChildren: './css/css.module#CssModule'
//     }
// ]

        {
            path: 'docs', component: DocsComponent
        }
        ,
    ]
;