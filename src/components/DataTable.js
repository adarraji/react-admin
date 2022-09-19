import React from "react";
import styled from "styled-components";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const DataTable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <CellAction>
                        <ViewButton>View</ViewButton>
                        <DeleteButton>Delete</DeleteButton>
                    </CellAction>
                )
            }
        }
    ]

    return (
        <Container>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Container>
    )
}

const Container = styled.div`
    height: 600px;
    padding: 20px;
`;

const CellAction = styled.div`
    
`;

const ViewButton = styled.div`
    
`;


const DeleteButton = styled.div`
    
`;


const Title = styled.div`
    
`;

const LinkTo = styled.div`
    
`;

export default DataTable