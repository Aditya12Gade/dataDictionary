import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Preferences from '../Index';


const dataDictionary = [
    {
        "column_name": "Returned",
        "column_alias": "Returned",
        "column_type": "Dimension",
        "unit": null,
        "formula": null,
        "column_table_name": "a908596b89506d466f225125ea05d8a3",
        "column_is_active": true,
        "sch_schema_id": 24107,
        "column_is_date": false,
        "column_default_order": "NA",
        "default_agg_type": "NA",
        "column_table_alias": "Returns",
        "enable_for_filter": false,
        "what_if_max": null,
        "what_if_min": null,
        "what_if_step": null,
        "column_custom_datatype": null,
        "unit_placement": "suffix",
        "sch_metadata_id": 10382797,
        "column_is_pre_calculated": false,
        "column_datatype_name": "varchar",
        "is_auto_generated": false,
        "lrf_query_lang_id": 1,
        "date_format": null,
        "color": "#fffeee",
        "thousand_separator": true,
        "formatter_text_position": "Left",
        "precision": 2,
        "formatting_type": "123,456,789",
        "abbreviation": ["Numeric", "billions"]
    },
    {
        "column_name": "Order_ID",
        "column_alias": "Order ID",
        "column_type": "Dimension",
        "unit": null,
        "formula": null,
        "column_table_name": "a908596b89506d466f225125ea05d8a3",
        "column_is_active": false,
        "sch_schema_id": 24107,
        "column_is_date": false,
        "column_default_order": "NA",
        "default_agg_type": "NA",
        "column_table_alias": "Returns",
        "enable_for_filter": false,
        "what_if_max": null,
        "what_if_min": null,
        "what_if_step": null,
        "column_custom_datatype": null,
        "unit_placement": "suffix",
        "sch_metadata_id": 10382798,
        "column_is_pre_calculated": false,
        "column_datatype_name": "varchar",
        "is_auto_generated": false,
        "lrf_query_lang_id": 1,
        "date_format": null,

    }]


// describe('Preferences Component', () => {

test('renders the component correctly', () => {
    render(<Preferences dataDictionary={dataDictionary} />);
    expect(screen.getByText('+ Change default date')).toBeInTheDocument();
});

// it('opens the modal on button click', () => {
//     render(<Preferences />);
//     fireEvent.click(screen.getByText('+ Change default date'));
//     expect(screen.getByRole('dialog')).toBeInTheDocument();
//     expect(screen.getByTestId('ag-grid')).toBeInTheDocument();
// });

// it('closes the modal on Cancel button click', () => {
//     render(<Preferences />);
//     fireEvent.click(screen.getByText('+ Change default date'));
//     fireEvent.click(screen.getByText('Cancel'));
//     expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
// });

// it('selects a radio button and updates state correctly', () => {
//     render(<Preferences />);
//     fireEvent.click(screen.getByText('+ Change default date'));

//     const radioButtons = screen.getAllByRole('radio');
//     fireEvent.click(radioButtons[1]);
//     expect(radioButtons[1].checked).toBe(true);
// });

// it('updates filtered data and closes modal on OK button click', () => {
//     render(<Preferences />);
//     fireEvent.click(screen.getByText('+ Change default date'));

//     const radioButtons = screen.getAllByRole('radio');
//     fireEvent.click(radioButtons[1]);
//     fireEvent.click(screen.getByText('OK'));

//     expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
//     expect(screen.getByTestId('ag-grid')).toBeInTheDocument();
//     expect(screen.getByText('Delivery Date')).toBeInTheDocument();
// });
// });
