import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export default function ConfirmationDialog(props) {
    const { onClose, value: valueProp, open, message, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const [detailMessage, setDetailMessage] = React.useState(message);
  
    React.useEffect(() => {
      if (!open) {
        setValue(valueProp);
        setDetailMessage(message);
      }
    }, [valueProp, open, message]);
  
    const handleCancel = () => {
      onClose();
    };
  
    const handleOk = () => {
      onClose(value);
    };
  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
        {...other}
      >
        <DialogTitle sx={{ display: 'flex', flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
            <HelpOutlineOutlinedIcon
                color='primary'
                sx={{ fontSize: 40 }}
            /> 
            Mensaje de confirmación
        </DialogTitle>
        <DialogContent  sx={{ display: 'flex', justifyContent:'center' }}>
          <Box>{detailMessage}</Box>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent:'center' }}>
            <Button autoFocus variant="contained" color='error' onClick={handleCancel}>Cancelar</Button>
            <Button variant="contained" color='success' onClick={handleOk}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    );
  }

  ConfirmationDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.any.isRequired,
    message:PropTypes.string.isRequired,
  };