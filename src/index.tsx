import { Modal } from '@material-ui/core';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RuleTable from './Components/RuleTable/RuleTable';
import LayoutOpenerProvider from './Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { store } from './Store/store';
import { Drawer } from '@material-ui/core';
import { CurrentOpen, OpenComponentFn } from './Types/types';

const Pages = () => {
  return <RuleTable />;
};

const App = () => {
  
  
  const getLayout = (current: CurrentOpen, openFn: OpenComponentFn, close: () => void) => {
    if(!current || !current.layout || !current.component) {
      return null
    }

    switch(current.layout) {
      case "modal": 
        return <Modal open={current.layout === "modal"}>
                <current.component close={close} openFn={openFn} />
              </Modal>
      case "rightPanel": 
        return <Drawer open={current.layout === 'rightPanel'}>
                <current.component close={close} openFn={openFn} />
              </Drawer>
      default:
        null
    }
  }
  
  return <LayoutOpenerProvider renderProps={(current, openFn, close) => {
    return (
      <div>
        <Pages />
        {
          getLayout(current,openFn, close)
        }
      </div>
    );
  }} />
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
