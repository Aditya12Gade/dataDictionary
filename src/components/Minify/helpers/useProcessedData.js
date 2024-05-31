import { useMemo, useCallback, useState } from 'react';
import { Button, Popconfirm } from 'antd';

const UseProcessedData = () => {
    const defaultColDef = useMemo(() => ({
        filter: true,
        sortable: true,
        floatingFilter: true,
        resizable: false,
    }), []);

    const [rowData, setRowData] = useState([
        { id: 1, Catchphrasename: "Tesla", Catchphrase: "Model Y", price: "your Question", electric: true },
        { id: 2, Catchphrasename: "Ford", Catchphrase: "F-Series", price: "your Question", electric: false },
        { id: 3, Catchphrasename: "Toyota", Catchphrase: "Corolla", price: "your Question", electric: false },
    ]);

    const handleDelete = useCallback((id) => {
        setRowData(prevRowData => prevRowData.filter(row => row.id !== id));
    }, []);

    const colDefs = useMemo(() => [
        { field: "Catchphrasename", headerName: "CatchPhrase Name" },
        { field: "Catchphrase", headerName: "CatchPhrase" },
        { field: "price", headerName: "Questions" },
        {
            field: "Action",
            headerName: "Action",
            cellRenderer: (params) => (
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={() => handleDelete(params.data.id)}
                >
                    <Button>Delete</Button>
                </Popconfirm>
            ),
            filter: false,
            checkboxSelection: false,
        }
    ], [handleDelete]);

    return {
        defaultColDef,
        rowData,
        colDefs,
    };
};

export default UseProcessedData;
