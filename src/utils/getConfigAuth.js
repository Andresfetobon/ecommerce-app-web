const getConfigAuth = () => {
    return {
        Headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
};

export default getConfigAuth;
