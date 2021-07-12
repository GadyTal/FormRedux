import React, { Component } from 'react';
import { render } from 'react-dom';
import { RuleTable } from './Components/RuleTable/RuleTable';
import { FormStateModelManagerProvider } from './Context/FormManagerStateCtx/FormManagerStateCtx';
import LayoutOpenerProvider from './Context/LayoutOpenerCtx/LayoutOpenerCtx';
import { CurrentOpen } from './Types/types';

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
      <LayoutOpenerProvider renderProps={(current: CurrentOpen, openFn: (current: CurrentOpen) => void) => {
        return (
          <div>

            <Pages />
            <FormStateModelManagerProvider open={openFn}>
              <>
                {
                  current?.layout === 'modal' ? (
                    // Modal
                    // size={current.size}
                    <div>
                      Gady
                      {current?.component && <current.component openFn={openFn} />}
                    </div>
                  ) : (
                    // LeftPanel
                    // size={current.size}
                    <div>
                      {current?.component && <current.component openFn={openFn} />}
                    </div>
                  )
                }
              </>
            </FormStateModelManagerProvider>
          </div>
        );
      }} />
    );
  }
}

render(<App />, document.getElementById('root'));
