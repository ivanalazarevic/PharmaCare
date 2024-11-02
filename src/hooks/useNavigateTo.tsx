import {useNavigate} from "react-router-dom";

const useNavigateTo = (route: string) => {
    const navigate = useNavigate();

    return () => navigate(route);
};

export default useNavigateTo;