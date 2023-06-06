import React from 'react';
import {
    Drawer,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/slice/cartSlice';
import { CartList } from './CartList';


export const Cart: React.FC = () => {
    // hooks
    const dispatch = useDispatch();
    const { isShow: cartIsShow } = useSelector((state: any) => state.cart);
    const { cart } = useSelector((state: any) => state.cart);

    // methods
    const handelToggle = () => {
        dispatch(toggleCart(!cartIsShow))
    }

    return (
        <React.Fragment>
            <Drawer
                className="w-2/4 p-4 custom-drawer"
                placement="right"
                open={cartIsShow}
                onClose={handelToggle}
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Cart Items
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={handelToggle}
                    >
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <CartList cartItems={cart} />
            </Drawer>

        </React.Fragment>
    );
};



