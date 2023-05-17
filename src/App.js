import './App.css';
import Filters from './components/Filters';
import List from './components/List';
import NavBar from './components/Navbar';
import { useState } from 'react';
function App() {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);

    return (
        <div>
            <NavBar search={search} searchChange={setSearch} />
            <div className="main">
                <List search={search} categories={categories} />
                <Filters
                    categories={categories}
                    setCategories={setCategories}
                />
            </div>
        </div>
    );
}

export default App;
