import React, {useState, useContext} from "react";

const loadingContext = React.createContext({
    loading: true,
    setLoading: (loading) => {}
});

export function LoadingProvider({children}) {    

    const [loading, setLoading] = useState(true);

    return (
        <loadingContext.Provider value={{loading, setLoading}}>
            {children}
        </loadingContext.Provider>
    );

}

export function useLoading() {

    const {loading, setLoading} = useContext(loadingContext);

    return {
        loading,
        setLoading
    }

}