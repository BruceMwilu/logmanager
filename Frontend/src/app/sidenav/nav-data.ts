import { INavbarData } from "./helper";

export const navbarData:  INavbarData[]= [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
   
    {
        routeLink: 'supportengineer',
        icon: 'fal fa-tags',
        label: 'SupportEngineer',
        items: [
            {
                routeLink: 'supportengineer/list',
                label: 'List SupportEngineer'
            },
            {
                routeLink: 'supportengineer/create',
                label: 'Create SupportEngineer'
            }
        ]
    },
    {
        routeLink: 'microservices',
        icon: 'fal fa-chart-bar',
        label: 'microservices',
        items: [
            {
                routeLink: 'microservices/listed',
                label: 'List microservices'
            },
            {
                routeLink: 'microservices/created',
                label: 'Create microservices'
            }
        ]
    },
  
    {
        routeLink: 'logs',
        icon: 'fal fa-file',
        label: 'Logs'
    },

];