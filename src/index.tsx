import React, { Component } from 'react';
import { render } from 'react-dom';
import { RuleTable } from './Components/RuleTable/RuleTable';
import { FormStateModelManagerProvider } from './Context/FormManagerStateCtx/FormManagerStateCtx';
import PloniCtxProvider from './Context/PloniCtx/PloniContext';
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
      <PloniCtxProvider>
        {(current: CurrentOpen, openFn: (current: CurrentOpen) => void) => {
          return (
            <div>

              <Pages />
              <FormStateModelManagerProvider open={openFn}>
                {(openFn: any) => {
                  {
                    current.layout === 'modal' ? (
                      // Modal
                      // size={current.size}
                      <div> 
                        {current.component && current.component(openFn)}
                      </div>
                    ) : (
                      // LeftPanel
                      // size={current.size}
                      <div> 
                        {current.component && current.component(openFn)}
                      </div>
                    );
                  }
                }}
              </FormStateModelManagerProvider>
            </div>
          );
        }}
      </PloniCtxProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
