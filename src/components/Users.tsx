import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

interface Iprops {
    data: { id: number; email: string; first_name: string; last_name: string; avatar: string; }[]

}

const Users = ({ data }: Iprops) => {
    console.log(data)
    return (
        <Box sx={styles.root} >
            <Box component={'h1'}>Hello ReqRes users!</Box>
            <Grid container spacing={1} sx={styles.gridContainer}>
                {data?.map((user) => (
                    <Grid key={user.id} item xs={12} sm={6} md={4} lg={3} >
                        <Box sx={styles.Grid_Grid_box}>
                            <Typography sx={{ fontWeight: 900 }}>{user.first_name}</Typography>
                            <Typography>{user.email}</Typography>
                            <Box component={'img'} sx={styles.Box_img} src={user.avatar} />
                        </Box>
                    </Grid>
                ))}

            </Grid>
        </Box >
    )
}

export default Users



const styles = {
    root: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column',
    },
    gridContainer: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
    },
    Grid_Grid_box: { display: 'flex', gap: 1, flexDirection: 'column', },
    Box_img: { width: "120px", height: "120px", alignSelf: 'center' }
}