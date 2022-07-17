import React from 'react';
import Options from '../components/settings/Options';
import SettingsHeader from '../components/settings/SettingsHeader';
import UserProfile from '../components/settings/UserProfile';

export default function Settings() {
    return (
        <>
            <SettingsHeader/>
            <UserProfile/>
            <Options/>
        </>
    )
}
