import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Notes from './components/pages/Notes';
import Create from './components/pages/Create';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/themes/index';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
