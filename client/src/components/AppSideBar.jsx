import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { fetchLoggedInUser } from '@/query/fetchLoggedInUser';
import { useQuery } from '@tanstack/react-query';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  const {
    data: user,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['me'],
    queryFn: fetchLoggedInUser,
    staleTime: 60 * 1000,
  });

  return (
    <Sidebar>
      <SidebarHeader>TalentHub</SidebarHeader>
      <SidebarContent className="py-10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-4">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-2">
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="py-5 text-xl">
                      <item.icon className="size-8 rounded-full border bg-blue-100" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-around rounded-lg border bg-white py-4 shadow-lg">
          {user && (
            <div className="flex items-center gap-4">
              <Avatar>
                  <AvatarFallback>
                    {user.userName ? user.userName.slice(0, 2) : 'NA'}
                  </AvatarFallback>
              </Avatar>
              {user.userName && <h1>{user.userName}</h1>}
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
