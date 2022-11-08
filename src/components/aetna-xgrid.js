import * as React from "react";
import { XGrid } from '@material-ui/x-grid';
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
  content: {
    flexGrow: 1,
    flexShrink: 1,
    padding: theme.spacing(3),
    persistentBehavior: 'fit'
  },
}

));
  
const columns = [
  { field: "plan_name", headerName: "PLAN NAME", width: "170" },
  { field: "plan_id_type", headerName: "PLAN ID TYPE", width: "170" },
  { field: "plan_id", headerName: "PLAN ID", width: "170" },
  { field: "plan_market_type", headerName: "MARKET", width: "170" },
  { field: "in_network_files", headerName: "IN NETWORK FILES", width: "170" },
  { field: "allowed_amount_files", headerName: "ALLOWED AMOUNT FILES", width: "170" },
];

const rows = [
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC. Aetna Choice POS IIA", plan_id_type: "EIN', plan_id: "60646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_f783e744-b9f6-4ff2-a688-460bbbe2d155_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_f783e744-b9f6-4ff2-a688-460bbbe2d155_Aetna-Life-Insurance-Company.json.gz"},
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC. Open Access Aetna SelectAA", plan_id_type: "EIN", plan_id: "60646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_26af32c5-74e3-45d6-961a-04fda4e6ed9a_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_26af32c5-74e3-45d6-961a-04fda4e6ed9a_Aetna-Life-Insurance-Company.json.gz"},
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthAA", plan_id_type: "EIN", plan_id: "60646718", plan_market_type:"Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_2e4463c3-10b6-47bd-8037-164ce2aee6d7_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_2e4463c3-10b6-47bd-8037-164ce2aee6d7_Aetna-Life-Insurance-Company.json.gz"},
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthA", plan_id_type: "EIN", plan_id: "60646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_f3e9890e-579d-4d4e-b76e-0bb15c1aa916_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_f3e9890e-579d-4d4e-b76e-0bb15c1aa916_Aetna-Life-Insurance-Company.json.gz"},
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC. Managed Behavioral HealthLT", plan_id_type: "EIN", plan_id: "60646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_67bce2ed-2e74-4abb-9642-9c0b76727b79_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_67bce2ed-2e74-4abb-9642-9c0b76727b79_Aetna-Life-Insurance-Company.json.gz"},
  {plan_name: "MIDDLESEX HEALTH SYSTEM INC.Open Access Aetna SelectLT", plan_id_type: "EIN", plan_id: "60646718", plan_market_type: "Group", in_network_files: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/inNetworkRates/2022-10-05_773a4563-879c-4bd7-babf-e668bf072774_Aetna-Life-Insurance-Company.json.gz", allowed_amount_file: "https://mrf.healthsparq.com/aetnacvs-egress.nophi.kyruushsq.com/prd/mrf/AETNACVS_I/ALICSI/2022-10-05/allowedAmounts/2022-10-05_773a4563-879c-4bd7-babf-e668bf072774_Aetna-Life-Insurance-Company.json.gz"},
];

export default function AetnaXGrid() {

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

  return (
            <div class="root"> 
            <div style={{ height: "500", width: "80%" }}>
             <h4>HealthONE incentivized healthcare platform</h4>
            <p> HealthONE rewards consumers, providers, and insurers for making lifestyle and business decisions that result in a significant reduction in the cost of care and better quality of life. 
                HealthONE includes future proof post quantum cryptography, mobile remote patient and machine management, and composable compliance that ensures you're spending time with those that matter most, not paperwork.</p> 
            <p>Download at your own discretion - files sizes greater than 30GB are common. We're in the process of making the data easy to read and analyze for the public - not just plan members.</p>
            <XGrid rows={rows} columns={columns} pageSize={5} />
            </div>
            </div>
        )
};

LicenseInfo.setLicenseKey(
  '19494f35107113d0c813dfab75b058b4T1JERVI6MjQzODgsRVhQSVJZPTE2NTE1MDQzNDkwMDAsS0VZVkVSU0lPTj0x'
);
