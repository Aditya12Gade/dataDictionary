// import { useState, useEffect } from 'react';

// const useProcessedData = (dataDictionary) => {
//     const [rowData, setRowData] = useState([]);
//     const [filteredData, setFilteredData] = useState(null);
//     const [selectedRowId, setSelectedRowId] = useState(null);

//     useEffect(() => {

    

//         const filteredRows = dataDictionary.filter(row => row.column_datatype_name === "timestamp");
//         const transformedRows = filteredRows.map(row => ({
//             "Default Date": "",
//             "Customized Date": row.column_alias,
//             "entity": row.column_table_alias,
//             "sch_metadata_id": row.sch_metadata_id,
//         }));
//         setRowData(transformedRows);

//         const defaultRow = transformedRows.find(row => row["Customized Date"] === "Order Date");
//         if (defaultRow) {
//             setSelectedRowId(defaultRow.sch_metadata_id);
//             setFilteredData([defaultRow]);
//         }
//     }, [dataDictionary]);

//     return { rowData, filteredData, selectedRowId, setSelectedRowId };
// };

// export default useProcessedData;
