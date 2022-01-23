import { RecoilRoot } from 'recoil';

import { WebSynth } from 'src/components';

export function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <WebSynth />
      </RecoilRoot>
    </div>
  );
}
