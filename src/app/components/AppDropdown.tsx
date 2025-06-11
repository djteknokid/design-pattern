"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
  Popover,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "./appdropdownmenu.css";

interface AppDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  opener?: string | HTMLElement | null;
}

export default function AppDropdown({ isOpen, onClose, opener }: AppDropdownProps) {
  const router = useRouter();
  
  // Cleanup effect to ensure proper closing
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    
    // Close on escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  const apps = [
    { 
      name: "Cloud ERP", 
      iconPath: "/appIcon-cloudERP.png", 
      link: "/cloud-erp"
    },
    { 
      name: "SuccessFactors", 
      iconPath: "/appIcon-successFactors.png", 
      link: "/successfactors"
    },
    { 
      name: "Concur", 
      iconPath: "/appIcon-concour.png", 
      link: "/concur"
    },
    { 
      name: "Sales Cloud", 
      iconPath: "/appicon-salescloud.png", 
      link: "/sales-cloud"
    },
    { 
      name: "Ariba", 
      iconPath: "/appIcon-ariba.png", 
      link: "/ariba"
    },
    { 
      name: "Business Suite", 
      iconPath: "/appIcon-home.png", 
      link: "/suite-first"
    },
  ];

  const handleAppClick = (link: string) => {
    // Close dropdown immediately
    onClose();
    // Use Next.js router for smoother navigation
    router.push(link);
  };

  // Only render if opener is available and dropdown should be open
  if (!opener || !isOpen) {
    return null;
  }

  return (
    <Popover
      open={isOpen}
      onClose={onClose}
      opener={opener}
      placement="Bottom"
      className="app-dropdown-popover"
    >
      <div className="app-dropdown-container">
        <div className="app-dropdown-grid">
          {apps.map((app, index) => (
            <div
              key={index}
              className="app-dropdown-tile"
              onClick={() => handleAppClick(app.link)}
            >
              <img 
                src={app.iconPath}
                alt={app.name}
                className="app-dropdown-icon"
              />
              <div className="app-dropdown-label">
                {app.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Popover>
  );
} 