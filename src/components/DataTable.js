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
    display: flex;
    align-items: center;
    gap: 15px;    
`;

const ViewButton = styled.div`
    padding: 2px 5px;
    border-radius: 5px;
    color: darkblue;
    border: 1px dotted rgba(0, 0, 139, 0.596);
    cursor: pointer;
`;


const DeleteButton = styled.div`
    padding: 2px 5px;
    border-radius: 5px;
    color: crimson;
    border: 1px dotted rgba(220, 20, 60, 0.6);
    cursor: pointer;
`;


const Title = styled.div`
    
`;

const LinkTo = styled.div`
    
`;

export default DataTable