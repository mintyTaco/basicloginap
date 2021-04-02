import React from "react";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return (
        <MuiAlert elevation={6} variant="filled" {...props} />
    );
}

export const AlertMessage = (status, severity, message) => {
    
    // const [open, setOpen] = React.useState(false);

    // const setVisibility = () => {
    //     setOpen(status);
    // }

    return(
        <Snackbar open = {open}>
            <Alert onClose={open} severity={severity}>{message}</Alert>
        </Snackbar>
    );

}
