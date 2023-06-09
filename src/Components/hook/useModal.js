import React, { useState } from "react";

let useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return [isShowing, toggle]
}

export default useModal