import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { useSelector } from 'react-redux';

export const AllOrder: React.FC = () => {
    const { order } = useSelector((state: any) => state.order);
    const [row, setRow] = useState<any>()
    useEffect(() => {
        if (order) {
            const orderdata = order?.flatMap((data: any) => {
                return data.cart.flatMap((item: any) => {
                    return {
                        username: data.username,
                        email: data.email,
                        orderAt: data.orderAt,
                        id: item.pid,
                        name: item.title,
                        price: item.price,
                        quantity: `x ${item.quantity}`,
                        image: item.image,
                        total: data.totalPrice,
                        status: "Pending"
                    };
                });
            });

            setRow(orderdata);
        }
    }, [order]);


    const columns: GridColDef[] = [
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'email', headerName: 'email', width: 200 },
        { field: 'name', headerName: 'Title', width: 250 },
        { field: 'price', headerName: 'Price', width: 100 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        { field: 'total', headerName: 'Total Price', width: 100 },
        {
            field: 'image',
            headerName: 'Image',
            width: 150,
            renderCell: (params) => (
                <img src={params.value} alt="Product" style={{ width: 50, height: 50 }} />
            ),
        },
        { field: 'orderAt', headerName: 'Order Date', width: 200 },
        { field: 'status', headerName: 'Status', width: 100 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            {
                row?.length > 0 && <DataGrid autoHeight columns={columns} rows={row} />
            }
        </div>
    );
}
