import * as React from 'react';
import { Button } from '../Button/Button';
import s from './StartPage.module.css'
function StartPage() {
    return (
        <div className = {s.startPage}>
            <div>
                <Button text="Single game" link = "/api/questions" style="default" />
            </div>
            <div>
                <Button text="Game with friends" link = "/withFriends" style="default" />
            </div>
            <div>
                <Button text="Settings" link = "/settings" style="default" />
            </div>
        </div>
    );
}
export default StartPage;