import { useNavigate, useLocation } from 'react-router-dom';

export const SideBarElement = ({ text, to, icon }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    navigate(to);
  };

  const checkActive = () => {
    const relativePathName = pathname.split('/').at(3);
    const baseClasses =
      'm-5 cursor-pointer rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-800 hover:text-[#4A90E2]';
    const activeClasses = 'bg-gray-800 text-[#4A90E2]';
    return to === relativePathName ||
      (relativePathName === undefined && to === '')
      ? `${baseClasses} ${activeClasses}`
      : baseClasses;
  };

  return (
    <li onClick={handleClick} className={checkActive()}>
      {icon && <span className="text-gray-400">{icon}</span>}{' '}
      {/* Render the icon */}
      <span>{text}</span>
    </li>
  );
};
