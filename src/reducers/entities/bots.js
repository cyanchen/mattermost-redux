// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {combineReducers} from 'redux';

import {BotTypes} from 'action_types';

function accounts(state = {}, action) {
    switch (action.type) {
    case BotTypes.RECEIVED_BOT_ACCOUNTS: {
        const newBots = action.data;
        const nextState = {...state};
        for (const bot of newBots) {
            nextState[bot.user_id] = bot;
        }
        return nextState;
    }
    case BotTypes.RECEIVED_BOT_ACCOUNT: {
        const bot = action.data;
        const nextState = {...state};
        nextState[bot.user_id] = bot;
        return nextState;
    }
    default:
        return state;
    }
}

export default combineReducers({
    accounts,
});
