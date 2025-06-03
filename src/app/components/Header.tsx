"use client";

import { useState } from "react";
import {
  ShellBar,
  ShellBarItem,
  Avatar,
  type ShellBarDomRef
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import AppDropdown from "./AppDropdown";

interface HeaderProps {
  onProductSwitcherClick?: () => void;
}

export default function Header({ onProductSwitcherClick }: HeaderProps) {
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
        <ShellBarItem icon="message-information" text="Joules" />
      </ShellBar>

      <AppDropdown 
        isOpen={showProductSwitcher}
        onClose={handleProductSwitcherClose}
        opener={productSwitcherAnchor}
      />
    </div>
  );
} 