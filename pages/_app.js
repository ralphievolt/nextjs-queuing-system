import '../styles/globals.css';
import 'primereact/resources/themes/arya-purple/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { useHydrateAtoms } from "jotai/utils";
import { teller1Atom, teller2Atom, teller3Atom } from "../store"


function MyApp({ Component, pageProps }) {
  const { initialState } = pageProps;
  useHydrateAtoms(initialState ? [[teller1Atom, initialState]] : []);
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
