import { RecoilRoot } from 'recoil';

import { WebSynth } from './WebSynth';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <WebSynth />
      </RecoilRoot>
    </div>
  );
}

export default App;
