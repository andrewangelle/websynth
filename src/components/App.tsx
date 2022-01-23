import { RecoilRoot } from 'recoil';

import { WebSynth } from 'src/components';

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
