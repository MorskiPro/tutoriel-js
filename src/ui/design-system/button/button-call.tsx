import React from 'react';
import { Button } from './button';
import { RiPhoneFill } from 'react-icons/ri';

const CallButton = () => {
    const phoneNumber = "+33123456789"; // Remplacez par le numéro que vous souhaitez appeler

    const handleCall = () => {
        // Ouvrir l'application de téléphone avec le numéro
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <Button onClick={handleCall} variant="ico" iconTheme="gray" icon={{icon: RiPhoneFill}}size="medium">
            Commander </Button>
    );
};

export default CallButton;
