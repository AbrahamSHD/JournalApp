import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";


const drawerWith = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box 
            className="animate__animated animate__fadeIn animate__faster"
            sx={{ display: 'flex' }} 
        >

            {/* NavBar */}
            <NavBar drawerWith={ drawerWith } />

            {/* Sidebar */}
            <SideBar drawerWith={ drawerWith } />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                {/* Toolbar */}
                <Toolbar />

                { children }

            </Box>

        </Box>
    )
}
