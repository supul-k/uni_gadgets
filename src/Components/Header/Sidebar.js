import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SensorsIcon from "@mui/icons-material/Sensors";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

const Sidebar = () => {
  const drawerWidth = 240;

  const ListOne = ["modules", "sensors", "Send email", "Drafts"];
  const ListTwo = ["All mail", "Trash", "Spam"];

  return (
    <div>
      {/* full pc preview */}
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {ListOne.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <SensorsIcon />
                      ) : index === 1 ? (
                        <EdgesensorHighIcon />
                      ) : index === 2 ? (
                        <SensorOccupiedIcon />
                      ) : (
                        <SensorsIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {ListTwo.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <SensorsIcon />
                      ) : index === 1 ? (
                        <EdgesensorHighIcon />
                      ) : (
                        <SensorsIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
      {/* mobile preview */}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <Drawer
          variant="permanent"
          sx={
            {
              // width: '80%',
              // flexShrink: 0,
            }
          }
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {ListOne.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton sx={{ overflow: "auto" }}>
                    <ListItemIcon>
                      {index === 0 ? (
                        <SensorsIcon />
                      ) : index === 1 ? (
                        <EdgesensorHighIcon />
                      ) : (
                        <SensorsIcon />
                      )}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {ListTwo.map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 ? (
                        <SensorsIcon />
                      ) : index === 1 ? (
                        <EdgesensorHighIcon />
                      ) : (
                        <SensorsIcon />
                      )}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
