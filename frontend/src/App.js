import logo from './logo.svg';
import {useTheme} from '@mui/material/styles';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import SearchSection from './components/SearchSection';
import Header from './components/Header';
import RecipeDisplay from './pages/RecipeDisplay';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
function App() {
  const theme = useTheme();
  return (
      <div style={{backgroundColor: theme.secondary}}>
      <Header/>
      <Switch>
          <Route path="/find_recipe">
            <SearchSection />
          </Route>
          <Route path="/recipe">
            <RecipeDisplay />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        </div>
  );
}

export default App;
