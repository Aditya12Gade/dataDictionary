import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import UseProcessedData from '../Minify/helpers/useProcessedData';

const Minify = () => {
    const { defaultColDef, rowData, colDefs } = UseProcessedData();

    const fitColumnSize = (params) => params.api.sizeColumnsToFit();

    return (
        <div
            className="ag-theme-balham"
            style={{ height: 600, width: '100%' }}
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                onGridReady={fitColumnSize}
            />
        </div>
    );
};

export default Minify;
