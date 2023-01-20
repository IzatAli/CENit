import React from 'react'
import{Avatar,FormControlLabel,Checkbox,Grid,Paper,TextField,Typography,Button} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import {Link} from 'react-router-dom'
export default function Login() {
    const paperStyle= {
        height:"70vh",
        width:300,
        padding: 20,
        margin:"20px auto"
    };
    const avtarStyle ={
        backgroundColor:"green"
    }
    const commonStyle={
        marginTop:10,
        marginBottom:10
    }
    const linkStyle= {
        padding:20
    }
  return (
    <div>
            <Grid>
                <Paper elevation={7} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avtarStyle}>
                            <LockOutlinedIcon ></LockOutlinedIcon>
                        </Avatar>
                        <h2>Login</h2>
                    </Grid>
                    <TextField
                        variant='standard' label="username" placeholder='Enter your username' fullWidth required
                    />
                    <TextField
                        variant='standard' label="password" placeholder='Enter your password' type="password" fullWidth required style={commonStyle}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Remember me"
                    />
                    <Button variant="contained" fullWidth style={commonStyle}> Login</Button>
                    <Typography style={commonStyle}>
                        <Link href='#'>Forget Password</Link>
                    </Typography>
                    <Typography style={commonStyle}>
                        Don't have any account
                        <Link style={linkStyle} to='/Signup'>  Create account</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
  )
}
