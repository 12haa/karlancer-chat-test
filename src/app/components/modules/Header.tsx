import React from 'react';
import IconButton from '../elements/IconButton';

const Header = () => {
  return (
    <header className=" flex w-full items-center min-h-[100px] justify-center px-2 bg-rose-300">
      <div className="w-full items-center bg-blue-500 flex flex-row justify-between">
        <div className="flex items-center justify-center gap-2 ">
          <div>
            <IconButton />
          </div>
          <div>
          
            <IconButton />
          </div>
        </div>
        <div>
          <IconButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
