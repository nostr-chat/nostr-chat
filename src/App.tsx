import React from 'react';
import {Router} from '@reach/router';
import {useAtom} from 'jotai';

import Home from 'views/home';
import Login from 'views/login';
import Channel from 'views/channel';
import ChannelPublic from 'views/channel-public';
import DirectMessage from 'views/direct-message';
import DirectMessagePublic from 'views/direct-message-public';
import Settings from 'views/settings';
import SettingsProfile from 'views/settings/profile';
import SettingsKeys from 'views/settings/keys';
import SettingsPassword from 'views/settings/password';
import SettingsRelays from 'views/settings/relays';
import SettingsPublicLinkPage from 'views/settings/public-link';
import {keysAtom} from 'atoms';

function App() {
    const [keys] = useAtom(keysAtom);

    return <Router style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Home path={process.env.PUBLIC_URL + '/'}/>
        <Login path={process.env.PUBLIC_URL + '/login'}/>
        <Channel path={process.env.PUBLIC_URL + '/channel'}/>
        {keys ? <Channel path={process.env.PUBLIC_URL + '/channel/:channel'}/> : <ChannelPublic path={process.env.PUBLIC_URL + '/channel/:channel'}/>}
        {keys ? <DirectMessage path={process.env.PUBLIC_URL + '/dm/:npub'}/> : <DirectMessagePublic path={process.env.PUBLIC_URL + '/dm/:npub'}/>}
        <Settings path={process.env.PUBLIC_URL + '/settings'}/>
        <SettingsProfile path={process.env.PUBLIC_URL + '/settings/profile'}/>
        <SettingsProfile path={process.env.PUBLIC_URL + '/settings/profile'}/>
        <SettingsKeys path={process.env.PUBLIC_URL + '/settings/keys'}/>
        <SettingsPassword path={process.env.PUBLIC_URL + '/settings/password'}/>
        <SettingsRelays path={process.env.PUBLIC_URL + '/settings/relays'}/>
        <SettingsPublicLinkPage path={process.env.PUBLIC_URL + '/settings/public-link'}/>
    </Router>
}

export default App;
