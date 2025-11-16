import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import TextIconButton from './TextIconButton';
import NotificationCard from '../modules/NotificationCard';
import { notificationData } from '../../constants/index';
import Button from './Button';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: 'notifications' | 'wallet' | 'menu';
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, content }) => {
  // State to manage the active tab within the drawer
  const [activeTab, setActiveTab] = useState<'notifications' | 'support'>('notifications');

  // Update active tab when content prop changes (for initial open)
  React.useEffect(() => {
    // When the drawer opens with notifications, we show the notifications tab
    if (content === 'notifications') {
      setActiveTab('notifications');
    } else {
      setActiveTab('support');
    }
  }, [content]);

  // Dummy notification data

  // Content for each tab
  const getContent = () => {
    switch (activeTab) {
      case 'notifications':
        return (
          <div className="p-4 space-y-3">
            <h2 className="text-xl font-bold mb-4 text-right">اعلان‌ها</h2>
            {notificationData.map((notification) => (
              <NotificationCard
                key={notification.id}
                date={notification.date}
                title={notification.title}
                content={notification.content}
                icon={
                  <Image
                    src={'../../../../assets/icons/blueBell.svg'}
                    height={24}
                    width={24}
                    alt="bell-icon"
                  />
                }
                actionButton={notification.hasButton && <Button text="رزرو تور" />}
              />
            ))}
          </div>
        );
      case 'support':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">Contact support</div>
              <div className="p-3 bg-gray-100 rounded">Frequently asked questions</div>
              <div className="p-3 bg-gray-100 rounded">Open ticket</div>
            </div>
          </div>
        );
      default:
        return <div className="p-4">Content not found</div>;
    }
  };

  // Handle tab selection
  const handleTabSelect = (tab: 'notifications' | 'support') => {
    setActiveTab(tab);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop with blurry effect */}
          <motion.div
            className="absolute inset-0 bg-[#f4f4f8] bg-opacity-70"
            style={{ backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[100%] max-w-md bg-[#f4f4f8] shadow-lg"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
              opacity: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            <div className="relative h-full flex flex-col  ">
              {/* Close button */}
              <div className="w-full bg-white min-h-[100px] flex items-center justify-between  ">
                <div>
                  <button
                    onClick={onClose}
                    className=" p-1 rounded-full hover:bg-gray-100 z-10 cursor-pointer w-fit"
                    aria-label="Close drawer"
                  >
                    <Image
                      src="../../../../assets/icons/arrowRight.svg"
                      width={28}
                      height={28}
                      alt="arrow-right"
                    />
                  </button>
                </div>
                <div className="w-full flex items-center justify-center gap-8">
                  <TextIconButton
                    icon="../../../../assets/icons/bell.svg"
                    activeIcon="../../../../assets/icons/blueBell.svg"
                    text="اعلانات"
                    isActive={activeTab === 'notifications'}
                    onClick={() => handleTabSelect('notifications')}
                    textSize={18}
                    iconSize={28}
                  />
                  <TextIconButton
                    icon="../../../../assets/icons/headphone.svg"
                    activeIcon="../../../../assets/icons/blueHeadphone.svg"
                    text="پشتیبانی"
                    isActive={activeTab === 'support'}
                    onClick={() => handleTabSelect('support')}
                    textSize={18}
                    iconSize={28}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow overflow-y-auto pt-4">{getContent()}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
