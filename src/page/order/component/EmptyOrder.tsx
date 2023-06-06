import { Typography } from '@material-tailwind/react'
import { Box } from '@mui/material'

export const EmptyOrder = () => {
    return (
        <Box className="flex justify-center flex-col text-center">
            <Typography>
                There are no orders placed yet.
            </Typography>
            <Box className="mt-3">
                <button className='border-black btn '>Continue Shopping</button>
            </Box>
        </Box>
    )
}
