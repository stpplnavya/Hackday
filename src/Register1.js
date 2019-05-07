import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


let imageUrl = require('./Images/paper.jpg');
var spacings = '20px';

export class Register1 extends React.Component {
    render () {
    return (
  
        <main  
        style={{ width: '100%', display: 'contents', marginLeft: spacings * 3, marginRight: spacings * 3, backgroundImage: 'url(' + imageUrl + ')', backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', margin: 'auto'}}  >
       
            <div className="margin-register" >
                {/* <div align="center" width='100%'>
                   
                        <Avatar align='center' style={{ margin: 'auto', marginTop: '20px',   margin: spacings, backgroundColor: 'secondary' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                   
                 
                        <Typography component="h1" variant="h5">
                            <b><font color="black">  Register </font></b>
                        </Typography>
                   
                    <br></br>
                </div> */}
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: '60px'}}>

                    <div style={{ marginLeft: '50px', marginRight: '40px',float: "left", width: '30%' }}>

                        <Typography component="h4" variant="h6">
                            <b><font color="black">  Basic Details </font></b>
                        </Typography>

                        <form style={{ width: '100%', marginTop: 0}}>
                            <FormControl margin="normal" required fullWidth >
                                <InputLabel htmlFor="name"><b>Name</b></InputLabel>
                                <Input id="name" name="name" autoComplete="name" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="assoID"><b>Associate ID</b></InputLabel>
                                <Input id="assoID" name="assoID" autoComplete="assoID" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email"><b>Email Address</b></InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="newPassword    "><b>Set Password</b></InputLabel>
                                <Input name="newPassword" type="password" id="newPassword" autoComplete="new-password" />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="conPassword"><b>Confirm Password</b></InputLabel>
                                <Input name="conPassword" type="password" id="conPassword" autoComplete="confirm-password" />
                            </FormControl>

                        </form>
                    </div>
                    <div style={{ marginRight: '50px', marginLeft: '40px',  float: "left", width: '70%' }}>

                        <Typography component="h4" variant="h6">
                            <b><font color="black">Skills</font></b>
                        </Typography>

                        <form style={{ align: 'left' }}>
                            {/* <Collapsible1/> */}
                            <div style={{ marginTop: '20px',   width: '100%' }}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography style={{ fontSize: 14 }}> Mainframes </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Development"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Testing"
                                            />
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography style={{ fontSize: 14}}> Frameworks </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label=".Net/PHP Consultant"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value=".Net" color="primary" />}
                                                label=".Net Dev"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label=".Net UI developer"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Java Developer"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Java Achitect"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Java QA Tester"
                                            />
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography style={{ fontSize: 14 }}> Voice </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Operations"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox value=".Net" color="primary" />}
                                                label="Technical Support"
                                            />
                                            
                                        </Typography>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </div>
                        </form>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    align="center"
                    style={{ marginBottom: '30px' , marginTop: spacings * 3,float: "right" , marginRight: '40px'}}
                >
                    submit
          </Button>
            </div>
        </main>
       
    );
    }
}

Register1.propTypes = {
    classes: PropTypes.object.isRequired,
};

