import {RouteComponentProps, useNavigate} from '@reach/router';
import {useEffect} from 'react';
import {useAtom} from 'jotai';
import {keysAtom} from '../../atoms';

const HomePage = (_: RouteComponentProps) => {
    const [keys] = useAtom(keysAtom);
    const navigate = useNavigate();

    useEffect(() => {
        let redir = `${process.env.PUBLIC_URL}/channel`;
        if (!keys) {
            redir = `${process.env.PUBLIC_URL}/login`;
        }
        navigate(redir).then();
    }, [keys])

    return null;
}

export default HomePage;
