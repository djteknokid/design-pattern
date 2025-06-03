"use client";

import {
  Popover,
  Icon,
  FlexBox,
  FlexBoxDirection,
  FlexBoxAlignItems,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { useState } from "react";

interface MenuItem {
  label: string;
  icon: string;
  link?: string;
  children?: MenuItem[];
  isSection?: boolean;
}

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  menuItems: MenuItem[];
  opener?: string;
}

export default function HamburgerMenu({ isOpen, onClose, productName: _productName, menuItems, opener }: HamburgerMenuProps) {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());

  const handleItemClick = (link?: string) => {
    if (link) {
      window.location.href = link;
    }
    onClose();
  };

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSections(newExpanded);
  };

  const renderMenuItem = (item: MenuItem, index: number, isChild = false) => {
    const isExpanded = expandedSections.has(index);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={index}>
        <div
          onClick={() => {
            if (hasChildren) {
              toggleSection(index);
            } else {
              handleItemClick(item.link);
            }
          }}
          style={{ 
            cursor: 'pointer',
            padding: isChild ? '0.5rem 3rem' : '0.75rem 1.5rem',
            borderBottom: !isChild && index < menuItems.length - 1 ? '1px solid #f3f4f6' : 'none',
            transition: 'background-color 0.2s',
            backgroundColor: isChild ? '#f8fafc' : 'transparent'
          }}
          onMouseEnter={(e) => {
            if (!isChild) {
              e.currentTarget.style.backgroundColor = '#f8fafc';
            }
          }}
          onMouseLeave={(e) => {
            if (!isChild) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '1rem', justifyContent: 'space-between' }}>
            <FlexBox alignItems={FlexBoxAlignItems.Center} style={{ gap: '1rem' }}>
              <Icon 
                name={item.icon} 
                style={{ 
                  fontSize: isChild ? '1rem' : '1.25rem',
                  color: '#6b7280',
                  minWidth: '20px'
                }} 
              />
              <span style={{ 
                fontSize: isChild ? '0.875rem' : '0.95rem',
                color: '#374151',
                fontWeight: isChild ? '400' : '500'
              }}>
                {item.label}
              </span>
            </FlexBox>
            {hasChildren && (
              <Icon 
                name={isExpanded ? "slim-arrow-down" : "slim-arrow-right"} 
                style={{ 
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }} 
              />
            )}
          </FlexBox>
        </div>
        
        {hasChildren && isExpanded && (
          <div>
            {item.children?.map((child, childIndex) => (
              <div
                key={childIndex}
                onClick={() => handleItemClick(child.link)}
                style={{ 
                  cursor: 'pointer',
                  padding: '0.5rem 3rem',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ 
                  fontSize: '0.875rem',
                  color: '#374151',
                  fontWeight: '400'
                }}>
                  {child.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (!opener) {
    return null;
  }

  return (
    <Popover
      open={isOpen}
      onClose={onClose}
      opener={opener}
      placement="Bottom"
      style={{ width: '320px' }}
    >
      <div style={{ 
        padding: '1rem 0',
        backgroundColor: 'white',
        minHeight: '400px'
      }}>
        <FlexBox 
          direction={FlexBoxDirection.Column}
          style={{ height: '100%' }}
        >
          {/* Menu Items */}
          <div style={{ flex: 1 }}>
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </div>
        </FlexBox>
      </div>
    </Popover>
  );
} 