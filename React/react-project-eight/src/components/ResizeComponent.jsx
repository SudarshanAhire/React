import React, { useState, useEffect } from 'react';

function ResizeComponent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            console.log("Event Listener Added");
        };

        // Add the event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener on component unmount
        return () => {
            console.log("Event Listener Removed");
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Dependency array ensures this runs only on mount/unmount

    return (
        <div>
            <h1>Window width: {windowWidth}px</h1>
        </div>
    );
}

export default ResizeComponent;
