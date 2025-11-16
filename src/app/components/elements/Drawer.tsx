import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  content: 'notifications' | 'wallet' | 'menu';
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, content }) => {
  const drawerPosition = useMemo(() => {
    return {
      initial: '100%',
      exit: '100%',
    };
  }, []);
  // Sample content for each drawer type
  const getContent = () => {
    switch (content) {
      case 'notifications':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">New message received</div>
              <div className="p-3 bg-gray-100 rounded">Payment confirmed</div>
              <div className="p-3 bg-gray-100 rounded">Account updated</div>
            </div>
          </div>
        );
      case 'wallet':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Wallet</h2>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">Balance: $1,234.56</div>
              <div className="p-3 bg-gray-100 rounded">Recent transactions</div>
              <div className="p-3 bg-gray-100 rounded">Add payment method</div>
            </div>
          </div>
        );
      case 'menu':
        return (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <div className="space-y-2">
              <div className="p-3 bg-gray-100 rounded">Settings</div>
              <div className="p-3 bg-gray-100 rounded">Profile</div>
              <div className="p-3 bg-gray-100 rounded">Help & Support</div>
              <div className="p-3 bg-gray-100 rounded">Logout</div>
            </div>
          </div>
        );
      default:
        return <div className="p-4">Content not found</div>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop with blurry effect */}
          <motion.div
            className="absolute inset-0 bg-white bg-opacity-70"
            style={{ backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className="absolute top-0 right-0 h-full w-[90%] max-w-md bg-white shadow-lg "
            initial={{
              x: drawerPosition.initial,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: drawerPosition.exit,
              opacity: 0,
            }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 },
              opacity: { duration: 0.2, ease: 'easeInOut' },
            }}
          >
            <div className="relative h-full flex flex-col">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 z-10 rtl:right-auto rtl:left-4"
                aria-label="Close drawer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="flex-grow overflow-y-auto pt-14">{getContent()}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
