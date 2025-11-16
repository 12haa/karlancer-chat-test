import React from 'react';
import IconButton from '../elements/IconButton';

const Header = () => {
  return (
    <header className=" flex w-full items-center min-h-[100px] justify-center px-2 bg-white">
      <div className="w-full items-center flex flex-row justify-between">
        <div className="flex items-center justify-center gap-2 ">
          <div>
            <IconButton icon="../../../../assets/icons/Notification.svg" />
          </div>
          <div>
            <IconButton icon="../../../../assets/icons/Wallet.svg" />
          </div>
        </div>
        <div>
          <IconButton icon="../../../../assets/icons/menu.svg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
