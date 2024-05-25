import Box from '@mui/material/Box';
import {useNavigate} from '@reach/router';

const PublicBrand = () => {
    const navigate = useNavigate();
    return <Box sx={{
        position: 'absolute',
        left: '20px',
        top: '20px',
        height: '40px',
        display: 'flex',
        cursor: 'pointer'
    }} onClick={() => {
        navigate(`${process.env.PUBLIC_URL}/login`).then();
    }}>
        <Box sx={{height: '40px'}} component='img' src={process.env.PUBLIC_URL + '/logo-large-white.png'}></Box>
    </Box>
}

export default PublicBrand;
