import React, { useEffect, useState } from 'react';
import ProfileForm from '../../components/profile/ProfileForm';
import PasswordForm from '../../components/profile/PasswordForm';
import { useSelector } from 'react-redux';


const ManageProfile = () => {
    const id = useSelector((state) => state.auth.id);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6 text-gray-800">Manage Profile</h1>
            <ProfileForm id={id}/>
            <PasswordForm/>
        </div>
    );
};

export default ManageProfile;
