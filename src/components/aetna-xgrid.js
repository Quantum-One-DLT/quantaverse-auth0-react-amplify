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

const useStyles=makeStyles((theme) => ({

  roots: {
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
    <div className="hero text-center">
     <h2 className="mb-0">Complete KYC, receive an airdrop and chance at 250 million Roton!</h2>
      <h6 className="mb-5 text-center">Airdrop limited to 1st 3500 users.</h6>
      <div>
      {!isAuthenticated && (
      <LoginButton/>
      )}
      {isAuthenticated && (
      <LogoutButton/>
      )}
      </div>
      <Divider component="div" variant="middle" className="mt-5" />
    </div>

  );
}
