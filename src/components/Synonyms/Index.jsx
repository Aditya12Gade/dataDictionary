import React from 'react';
import { Input, Row, Col, Button, Tag } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import useProcessedData from './helpers/useProcessdData';

const Synonyms = () => {
    const { rowData, inputs, addRow, removeSynonym, handleInputChange } = useProcessedData();

    const colDefs = [
        { field: "Word" },
        { field: "Category" },
        {
            field: "Synonyms",
            floatingFilter: false,
            cellRenderer: params => {
                if (params.value) {
                    return params.value.split(', ').map((synonym, index) => (
                        <Tag
                            key={index}
                            closable={true}
                            onClose={(e) => {
                                e.preventDefault();
                                removeSynonym(params.node.rowIndex, synonym);
                            }}
                        >
                            {synonym}
                        </Tag>
                    ));
                } else {
                    return null;
                }
            }
        }
    ];

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addRow();
        }
    };

    const fitColumnSize = (params) => params.api.sizeColumnsToFit();

    return (
        <div className="ag-theme-balham" style={{ height: 500 }}>
            <Row gutter={[16, 16]}>
                <Col>
                    <Input
                        placeholder="Input word type"
                        value={inputs.Word}
                        onChange={e => handleInputChange("Word", e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </Col>
                <Col>
                    <Input
                        placeholder="Synonyms"
                        value={inputs.Synonyms}
                        onChange={e => handleInputChange("Synonyms", e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </Col>
                <Col>
                    <Button onClick={addRow} type="primary">Add Row</Button>
                </Col>
            </Row>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={{ filter: true, sortable: true, floatingFilter: true }}
                onGridReady={fitColumnSize}
            />
        </div>
    );
};

export default Synonyms;
