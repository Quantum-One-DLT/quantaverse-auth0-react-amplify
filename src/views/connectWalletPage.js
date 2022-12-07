import React from "react";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import { useWeb3Onboard } from "@web3-onboard/react/dist/context";

const styles = (theme) => ({
  paperContainer: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1),
    paddingBottom: theme.spacing(3),
    maxWidth: 700,
    margin: "auto",
    marginTop: "200px",
  },
  fullWidth: {
    width: "100%",
  },
  title: {
    textAlign: "center",
    padding: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  hr: {
    width: "100%",
  },
  balance: {
    padding: theme.spacing(1),
    overflow: "wrap",
    textAlign: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    padding: theme.spacing(0.4),
  },
});

const useStyles = makeStyles(styles);

function ConnectWalletPage() {
  const classes = useStyles();
  return (
    <div>
      <div className="Title">
        <h1 className="navbar-logo">
          Quantaverse Uniswap Interface
        </h1>
      </div>

      <Container>
        <Paper className={classes.paperContainer}>
          <Typography
            variant="h6"
            className={classes.title}
            color="common.white"
          >
            Please connect an Ethereum wallet to your browser to use the
            application
          </Typography>
        </Paper>
      </Container>

      <Grid
        container
        className="bg-dark p-3 text-center" style={{color: "white"}}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        <p>
          QuantaVerse Uniswap Interface, created by Quantum One DAO. {" ."}
          <a href="https://quantaverseid.io/privacy">Privacy Policy</a>
        </p>
      </Grid>
    </div>
  );
}

export default ConnectWalletPage;
