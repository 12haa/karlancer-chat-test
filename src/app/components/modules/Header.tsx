'use client';
import React, { useState } from 'react';
import IconButton from '../elements/IconButton';
import Drawer from '../elements/Drawer';

const Header = () => {
  const [drawerContent, setDrawerContent] = useState<'notifications' | 'wallet' | 'menu' | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (content: 'notifications' | 'wallet' | 'menu') => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    // Add a small delay to ensure animation completes before unmounting
    setTimeout(() => {
      setDrawerContent(null);
    }, 300);
  };

  return (
    <header className="flex w-full items-center min-h-[100px] justify-center px-2 bg-white">
      <div className="w-full items-center flex flex-row justify-between">
        <div>
          <IconButton icon="../../../../assets/icons/menu.svg" onClick={() => openDrawer('menu')} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <IconButton
              icon="../../../../assets/icons/Notification.svg"
              onClick={() => openDrawer('notifications')}
            />
          </div>
          <div>
            <IconButton
              icon="../../../../assets/icons/Wallet.svg"
              onClick={() => openDrawer('wallet')}
            />
          </div>
        </div>
      </div>
      {drawerContent && (
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} content={drawerContent} />
      )}
    </header>
  );
};

export default Header;
