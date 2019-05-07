import React from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import stackN8 from './stackN8.PNG';
// import roadmapN8 from './roadmapN8.JPG';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


let imageUrl = require('./Images/paper.jpg');
var spacings = '20px';


export class N8 extends React.Component {
    render() {
        return (
            <div>
            <main style={{ width: '100%', display: 'contents', marginLeft: spacings * 3, marginRight: spacings * 3, backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', margin: 'auto' }}  >
                <div>
                                            About N8 :
                    
                    <Player   playsInline fluid={false}  width={500}  height={500} float="right">
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player>

                </div>
            </main>
            <div style={{textAlign: 'center'}}>
            <div> 
            <Grid container spacing={24}>
            <Grid item xs={4}>
                          </Grid>
                  <Grid item xs={4}>
                        
                  </Grid>
                  <Grid item xs={4}>
                         </Grid>
         </Grid>
         <br/>
            <Card style={{ padding: 10, margin: "auto", maxWidth: 1500 }}>
              <CardContent>
      
            <Grid container spacing={24} height={'400px'}>
              <Grid item xs={3}>
             
             <img src={stackN8} height={'400px'} width={'300px'} borderRadius={"50%"} overflow={"hidden"} alt={' '} />
                 
         
        </Grid>
      
        
        </Grid>
      
          </CardContent>
          </Card>
          </div>
          </div>
          </div>
        );
    }
}


N8.propTypes = {
    classes: PropTypes.object.isRequired,
};