import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RuleTable from './Components/RuleTable/RuleTable';
import LayoutOpenerProvider from './Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { store } from './Store/store';


interface AppProps { }

interface AppState {
  name: string;
}

const Pages = () => {
  return <RuleTable />;
};

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <LayoutOpenerProvider renderProps={(current, openFn, close) => {
        return (
          <div>

            <Pages />
            <>
                {
                  current?.layout === 'modal' ? (
                    // Modal
                    // size={current.size}
                    <div>
                      Gady
                      {current?.component && <current.component close={close} openFn={openFn} />}
                    </div>
                  ) : (
                    // LeftPanel
                    // size={current.size}
                    <div>
                      {current?.component && <current.component close={close} openFn={openFn} />}
                    </div>
                  )
                }
              </>
          </div>
        );
      }} />
    );
  }
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
