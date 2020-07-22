import React from "react";
import ButtonAppBar from "./header";

export default function Home() {
    return (
        <div>
            <ButtonAppBar />
            <img
                style={{width:'auto',marginTop:'100px'}}
                src="https://miro.medium.com/max/1352/1*nMWZhjBC4z-ZB4Y0XnxkSQ.png"
                alt="teameBulder"
            />
        </div>
    );
}
