import React from "react";
import { makeStyles } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    float: "right"
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <a href="/">
            <img
              src="uni_gadgets.png"
              alt="logo"
              component="a"
              style={{ width: "40px", height: "30px" }}
            />
          </a>
          <Typography variant="h6">My App</Typography>
          <div className={classes.logo}>
            <IconButton href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#">
              <InstagramIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
