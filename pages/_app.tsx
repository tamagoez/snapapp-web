import "../styles/globals.css";
import "../styles/twemoji.css"
import Twemoji from 'react-twemoji';

function App({ Component, pageProps }) {
  return (<><Twemoji options={{ className: 'twemoji' }}><Component {...pageProps} /></Twemoji></>);
}

export default App;
