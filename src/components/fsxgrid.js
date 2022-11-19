import * as React from "react"; 
import { XGrid, GridToolbar, getGridColDef, getInitialGridRowState } from '@material-ui/x-grid';
import {LicenseInfo} from '@material-ui/x-grid';
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: '0',
    maxWidth: '100%'
  },
  contents: {
    flexGrow: 1,
    flexShrink: 1,
    padding: theme.spacing(3),
    persistentBehavior: 'fit'
  },
 }

)); 

export default function FSXGrid() {
  const classes=useStyles();
  const [width,setWidth]=React.useState(window.innerWidth);
  const [height,setHeight]=React.useState(window.innerHeight);
  const updateWidthAndHeight= () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize",updateWidthAndHeight);
    return () => window.removeEventListener("resize",updateWidthAndHeight);
  });
  
  const checkKeysUnderObject = (obj, result) => {
    for (let key in obj) {
      if (key) { // push the value to the result array only if key exists
        result.push(key + ": " + obj[key]);
      }
    }
  };

  const data = {
  columns: [
    { field: "id", headerName: "ID", width: "28" },
    { field: "negotiation_arrangement", headerName: "ARRANGEMENT TYPE", width: "32", type:"string"},
    { field: "name", headerName: "NAME", width: "108", type:"string"},
    { field: "billing_code_type", headerName: "CODE TYPE", width: "48", type:"string"},
    { field: "billing_code_type_version", headerName: "VERSION", width: "48", type:"string"},
    { field: "billing_code", headerName: "BILLING CODE", width: "48", type:"string"},
    { field: "description", headerName: "DESCRIPTION", width: "72", type:"string"},
    { field: "provider_references", headerName: "PROVIDER REF", width: "40", type: "string"},
    { field: "negotiated_price_type", headerName: "PRICE TYPE", width: "48", type: "string"},
    { field: "negotiated_rate", headerName: "RATE", width: "72", type: "string" },
    { field: "expiration_date", headerName: "EXPIRY", width: "80", type: "date"},
    { field: "service_code", headerName: "SERVICE CODE", width: "30"},
    { field: "billing_class", headerName: "BILLING CLASS", width: "80"},
  ],

  rows: [
    {id: 1, negotiation_arrangement: "ffs",name: "FUSION LUMSAC JT W SYNTH SUB, ANT APPR A COL, PERC",billing_code_type: "ICD",billing_code_type_version: "2021",billing_code: "0SG33J0",description: "FUSION LUMSAC JT W SYNTH SUB, ANT APPR A COL, PERC",provider_references:[148994],negotiated_price_type:"negotiated",negotiated_rate: "21722.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 2, negotiation_arrangement: "ffs",name: "FUSION LUMSAC JT W SYNTH SUB, ANT APPR A COL, PERC",billing_code_type: "ICD",billing_code_type_version: "2021",billing_code: "0SG33J0",description: "FUSION LUMSAC JT W SYNTH SUB, ANT APPR A COL, PERC",provider_references:[148994],negotiated_price_type:"per diem",negotiated_rate: 4244.00,expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 3, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX", provider_references:[216764],negotiated_price_type: "per diem",negotiated_rate: "1130.22",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"], billing_class: "institutional"},
    {id: 4, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[216764],negotiated_price_type: "per diem",negotiated_rate: "1130.22",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 5, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[150525],negotiated_price_type: "per diem",negotiated_rate: "3300.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 6, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[551718],negotiated_price_type: "per diem",negotiated_rate: "2492.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 7, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[621110],negotiated_price_type: "per diem",negotiated_rate: "4746.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 8, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[621110],negotiated_price_type: "per diem",negotiated_rate: "3322.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 9, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[124409],negotiated_price_type: "per diem",negotiated_rate: "5500.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 10, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[182560],negotiated_price_type: "per diem",negotiated_rate: "1242.33",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 11, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[376882],negotiated_price_type: "per diem",negotiated_rate: "3674.01",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 12, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[124409],negotiated_price_type: "per diem",negotiated_rate: "5225.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},
    {id: 13, negotiation_arrangement: "ffs",name: "152/REV & O36.8929/ICD10DX",billing_code_type: "LOCAL",billing_code_type_version: "2021",billing_code: "MATCOP11727",description: "152/REV & O36.8929/ICD10DX",provider_references:[325431],negotiated_price_type: "per diem",negotiated_rate: "781.00",expiration_date: "9999-12-31",service_code: ["21", "31", "32", "33", "34", "51", "54", "55", "56", "61"],billing_class: "institutional"},   
  ]};
  
  return  (
    <div className="root contents vh-100">
      <h4 className="text-center">Aetna In-Network Rate Sample</h4>
      <p className="text-center">
              The data is excerpted from Aetna's public rate disclosure portal.      
          </p>
       <XGrid
           {...data}
           loading={data.rows.length === 0}
           rowHeight={30}
           autoHeight={true}
           disableColumnMenu={true}
           density={"compact"}
           components={{
               Toolbar: GridToolbar,
           }}
       />
   </div>

);
}

LicenseInfo.setLicenseKey(
  '19494f35107113d0c813dfab75b058b4T1JERVI6MjQzODgsRVhQSVJZPTE2NTE1MDQzNDkwMDAsS0VZVkVSU0lPTj0x'
);
