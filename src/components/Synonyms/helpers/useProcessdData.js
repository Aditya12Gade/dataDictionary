import { useState } from 'react';

const useProcessedData = () => {
    const [rowData, setRowData] = useState([]);
    const [inputs, setInputs] = useState({ Word: "", Category: "Order by", Synonyms: "" });

    const addRow = () => {
        const existingRow = rowData.find(row => row.Word === inputs.Word && row.Category === inputs.Category);
        if (existingRow) {
            existingRow.Synonyms = existingRow.Synonyms ? `${existingRow.Synonyms}, ${inputs.Synonyms}` : inputs.Synonyms;
            setRowData([...rowData]);
        } else {
            setRowData(prevRowData => [...prevRowData, { ...inputs }]);
        }
        setInputs({ Word: "", Category: "Order by", Synonyms: "" });
    };

    const removeSynonym = (rowIndex, synonym) => {
        setRowData(prevRowData => {
            const updatedRowData = [...prevRowData];
            const row = updatedRowData[rowIndex];
            row.Synonyms = row.Synonyms.split(', ').filter(s => s !== synonym).join(', ');
            return updatedRowData;
        });
    };

    const handleInputChange = (field, value) => {
        setInputs(prevInputs => ({
            ...prevInputs,
            [field]: value
        }));
    };

    return { rowData, inputs, addRow, removeSynonym, handleInputChange };
};

export default useProcessedData;
