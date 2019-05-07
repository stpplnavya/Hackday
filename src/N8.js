import React from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import PropTypes from 'prop-types';

let imageUrl = require('./Images/paper.jpg');
var spacings = '20px';

export class N8 extends React.Component {
    render() {
        return (
            <main style={{ width: '100%', display: 'contents', marginLeft: spacings * 3, marginRight: spacings * 3, backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', margin: 'auto' }}  >
                <div>
                    About N8 :
                    
                    <Player   playsInline fluid={false}  width={400}  height={200} float="right">
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>

                </div>
            </main>
        );
    }
}

N8.propTypes = {
    classes: PropTypes.object.isRequired,
};