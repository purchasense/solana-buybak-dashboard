import React,{useContext, useState} from 'react';
// material-ui
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import {setModalMobileLoginName, setModalQRCodeLoadingStatus, setModalQRCodeLoadingExecutionStatus, setModalMobileLoginStatus, setModalQRCodeScan} from 'store/actions';
import './style.css';
import ColorSubCard from "ui-component/cards/ColorSubCard";

import {
  establishConnection,
  establishPayer,
  checkProgram,
  sayHello,
  mapStockPDA,
  getStockQuote,
  getBTreeMap,
  fetchLiveQuotes,
  quotes,
  userPortfolio,
  stockList,
  InitUserPortfolio,
  FetchFSOPPortfolioForUser,
} from '../../../../solana/hello_world';


// ===============================|| UI DIALOG - SCROLLABLE ||=============================== //

const runInitUserProfile = async (username, name, email, phone, address, dispatch) => {

    // const dispatch = useDispatch();
    dispatch(setModalQRCodeLoadingStatus(true, '0'));

    
    dispatch(setModalQRCodeLoadingExecutionStatus("Connect..."));
    await establishConnection();
    dispatch(setModalQRCodeLoadingExecutionStatus("Setup Payer"));
    await establishPayer();
    dispatch(setModalQRCodeLoadingExecutionStatus("PDA Users"));
    await checkProgram("BBK-Users");
    const userPubkey = mapStockPDA.get("BBK-Users");
    dispatch(setModalQRCodeLoadingExecutionStatus("PDA Stocks"));
    await checkProgram("BBK-Stocks");
    const stockPubkey = mapStockPDA.get("BBK-Stocks");
    dispatch(setModalQRCodeLoadingExecutionStatus("PDA Stats"));
    await checkProgram("BBK-Stats");
    const statsPubkey = mapStockPDA.get("BBK-Stats");
    console.log( 'Connected');
    if ( (userPubkey !== undefined) && (stockPubkey !== undefined) && (statsPubkey !== undefined))
    {
    console.log( 'Firing InitUserProfile');
        console.log( 'userPubkey : ' + userPubkey.toBase58());
        console.log( 'stockPubkey : ' + stockPubkey.toBase58());
        console.log( 'statsPubkey : ' + statsPubkey.toBase58());
        console.log( username + ', ' + name + ', ' + email + ', ' + phone + ', ' + address);
        dispatch(setModalQRCodeLoadingExecutionStatus("Login..."));
        await InitUserPortfolio(userPubkey, stockPubkey, statsPubkey, 6, username, "", "", "", "", 0, 0, "");

        // Create the userkey for username
        dispatch(setModalQRCodeLoadingExecutionStatus("PDA User"));
        await checkProgram(username);
        // Get the userPubkey
        const usernamePubkey = mapStockPDA.get(username);
        // Get the user portfolio
        if ( usernamePubkey !== undefined)
        {
            dispatch(setModalQRCodeLoadingExecutionStatus("Portfolio..."));
            await FetchFSOPPortfolioForUser(usernamePubkey);
            console.log( 'FetchFSOP completed for ' + username);
            userPortfolio.forEach((key, index) => {
                console.log( 'SAMEER KULKARNI');
                console.log( key );
                // console.log( key.stock);
                if ( key.stock !== undefined)
                {
                    dispatch(setModalQRCodeScan(key.stock, key.fsop, key.average_price));
                }
            });
            dispatch(setModalQRCodeLoadingExecutionStatus("Done!"));
            dispatch(setModalQRCodeLoadingStatus(false, '0'));
        }
    }
}

export const  ModalMobileLogin = () => {
    //
    const [username, setUsername] = React.useState("");

    const dispatch = useDispatch();
    const isOpen = useSelector((state) => { return state.qrcode.is_login_open});

    const handleLogin = (e) => {
        console.log( 'handleLogin ' + username);
        console.log({e});

        runInitUserProfile(username, "", "", "", "", dispatch).then(() => {
            console.log( username + ' successfully logged into SOLANA-buybak-FSOP');
        }).catch(error => console.log(error));

        dispatch(setModalMobileLoginName(username));
    };

    const handleClose = () => {
        console.log( 'handleClose');
        dispatch(setModalMobileLoginStatus(false));
    };
    
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (isOpen) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [isOpen]);


    return (
            <Dialog
                open={isOpen}
                onClose={handleClose}
                overflow={'hidden'}
                sx={{ overflow: 'hidden' }}
            >
                <DialogTitle >
                    <Grid container >
                        <Grid item xs="3">
                        </Grid>
                        <Grid item xs="12">
                            <Typography variant="subtitle1" sx={{ fontFamily: 'Abhaya Libre ExtraBold', fontSize: "1.1rem", marginLeft: "25px", marginTop: "15px", fontWeight: 'bold', textAlign: "left", color: "black", }} >
                                {'Username'}
                            </Typography>
                        </Grid>
                        <Grid item xs="12">
                            <form >
                                      <input
                                        id="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                      />
                            </form>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogActions sx={{ size: '1.25rem', }}>
                    <Button onClick={handleLogin} color="success">
                        Login
                    </Button>
                    <Button onClick={handleClose} color="error">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
    );
};
