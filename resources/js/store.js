import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';


import { api } from './services/api';
import { country_api } from './services/country_api';
import { visa_category_api } from './services/visa_category_api';
import { visa_type_api } from './services/visa_type_api';
import { service_api } from './services/service_api';
import { role_api } from './services/role_api';

import { search_api } from './services/search_api';
import { visa_application_api } from './services/visa_application_api';
import { required_document_api } from './services/required_document_api';
import { category_country_required_document_api } from './services/category_country_required_document_api';

import { visa_api } from './services/visa_api';

import { country_service_api } from './services/country_service_api';

import { category_country_api } from './services/category_country_api';

import authReducer from './slices/authSlice';



const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [country_api.reducerPath]: country_api.reducer,
        [visa_category_api.reducerPath]:visa_category_api.reducer,
        [visa_type_api.reducerPath]:visa_type_api.reducer,
        [service_api.reducerPath]:service_api.reducer,
        [role_api.reducerPath]:role_api.reducer,
        [search_api.reducerPath]:search_api.reducer,
        [visa_application_api.reducerPath]:visa_application_api.reducer,
        [required_document_api.reducerPath]:required_document_api.reducer,
        [category_country_required_document_api.reducerPath]:category_country_required_document_api.reducer,

        [visa_api.reducerPath]:visa_api.reducer,

        [country_service_api.reducerPath]:country_service_api.reducer,

        [category_country_api.reducerPath]:category_country_api.reducer,


        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)
            .concat(country_api.middleware)
            .concat(visa_category_api.middleware)
            .concat(visa_type_api.middleware)
            .concat(service_api.middleware)
            .concat(role_api.middleware)
            .concat(search_api.middleware)
            .concat(visa_application_api.middleware)
            .concat(required_document_api.middleware)
            .concat(category_country_required_document_api.middleware)
            .concat(visa_api.middleware)
            .concat(country_service_api.middleware)
            .concat(category_country_api.middleware)
});

setupListeners(store.dispatch);

export default store;
