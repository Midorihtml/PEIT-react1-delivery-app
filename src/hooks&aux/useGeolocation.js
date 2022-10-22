import React from "react";

export const useGeolocation = () => {
    const [location, setLocation] = React.useState(null);
    React.useMemo(() => {
        const succes = (data) => {
            const { latitude, longitude } = data.coords;
            setLocation({ lat: latitude, lon: longitude });
        };
        navigator.geolocation.getCurrentPosition(succes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (location) return location;
}
