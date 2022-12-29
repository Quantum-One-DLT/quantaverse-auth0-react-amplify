import * as React from "react"; 
import { XGrid, GridToolbar, getGridColDef, getInitialGridRowState } from '@material-ui/x-grid';
import {LicenseInfo} from '@material-ui/x-grid';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import { Button, Divider } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LoginModal from './loginModal';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #03fff6 30%, #0F5577 90%)',
    borderRadius: 6,
    border: 0,
    color: 'white',
    height: 32,
    padding: '0 25px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontWeight: 600,
  },
  label: {
    textTransform: 'capitalize',
  },
})(LoginButton);

const useStyles=makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: '0',
    maxWidth: '100%'
  },
  Accordion: {
    background: "#363640"
  },
  contents: {
    flexGrow: 1,
    flexShrink: 1,
    padding: theme.spacing(3),
    persistentBehavior: 'fit'
  },
 }

)); 

export default function AetnaXGrid() {
  const {
    isAuthenticated
  } = useAuth0();
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
    { field: 'id', headerName: 'ID', width: "32" },
    { field: "plan_name", headerName: "PLAN NAME", width: "120" },
    { field: "plan_id_type", headerName: "PLAN ID TYPE", width: "32" },
    { field: "plan_id", headerName: "PLAN ID", width: "72" },
    { field: "plan_market_type", headerName: "MARKET", width: "72" },
    { field: "in_network_files", headerName: "IN NETWORK FILES", width: "256", renderCell: (params) => (<Link> <a href={params.value}>{params.value}</a></Link>)},
    { field: "allowed_amount_files", headerName: "ALLOWED AMOUNT FILES", width: "256", renderCell: (params) => (<Link> <a href={params.value}>{params.value}</a></Link>)},
  ],

  rows: [
    {id: 1, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Aetna Choice POS IIA", plan_id_type: "EIN", plan_id: "060646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_f783e744-b9f6-4ff2-a688-460bbbe2d155_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_f783e744-b9f6-4ff2-a688-460bbbe2d155_Aetna-Life-Insurance-Company.json.gz"},
    {id: 2, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Open Access Aetna SelectAA", plan_id_type: "EIN", plan_id: "060646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_26af32c5-74e3-45d6-961a-04fda4e6ed9a_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_26af32c5-74e3-45d6-961a-04fda4e6ed9a_Aetna-Life-Insurance-Company.json.gz"},
    {id: 3, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthAA", plan_id_type: "EIN", plan_id: "060646718", plan_market_type:"Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_2e4463c3-10b6-47bd-8037-164ce2aee6d7_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_2e4463c3-10b6-47bd-8037-164ce2aee6d7_Aetna-Life-Insurance-Company.json.gz"},
    {id: 4, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthA", plan_id_type: "EIN", plan_id: "060646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_f3e9890e-579d-4d4e-b76e-0bb15c1aa916_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_f3e9890e-579d-4d4e-b76e-0bb15c1aa916_Aetna-Life-Insurance-Company.json.gz"},
    {id: 5, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthLT", plan_id_type: "EIN", plan_id: "060646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_67bce2ed-2e74-4abb-9642-9c0b76727b79_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_67bce2ed-2e74-4abb-9642-9c0b76727b79_Aetna-Life-Insurance-Company.json.gz"},
    {id: 6, plan_name: "MIDDLESEX HEALTH SYSTEM INC. Open Access Aetna SelectLT", plan_id_type: "EIN", plan_id: "060646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_773a4563-879c-4bd7-babf-e668bf072774_Aetna-Life-Insurance-Company.json.gz", allowed_amount_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_773a4563-879c-4bd7-babf-e668bf072774_Aetna-Life-Insurance-Company.json.gz"},
  ]};
  
  return  (
    <div className="text-center hero">
     <h2 className="mb-0">Verify ID and receive Quantum One's testnet token!</h2>
      <h6 className="mb-5 text-center">Limited to the 1st 3500 users </h6>
      <div>
      {!isAuthenticated && (
      <StyledButton/>
      )}
      {isAuthenticated && (
      <LogoutButton/>
      )}
      </div>
      <div>
      {!isAuthenticated && (
      <LoginModal/>
      )}
      </div>
      <Divider component="div" variant="middle" className="mt-5 mb-5" />
    <div className="root contents vh-100">
      <h4 className="text-center">HealthONE is incentivized healthcare for all and the single point of truth for all healthcare rate data.</h4>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is HealthONE and healthcare rate data? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The table below demonstrates how Aetna complies with the recent CMS mandate - effective 7/1/2022 - requiring insurance companies 
          to make their rate data available to the public in a consumer friendly format. Once consumers figure out how to handle "gunzip/gz" files, they realize they 
          must download and extract additional "gz" files to only run into 30GB+ JSON files that often require the user to modify their computers file system 
          configuration just to read a JSON formatted file. We're changing that by enabling easy viewing and cost of care analysis for the public - not just plan members. 
          All healthcare rate data will be added to a QuantaVerse side chain and act as a single point of truth and an integral component of the HealthONE platform. 
          We're also offering insurers and hospitals a 'stake for rate' data management plan where we handle making the data easy to read for the public provided they acquire and stake our mainnet coin - the Roton. 
          Check out our MediClear demo for a sample of Aetna's {" "} 
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="/mediclear-aetna-demo"
          > health plan rates
          </a> 
          </Typography>
        </AccordionDetails>
      </Accordion>
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
   </div>

);
}

LicenseInfo.setLicenseKey(
  '19494f35107113d0c813dfab75b058b4T1JERVI6MjQzODgsRVhQSVJZPTE2NTE1MDQzNDkwMDAsS0VZVkVSU0lPTj0x'
);
