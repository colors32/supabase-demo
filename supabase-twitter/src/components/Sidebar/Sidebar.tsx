import React from 'react'
import LogoDevIcon from '@mui/icons-material/LogoDev';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SidebarListItem from './SidebarListItem';

const sidebarList = ["Home", "Explore", "Hoge", "Moge", "Huga", "Piyo"];

const currentView = "Home";

const Sidebar = () => {
  return (
    <div className='bg-slate-800 flex flex-col px-5'>
      <div className='text-white p-3 mb-3'>
        <LogoDevIcon />
      </div>
      <ul className='grow'>
        {sidebarList.map(item => (
          <SidebarListItem item={item} currentView={currentView} />
        ))}
      </ul>
      <div>
        <div className='text-white pb-3'>
          <AccountCircleIcon style={{fontSize: 40}} />
          <p className='font-bold pt-1'>Shimeji Yaki</p>
          <p className='text-sm text-gray-400 pt-1'>@nemuiyometyametya</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar