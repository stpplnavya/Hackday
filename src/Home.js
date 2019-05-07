import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import { CardActionArea } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Switch, Route ,Link } from 'react-router-dom';

const styles = {
    tableData: {
        paddingRight: '20px',
        paddingLeft: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
    },

    button: {
        margin: 'auto',
    },
    card: {
        minWidth: 270,
        maxWidth: 500,
        minHeight: 170,
    },
    media: {
        height: 140,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 'x-large',
        marginBottom: 80,
        color: "#bf4a61",
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        textAlign: 'center',
        float: 'right',
    }

};

let imageUrl = require('./Images/download.png');
let imageUrlPi = require('./Images/download (1).png');
let imageUrlN8 = require('./Images/N8.png');


function SimpleCard(props) {
    const { classes } = props;
    return (
        <div className={classes.container} style={{ margin: 'auto' }}>
            <table >
                <tr >
                    <td className={classes.tableData}>
                        <Card className={classes.card} style={{ backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography className={classes.title} color="#bf4a61" gutterBottom variant="h5" component="h2" >
                                        <b> <font face='forte' > Lifion </font></b>
                                    </Typography> 
                                </CardContent>
                                <CardMedia
                                    className={classes.media}
                                />

                                <Button
                                    size="medium"
                                    color="primary"
                                    style={{ boxAlign: 'center' }}
                                    fullWidth><font face="forte" color='#bf4a61'>
                                       <b> Explore </b>
                                    </font>
                                </Button>
                            </CardActionArea>
                        </Card>
                    </td><td className={classes.tableData}>
                    <Card className={classes.card} style={{ backgroundImage: 'url(' + imageUrlN8 + ')', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            <CardActionArea>
                                <CardContent>
                                <Typography className={classes.title}  gutterBottom variant="h5" component="h2" >
                                        <b> <font face='forte' > N8 </font></b>
                                    </Typography> 
                                </CardContent>
                                <CardMedia
                                    className={classes.media}
                                />

                                <Link style={{ textDecoration: "none" }} to="/N8">
                                <Button
                                    size="medium"
                                    color="primary"
                                    style={{ boxAlign: 'right' }}
                                    fullWidth>
                                    <font face="forte" color='#bf4a61'>
                                      <b> Explore </b> 
                                    </font>
                                </Button>
                                </Link> 
                            </CardActionArea>
                        </Card>
                    </td>
                    <td className={classes.tableData}>
                       
                        <Card className={classes.card} style={{ backgroundImage: 'url(' + imageUrlPi + ')', backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography className={classes.title} color="textPrimary" gutterBottom variant="h5" component="h2" >
                                        <b> <font face='forte' > Pi </font></b>
                                    </Typography> 
                                </CardContent>
                                <CardMedia
                                    className={classes.media}
                                />

                                <Button
                                    size="medium"
                                    color="primary"
                                    style={{ boxAlign: 'right' }}
                                    fullWidth>
                                    <font face="forte" color='#bf4a61'>

                                     <b>  Explore </b> 
                                    </font>
                                </Button>
                            </CardActionArea>
                        </Card>
                    </td>

                </tr>

            </table>
            <div textAlign='center'>
                <Button variant="contained" color="secondary" className={classes.button} style={{ float: 'right' , marginBottom: '20px'}}>
                    Add new product
                </Button>
            </div>
                      
        </div>

    );
}

export default withStyles(styles)(SimpleCard);

