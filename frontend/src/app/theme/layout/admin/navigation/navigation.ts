export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}
export const NavigationItems: NavigationItem[] = [
  
  {
    id: 'Main App',
    title: 'Main App',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'Jobs',
        title: 'Jobs',
        type: 'collapse',
        icon: 'feather icon-briefcase',
        children: [
          {
            id: 'All Jobs',
            title: 'All Jobs',
            type: 'item',
            url: '/all-jobs',
          },
          {
            id: 'Daily Board',
            title: 'Daily Board',
            type: 'item',
            url: '/tables/bootstrap',
          }
        ]
      },
      {
        id: 'Fleet',
        title: 'Fleet',
        type: 'item',
        icon: 'feather icon-bookmark',  // Truck icon for Fleet
        url: '/fleet',
        classes: 'nav-item'
      },
      {
        id: 'customers',
        title: 'Customers',
        type: 'item',
        url: '/customers',
        icon: 'feather icon-users',
        classes: 'nav-item'
      }
      
    ]
}

];
