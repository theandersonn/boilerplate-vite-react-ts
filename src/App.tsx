import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@/styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
