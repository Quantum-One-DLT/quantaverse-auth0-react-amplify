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

  const data = {
  columns: [
    { field: 'id', headerName: 'ID', width: "24" },
    { field: "provider_references", headerName: "PROCEDURE CODE", width: "64" },
    { field: "negotiated_prices", headerName: "NEGOTIATED PRICES", width: "64" },
    { field: "negotiated_type", headerName: "TYPE", width: "72" },
    { field: "negotiated_rate", headerName: "RATE", width: "72" },
    { field: "expiration_date", headerName: "EXPIRY", width: "80"},
    { field: "service_code", headerName: "SERVICE CODE", width: "24"},
    { field: "billing_class", headerName: "BILLING CLASS", width: "96"},
  ],

  rows: [
    {id: 1, provider_references:['715820'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 2000.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "professional"}]},
    {id: 2, provider_references:['45265'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 1650.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "institutional"}]},
    {id: 3, provider_references:['45265'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 1650.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "institutional"}]},
    {id: 4, provider_references:['341826'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 2000.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "institutional"}]},
    {id: 5, provider_references:['799198'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 1500.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "professional"}]},
    {id: 6, provider_references:['223282'],negotiated_prices:[{negotiated_type:"fee schedule",negotiated_rate: 2250.00,expiration_date: "9999-12-31",service_code: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "41", "42", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "65", "71", "72", "81", "99"],billing_class: "professional"}]}, 
    
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