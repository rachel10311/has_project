import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

class Customer extends React.Component{
    //render는 항상 실행되는 컴포넌트임, 항상 return이 들어가야함
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.studentId}</TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.room}</TableCell>
                <TableCell>{this.props.date}</TableCell>
                <TableCell>{this.props.getPost}</TableCell>
            </TableRow>
        )
    }
}

export default Customer;
