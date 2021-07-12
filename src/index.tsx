import React, { Component } from 'react';
import { render } from 'react-dom';
import PloniCtxProvider from './Context/PloniCtx/PloniContext';
import { RuleTable } from './Components/RuleTable/RuleTable';
import { FormStateModelManagerProvider } from './Context/FormManagerStateCtx/FormManagerStateCtx';

interface AppProps {}

interface AppState {
  name: string;
}

const Pages = () => {
  return <RuleTable />;
};

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

class App extends Component<AppProps, AppState> {
  constructor(props) {
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
              <RecoilRoot>
                <Pages />
                <FormStateModelManagerProvider>
                  {open => {
                    return;
                    {
                      console.log(
                        current.component && current.component(openFn)
                      );
                    }
                    {
                      current.layout === 'modal' ? (
                        // Modal
                        <div size={current.size}>
                          {current.component && current.component(openFn)}
                        </div>
                      ) : (
                        // LeftPanel
                        <div size={current.size}>
                          {current.component && current.component(openFn)}
                        </div>
                      );
                    }
                  }}
                </FormStateModelManagerProvider>
              </RecoilRoot>
            </div>
          );
        }}
      </PloniCtxProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
