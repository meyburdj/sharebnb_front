import userContext from "./UserContext";
import PoolPartyApi from './api';
import React, { useState, useContext, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

/**
 * Message: component for individual message
 * 
 * Props: User, message, 
 * State: none
 * 
 * Mailbox -> MessageList -> Message 
 */

function Message({ message }) {
    const { user } = useContext(userContext);
    console.log("message", message);

    const RecievedMessage = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: '1px solid green',
        textAlign: 'right',
    }));

    const SentMessage = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        border: '1px solid blue',
        textAlign: 'left',
    }));

    return (
        message?.sender_username === user.name ?
            <Box display="flex" justifyContent="flex-start">
                <Grid sm={10}>
                    <SentMessage >
                        you: {message.body}
                    </SentMessage>
                </Grid>
            </Box> :
            <Box display="flex" justifyContent="flex-end">
                <Grid sm={10}>
                    <RecievedMessage >
                        {message?.sender_username}: {message?.body}
                    </RecievedMessage>
                </Grid>
            </Box>
    );

}

export default Message;