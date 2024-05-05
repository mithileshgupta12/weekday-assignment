import {FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {IFilters} from "../interfaces.ts";

interface IProps {
    getFilters: (filters: IFilters) => void
}

const Filters: FC<IProps> = ({getFilters}) => {
    const [role, setRole] = useState("");
    const [numEmployees, setNumEmployees] = useState("");
    const [experience, setExperience] = useState("");
    const [isRemote, setIsRemote] = useState("");
    const [minBasePay, setMinBasePay] = useState("");
    const [companyName, setCompanyName] = useState("");

    // Call handleFiltersChange whenever any state changes
    useEffect(() => {
        getFilters({ role, numEmployees, experience, isRemote, minBasePay, companyName });
    }, [role, numEmployees, experience, isRemote, minBasePay, companyName]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="roles-select-label">Roles</InputLabel>
                    <Select
                        labelId="roles-select-label"
                        id="roles-select"
                        value={role}
                        label="Roles"
                        onChange={(event) => setRole(event.target.value)}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="frontend">Frontend</MenuItem>
                        <MenuItem value="ios">iOS</MenuItem>
                        <MenuItem value="android">Android</MenuItem>
                        <MenuItem value="tech lead">Tech Lead</MenuItem>
                        <MenuItem value="backend">Backend</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="employees-select-label">Number of Employees</InputLabel>
                    <Select
                        labelId="employees-select-label"
                        id="employees-select"
                        value={numEmployees}
                        label="Number of Employees"
                        onChange={(event) => setNumEmployees(event.target.value)}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="experience-select-label">Experience</InputLabel>
                    <Select
                        labelId="experience-select-label"
                        id="experience-select"
                        value={experience}
                        label="Experience"
                        onChange={(event) => setExperience(event.target.value)}
                    >
                        <MenuItem value={""}>Select</MenuItem>
                        <MenuItem value={"1"}>0 - 3</MenuItem>
                        <MenuItem value={"2"}>3 - 5</MenuItem>
                        <MenuItem value={"3"}>More than 5</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="remote-select-label">Remote</InputLabel>
                    <Select
                        labelId="remote-select-label"
                        id="remote-select"
                        value={isRemote}
                        label="Remote"
                        onChange={(event) => setIsRemote(event.target.value)}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={"yes"}>Yes</MenuItem>
                        <MenuItem value={"no"}>No</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <InputLabel id="base-pay-select-label">Minimum Base Pay Salary</InputLabel>
                    <Select
                        labelId="base-pay-select-label"
                        id="base-pay-select"
                        value={minBasePay}
                        label="Minimum Base Pay Salary"
                        onChange={(event) => setMinBasePay(event.target.value)}
                    >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value={"1"}>$0 - $50,000</MenuItem>
                        <MenuItem value={"2"}>$50,000 - $100,000</MenuItem>
                        <MenuItem value={"3"}>{">= $100,000"}</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{m: 1, minWidth: "100%"}}>
                    <TextField
                        id="company-name-input"
                        value={companyName}
                        label="Search Company Name"
                        onChange={(event) => setCompanyName(event.target.value)}
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default Filters;
