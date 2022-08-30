import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: "Home",
    path: '/',
    icon: <IoIcons.IoMdHome />,
    cName: 'nav-text'
  },
  {
    title: 'Pagamento',
    path: '/products',
    icon: <FaIcons.FaCreditCard/>,
    cName: 'nav-text'
  },
  {
    title: 'Suporte',
    path: '/Reports',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
