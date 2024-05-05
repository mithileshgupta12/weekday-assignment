import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";

const Filters = () => {
    const [roles] = useState("")

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Roles</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="demo-simple-select"
                        value={roles}
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Number of Employees</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="demo-simple-select"
                        value={roles}
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Experience</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="demo-simple-select"
                        value={roles}
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Remote</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="demo-simple-select"
                        value={roles}
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Minimum Base Pay Salary</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="demo-simple-select"
                        value={roles}
                        label="Age"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <TextField
                        id="demo-simple-select"
                        value={roles}
                        label="Search Company Name"
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default Filters;