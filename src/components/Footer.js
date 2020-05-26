import React from "react";

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <span className="text-center">
                    Copyright &copy;
                    {new Date().getFullYear()} All rights reserved | made with <i className="icon-heart text-danger" aria-hidden="true"></i> by Elena Demidionok
                     </span>
            </div>
        </footer>

    )
}
export default Footer;