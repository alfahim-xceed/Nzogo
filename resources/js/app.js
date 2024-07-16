import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './appRoutes';
import '../css/app.css'; // Import Tailwind CSS

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppRoutes />
            </Router>
        </Provider>
    );
}

if (document.getElementById('app-container')) {
    ReactDOM.render(<App />, document.getElementById('app-container'));
}
