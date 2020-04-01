import * as React from 'react';

import { Button } from '../Button/Button';
import s from './GameWithFriendsPage.module.css'

const GameModePage = () => {
    return (
        <div className = {s.gameModePage}>
            <div>
                <Button text="Create room" link = "/createRoom" style="default" />
            </div>
            <div>
                <Button text="Connect to room" link = "/connect" style="default" />
            </div>
        </div>
    )
}

export default GameModePage;