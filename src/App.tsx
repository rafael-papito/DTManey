import { GlobalStyle } from './styles/global';
import {Header} from './components/Header';
import { Deshboard } from './components/Deshboard';
export function App() {
  return (
    <>
      <Header/>
      <Deshboard/>
      <GlobalStyle/>
    </>
  );
}
