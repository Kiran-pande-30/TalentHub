import { SideBarElement } from './SideBarElement';
import {
  HomeIcon,
  DocumentIcon,
  CogIcon,
  UsersIcon,
  UserIcon,
} from '@heroicons/react/outline';

import { useNavigate } from 'react-router-dom';

const UserSidebar = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  return (
    <div className="sticky top-0 col-span-12 hidden h-screen bg-gray-900 px-5 py-16 text-xl text-gray-200 lg:col-span-3 lg:block">
      <div className="text-4xl font-semibold text-center p-inherit" onClick = {handleClick} style={{ color: '#40A2C9' }}>
        TalentHub
      </div>
      <ul>
        <SideBarElement
          text="Overview"
          to=""
          icon={<HomeIcon className="h-5 w-5" />}
        />
        <SideBarElement
          text="Applications"
          to="applications"
          icon={<DocumentIcon className="h-5 w-5" />}
        />
        <SideBarElement
          text="My Works"
          to="works"
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <SideBarElement
          text="Profile"
          to="profile"
          icon={<UserIcon className="h-5 w-5" />}
        />
        <SideBarElement
          text="Settings"
          to="settings"
          icon={<CogIcon className="h-5 w-5" />}
        />
      </ul>
    </div>
  );
};

export default UserSidebar;
