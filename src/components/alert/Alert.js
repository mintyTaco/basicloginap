import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router";
import { alertActions } from "../../redux/actions/alertActions";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const AlertNotification = () => {
    
    const alert = useSelector((state) => state.alert);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        history.listen((location, action) => {
          dispatch(alertActions.clear());
        });
      }, [history, dispatch]);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        if(alert.message !== undefined)
          setOpen(true);
    }, [alert.message])

    const handleSeverity = () => {
        if(alert.type === 'alert-success'){
            return 'success';
        }
        if(alert.type === 'alert-danger'){
          return 'error';
        }
    }

    return(
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={handleSeverity()}>
                    {`${alert.message}`}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default AlertNotification;
