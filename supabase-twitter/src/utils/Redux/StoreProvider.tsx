"use client"

import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { view } from './view';

type StoreProviderProps = {
  children: ReactNode;
};

const StoreProvider = ({children} : Readonly<StoreProviderProps>) => {
  return (
    <Provider store={view}>
      {children}
    </Provider>
  )
}

export default StoreProvider