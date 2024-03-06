import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import shopcart from '../products/data/data2.json';

const SimpleDialog = ({ open, selectedValue, onClose }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>CART</DialogTitle>
      <DialogContent className="Dialog-wrapper">
        {shopcart.map((e, i) => (
          <h1 key={i}>{e.price}</h1>
        ))}
        <div className="Dialog-main">
          <span>Remove all</span>
          <p>TOTAL</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SimpleDialog;
