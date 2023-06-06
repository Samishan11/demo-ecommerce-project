import { Typography } from '@material-tailwind/react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
export const EmptyOrder = () => {
    const navigate = useNavigate();
    return (
        <Box className="flex justify-center flex-col text-center">
            <Typography>
                There are no orders placed yet.
            </Typography>
            <Box className="mt-3">
                <button onClick={() => navigate('/')} className='border-black btn '>Continue Shopping</button>
            </Box>
        </Box>
    )
}
