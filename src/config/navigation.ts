import {
  LayoutDashboard,
  Users,
  UserCog,
  Calendar,
  Package,
  CreditCard,
  BarChart2,
  MessageSquare,
  CalendarClock,
  Dumbbell,
  Shield,
  Users2,
  Megaphone,
  Settings,
  ClipboardList,
  Target,
  Bell
} from 'lucide-react';
import { NavigationSection } from '../types/navigation';

export const navigationConfig: NavigationSection[] = [
  {
    title: 'Main',
    items: [
      { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
      { 
        icon: Users, 
        label: 'Members', 
        path: '/members',
        subItems: [
          { icon: Users, label: 'All Members', path: '/members' },
          { icon: Users, label: 'Add Member', path: '/members/add' },
          { icon: Target, label: 'Member Goals', path: '/members/goals' }
        ]
      },
      { 
        icon: UserCog, 
        label: 'Staff', 
        path: '/staff',
        subItems: [
          { icon: UserCog, label: 'All Staff', path: '/staff' },
          { icon: UserCog, label: 'Trainers', path: '/staff/trainers' },
          { icon: ClipboardList, label: 'Schedules', path: '/staff/schedules' }
        ]
      }
    ]
  },
  {
    title: 'Management',
    items: [
      { 
        icon: Calendar, 
        label: 'Classes', 
        path: '/classes',
        subItems: [
          { icon: Calendar, label: 'Class Schedule', path: '/classes' },
          { icon: Calendar, label: 'Add Class', path: '/classes/add' },
          { icon: Users, label: 'Attendance', path: '/classes/attendance' }
        ]
      },
      { 
        icon: Package, 
        label: 'Products', 
        path: '/products',
        subItems: [
          { icon: Package, label: 'Inventory', path: '/products' },
          { icon: Package, label: 'Add Product', path: '/products/add' },
          { icon: Package, label: 'Categories', path: '/products/categories' }
        ]
      },
      { 
        icon: CreditCard, 
        label: 'Payments', 
        path: '/payments',
        subItems: [
          { icon: CreditCard, label: 'Transactions', path: '/payments' },
          { icon: CreditCard, label: 'Subscriptions', path: '/payments/subscriptions' },
          { icon: CreditCard, label: 'Invoices', path: '/payments/invoices' }
        ]
      }
    ]
  },
  {
    title: 'Analytics',
    items: [
      { icon: BarChart2, label: 'Reports', path: '/reports' },
      { icon: MessageSquare, label: 'Feedback', path: '/feedback' }
    ]
  },
  {
    title: 'Operations',
    items: [
      { 
        icon: CalendarClock, 
        label: 'Events', 
        path: '/events',
        subItems: [
          { icon: CalendarClock, label: 'All Events', path: '/events' },
          { icon: CalendarClock, label: 'Add Event', path: '/events/add' }
        ]
      },
      { 
        icon: Dumbbell, 
        label: 'Equipment', 
        path: '/equipment',
        subItems: [
          { icon: Dumbbell, label: 'Inventory', path: '/equipment' },
          { icon: Dumbbell, label: 'Maintenance', path: '/equipment/maintenance' }
        ]
      }
    ]
  },
  {
    title: 'System',
    items: [
      { icon: Shield, label: 'Security', path: '/security' },
      { icon: Users2, label: 'Referrals', path: '/referrals' },
      { icon: Megaphone, label: 'Marketing', path: '/marketing' },
      { icon: Bell, label: 'Notifications', path: '/notifications' },
      { icon: Settings, label: 'Settings', path: '/settings' }
    ]
  }
];