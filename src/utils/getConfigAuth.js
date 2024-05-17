const getConfigAuth = () => {
    return {
        Headers: {
            Authorization: `Bearer ${'token'}`
        }
    }
};

export default getConfigAuth;
