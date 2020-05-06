import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="container__page--header" id="header" role="banner">
                <div className="container__general">
                    <div className="container__section--header">

                        <h1 className="text__SITE--title">
                            P
                            <span className="change1">O</span>
                            RTF
                            <span className="change2">O</span>
                            LI
                            <span className="change3">O</span>
                        </h1>

                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
