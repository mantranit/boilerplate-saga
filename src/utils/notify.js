import React from 'react';
import { toast } from 'react-toastify';

const Wrapper = ({ color, icon, message }) => (
    <div style={{ color }}>
        <span className={'mdi mdi-' + icon}/> {message}
    </div>
);

class Notify {
    error(message) {
        toast(<Wrapper color="#D32F2E" icon="alert-circle" message={message}/>);
    };

    warning(message) {
        toast(<Wrapper color="#F79F04" icon="alert" message={message}/>);
    };

    info(message) {
        toast(<Wrapper color="#2B76D1" icon="information" message={message}/>);
    };

    success(message) {
        toast(<Wrapper color="#43A046" icon="check-circle" message={message}/>);
    };
}

export default new Notify();
