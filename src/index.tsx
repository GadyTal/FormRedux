import { Drawer, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RuleTable from './Components/RuleTable/RuleTable';
import LayoutOpenerProvider from './Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { store } from './Store/store';
import { CurrentOpen, OpenComponentFn } from './Types/types';

const Pages = () => {
  return <RuleTable />;
};

const App = () => {
  const [fullPageForm, setFullPageForm] = useState<Boolean>(false);

  const getLayout = (current: CurrentOpen, openFn: OpenComponentFn, close: () => void) => {
    if (!current || !current.layout || !current.component) {
      return null
    }

    // If opened - close full page form
    if (fullPageForm) {
      setFullPageForm(false);
    }

    switch (current.layout) {
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
        <button
          onClick={() => {
            setFullPageForm(!fullPageForm);
          }}>{fullPageForm ? "Close" : "Open"} Portal Design</button>

        {/* {fullPageForm ? <PortalDesignFormPager openFn={openFn} close={close} /> :
          <>
            <Pages />
            {
              getLayout(current, openFn, close)
            }
          </>
        } */}

        <>
          <Pages />
          {
            getLayout(current, openFn, close)
          }
        </>

      </div>
    );
  }} />
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
