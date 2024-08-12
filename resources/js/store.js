import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from './services/api';
import { country_api } from './services/country_api';
import { visa_category_api } from './services/visa_category_api';
import { visa_type_api } from './services/visa_type_api';
import { service_api } from './services/service_api';
import { role_api } from './services/role_api';
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [country_api.reducerPath]: country_api.reducer,
        [visa_category_api.reducerPath]:visa_category_api.reducer,
        [visa_type_api.reducerPath]:visa_type_api.reducer,
        [service_api.reducerPath]:service_api.reducer,
        [role_api.reducerPath]:role_api.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(country_api.middleware)
            .concat(visa_category_api.middleware)
            .concat(visa_type_api.middleware)
            .concat(service_api.middleware)
            .concat(role_api.middleware),
});

setupListeners(store.dispatch);

export default store;
