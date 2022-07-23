import React from 'react';
import {TableContainer,TableBody,TableHead,TableRow,TableCell,Table,Paper} from '@mui/material'
import { styled } from '@mui/material/styles';

export const MUITable = () => {
    return (
        <TableContainer component={Paper} >
            <Table aria-label="customized table" stickyHeader className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => (
                            <TableRow key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.first_name}</TableCell>
                        <TableCell>{row.last_name}</TableCell>
                        <TableCell align='center'>{row.email}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}



const tableData = [{
    "id": 1,
    "first_name": "Reine",
    "last_name": "Chantillon",
    "email": "rchantillon0@toplist.cz",
    "gender": "Female",
    "ip_address": "101.181.193.195"
  }, {
    "id": 2,
    "first_name": "Conny",
    "last_name": "Louche",
    "email": "clouche1@barnesandnoble.com",
    "gender": "Male",
    "ip_address": "253.155.18.181"
  }, {
    "id": 3,
    "first_name": "Jacqueline",
    "last_name": "Troubridge",
    "email": "jtroubridge2@tripadvisor.com",
    "gender": "Female",
    "ip_address": "62.221.137.170"
  }, {
    "id": 4,
    "first_name": "Ermanno",
    "last_name": "Daynter",
    "email": "edaynter3@dyndns.org",
    "gender": "Male",
    "ip_address": "77.169.217.227"
  }, {
    "id": 5,
    "first_name": "Clarke",
    "last_name": "Mattingson",
    "email": "cmattingson4@mapquest.com",
    "gender": "Male",
    "ip_address": "191.154.115.214"
  }, 
  ]