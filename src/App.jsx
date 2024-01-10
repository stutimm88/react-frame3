import Menu from './components/Menu'
import Divider from './components/Divider'
import TextSec from './components/TextSec'
import Buttons from './components/Buttons'
import OverlapImg from './components/OverlapImg'
import Box from './components/Box'
import CardSec from './components/CardSec'
import Icons from './components/Icons'
import IcSec from './components/IcSec'
import EndSec from './components/EndSec' 
import FooterSec from './components/FooterSec'

import {ThemeProvider} from 'styled-components'

import './style.css';

function App() {
  const theme = {
    colors: {},
    media: {mobile:'768px', tab:'998px'}
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Menu/>
      <Divider/>
      <TextSec/>
      <Buttons/>
      <OverlapImg/>
      <Box/>
      <CardSec/>
      <Icons/>
      <IcSec/>
      <EndSec/>
      <FooterSec/>
    </ThemeProvider>
    </>
  );
}

export default App;
