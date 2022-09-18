import React from "react";
import styled from "styled-components";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";



const DataTable = () => {
    return (
        <Container>
            <DataGrid
                rows={userRows}
                columns={userColumns}
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

const Title = styled.div`
    
`;

const LinkTo = styled.div`
    
`;

export default DataTable