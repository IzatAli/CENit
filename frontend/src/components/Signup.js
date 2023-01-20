import React from 'react'
import{Avatar,FormControlLabel,Checkbox,Grid,Paper,TextField,Typography,Button} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import {Link} from 'react-router-dom'
export default function login() {
    const paperStyle= {
        height:"110vh",
        width:400,
        padding: 20,
        margin:"20px auto"
    };
    const avtarStyle ={
        backgroundColor:"blue"
    }
    const commonStyle={
        marginTop:10,
        marginBottom:10
    }
  return (
    <div>
            <Grid>
                <Paper elevation={7} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avtarStyle}>
                            <LockOutlinedIcon ></LockOutlinedIcon>
                        </Avatar>
                        <h2>SignUp</h2>
                    </Grid>
                    <TextField
                        variant='standard' label="username" placeholder='Enter your username' fullWidth required
                    />
                    <TextField
                        variant='standard' label="password" placeholder='Enter your password' type="password" fullWidth required style={commonStyle}
                    />
                    <TextField
                        variant='standard' label="confimPassword" placeholder='Renter your Password ' fullWidth required
                    />
                     <TextField
                        variant='standard' label="firstName" placeholder='Enter your First Name' fullWidth required
                    />
                     <TextField
                        variant='standard' label="lastName" placeholder='Enter your Last Name' fullWidth required
                    />
                     <TextField
                        variant='standard' label="dOB" placeholder='Enter your Date Of Birth' fullWidth required
                    />
                     <TextField
                        variant='standard' label="age" placeholder='Enter your Age' fullWidth required
                    />
                     <TextField
                        variant='standard' label="mobileNo" placeholder='Enter your Mobile No' fullWidth required
                    />
                     <TextField
                        variant='standard' label="address" placeholder='Enter your Address' fullWidth required
                    />
                    
                    <Button variant="contained" fullWidth style={commonStyle}> SignUp</Button>
                    
                    <Typography style={commonStyle}>
                         have any account
                        <Link to='/'>Click Login</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
  )
}
