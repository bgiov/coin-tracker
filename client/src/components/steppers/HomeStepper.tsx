import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import walletLogo from "../../assets/images/timeline/wallet-dynamic-premium.png";
import chartLogo from "../../assets/images/timeline/chart-dynamic-premium.png";
import fileLogo from "../../assets/images/timeline/file-text-dynamic-premium.png";
import computer from "../../assets/images/home-images/Other 07.svg";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material/StepIcon";
import { IconButton, SvgIcon, Icon, Paper } from "@mui/material";

const steps = [
  "Connect wallets & exchanges",
  "Review transactions",
  "Get portfolio insights",
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  //   backgroundColor:
  //     theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  //   ...(ownerState.active && {
  //     backgroundImage:
  //       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  //     boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  //   }),
  //   ...(ownerState.completed && {
  //     backgroundImage:
  //       "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  //   }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  const imgHeight = 100;
  const imgWidth = 100;
  const icons: { [index: string]: React.ReactElement } = {
    1: <img src={walletLogo} height={imgHeight} width={imgWidth} />,
    2: <img src={fileLogo} height={imgHeight} width={imgWidth} />,
    3: <img src={chartLogo} height={imgHeight} width={imgWidth} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

export const HomeStepper = () => {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel
        activeStep={2}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};

          return (
            <Step key={label}>
              <StepLabel {...labelProps} StepIconComponent={ColorlibStepIcon}>
                <Paper
                  elevation={0}
                  style={{
                    borderRadius: "8px",
                    backgroundColor: "transparent",
                  }}
                >
                  <Typography variant="h5">{label}</Typography>
                </Paper>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};
