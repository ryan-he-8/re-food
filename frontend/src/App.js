import logo from './logo.svg';
import './App.css';
import SearchSection from './components/SearchSection';
import Header from './components/Header';
import RecipeDisplay from './pages/RecipeDisplay';
import IngredientCart from './pages/IngredientCart';
function App() {
  return (
    <div className="App">
      <Header/>
      <RecipeDisplay/>
    </div>
  );
}

export default App;
