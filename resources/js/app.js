import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './appRoutes';
import '../css/app.css'; // Import Tailwind CSS
import { setId, setToken } from './slices/authSlice';
function AuthInitializer() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');

        if (token && id) {
            dispatch(setToken(token));
            dispatch(setId(id));
        }
    }, [dispatch]);

    return null; // This component doesn't render anything
}

function App() {

    return (
        <Provider store={store}>
            <AuthInitializer/>
            <Router>
                <AppRoutes />
            </Router>
        </Provider>
    );
}

if (document.getElementById('app-container')) {
    ReactDOM.render(<App />, document.getElementById('app-container'));
}
