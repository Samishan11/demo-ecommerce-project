import { Box, CircularProgress } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";

interface props {
    onClick: () => void;
    onCancel: () => void;
    isLoading: boolean;
    title: string;
    subtitle: string;
    show: boolean
}

export const ConfirmModal: React.FC<props> = ({ onClick, isLoading, onCancel, title, subtitle, show }) => {
    return (
        <Modal
            show={show}
            onHide={onCancel}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title className=''>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className=" text-center">
                    <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{subtitle}</h3>

                    <Box className="flex items-center justify-center">
                        <button onClick={onClick} data-modal-hide="popup-modal" type="button" className="text-green-500 relative bg-gray-200 hover:bg-gray-400 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            {isLoading && <Box>
                                <CircularProgress color="success" className='absolute top-[.35rem] left-3' size={25} /></Box>} Yes, I'm sure
                        </button>
                        <button onClick={onCancel} data-modal-hide="popup-modal" type="button" className="text-white relative bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Cancle
                        </button>
                    </Box>

                </div>
            </Modal.Body>

        </Modal>

    );
}
