import { Routes } from '@angular/router';
import { Home } from '../component/home/home';
import { Cctv } from '../component/cctv/cctv';
import { Computer } from '../component/computer/computer';
import { Led } from '../component/led/led';
import { Laptop } from '../component/laptop/laptop';

export const layOutRoutes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'cctv',
        component: Cctv
    },
    {
        path: 'computer',
        component: Computer
    },
    {
        path: 'led',
        component: Led
    },
    {
        path: 'laptop',
        component: Laptop
    }

];