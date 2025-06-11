"use client";

import { useState } from "react";
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  Button,
  type ShellBarDomRef
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import AppDropdown from "./AppDropdown";

interface HeaderProps {
  onProductSwitcherClick?: () => void;
  onJouleClick?: () => void;
}

export default function Header({ onProductSwitcherClick, onJouleClick }: HeaderProps) {
  const [showProductSwitcher, setShowProductSwitcher] = useState(false);
  const [productSwitcherAnchor, setProductSwitcherAnchor] = useState<ShellBarDomRef | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleProductSwitcherClick = (event: any) => {
    const shellBar = event.target;
    const productSwitchButton = shellBar.shadowRoot?.querySelector('ui5-button[data-ui5-stable="product-switch"]');
    if (productSwitchButton) {
      setProductSwitcherAnchor(productSwitchButton);
      setShowProductSwitcher(true);
    }
    onProductSwitcherClick?.();
  };

  const handleProductSwitcherClose = () => {
    setShowProductSwitcher(false);
    setProductSwitcherAnchor(null);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div style={{ position: 'relative' }}>
        <ShellBar
          primaryTitle="Business Suite"
          showProductSwitch
          profile={<Avatar icon="employee" />}
          className="[&>ui5-shellbar]:[&>ui5-shellbar-primary-title]:text-2xl [&>ui5-shellbar]:[&>ui5-shellbar-primary-title]:font-bold [&>ui5-shellbar]:[&>ui5-shellbar-primary-title]:text-blue-600"
          onProductSwitchClick={handleProductSwitcherClick}
          style={{ height: '52px' }}
          logo={
            <img 
              src="/SAP_2011_logo.png" 
              alt="SAP Logo" 
              style={{ height: '2rem', width: 'auto' }} 
            />
          }
        >
        </ShellBar>
        
        {/* Joule Icon positioned absolutely */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '120px', // Adjust this value to position it properly
          transform: 'translateY(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <div 
            data-state="Off" 
            style={{
              minHeight: 36, 
              background: 'var(--Button-Lite-sapButton_Lite_Background, rgba(0, 0, 0, 0))', 
              borderRadius: 8, 
              outline: '1px var(--Button-Lite-sapButton_Lite_BorderColor, rgba(0, 0, 0, 0)) solid', 
              outlineOffset: '-1px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex', 
              cursor: 'pointer'
            }}
            onClick={onJouleClick}
          >
            <img 
              src="/da.svg" 
              alt="Joule" 
              style={{ width: '16px', height: '16px' }} 
            />
          </div>
        </div>
      </div>

      <AppDropdown 
        isOpen={showProductSwitcher}
        onClose={handleProductSwitcherClose}
        opener={productSwitcherAnchor}
      />
    </div>
  );
} 