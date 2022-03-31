import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles"

function Header({setCoordinates}) {
    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng})
    }

  return (
    //   here we define the structure of the entire page
     <AppBar position="static">
         <Toolbar className={classes.toolbar}>
             <Typography variant="h5" className={classes.title} >
                 Travel Advisor App
             </Typography>
             {/* in material ui a box is just like a div, but css can be integrated */}
             <Box display="flex">
                <Typography variant="h6" className={classes.title} >
                    Explore New Places
                </Typography>
                {/* Our search bar is defined by the next snippet */}
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        {/* no understand */}
                        <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput }} />

                    </div>
                    </Autocomplete>
             </Box>

         </Toolbar>
     </AppBar>
  )
}

export default Header