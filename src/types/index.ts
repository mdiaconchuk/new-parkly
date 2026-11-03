import React from 'react';

export interface NavItemType {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface FooterItemType {
  href: string;
  icon: React.ReactNode;
}