import { HomeComponent } from "../home/customerapp.homeComponent";

export const MainRoutes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Customer', loadChildren: ()=>import('../customer/customerapp.customerModule').then((m)=>m.CustomerModule)},
    {path: 'Supplier', loadChildren: ()=>import('../supplier/customerapp.supplierModule').then((m)=>m.SupplierModule)},
    {path: '', component: HomeComponent}
];
