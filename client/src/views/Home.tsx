import {
  Typography,
  Grid,
  Paper,
  Divider,
  Box,
  Container,
} from "@mui/material";
import { useStyles } from "../styles/home-styles/styles";
import background from "../assets/images/home-images/Other 08.svg";
import portfolioIMG from "../assets/images/home-images/Other 13.svg";
import graphIMG from "../assets/images/home-images/Other 07.svg";
import softwareIMG from "../assets/images/home-images/Other 01.svg";
import { HomeNavBar } from "../navigation/HomeNavBar";
import EnterAppButton from "../styles/buttons/EnterAppButton";
import { styled } from "@mui/material/styles";
import giftColor from "../assets/images/home-images/gift.png";
import { FeatureCard } from "../components/cards/FeatureCard";
import shield from "../assets/images/home-images/lock-iso-premium.png";
import shieldC from "../assets/images/home-images/lock-iso-color.png";
import { FeatureStrings } from "../types/enum";
import "../styles/home-styles/home.css";
import walletLogo from "../assets/images/timeline/wallet-dynamic-premium.png";
import chartLogo from "../assets/images/timeline/chart-dynamic-premium.png";
import fileLogo from "../assets/images/timeline/file-text-dynamic-premium.png";
import { HomeStepper } from "../components/steppers/HomeStepper";
import { FadeCarousel } from "../components/carousel/FadeCarousel";
const Hero = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "8%" }}
    >
      <Grid item xs={6} style={{ textAlign: "right" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Armata",
            color: "#E3697D",
            marginTop: -5,
            fontWeight: "normal",
          }}
        >
          Track all your crypto profits
          <br /> from one place.
        </Typography>
        <Grid item xs={5} style={{ marginLeft: "auto", marginTop: 10 }}>
          <EnterAppButton text="Enter app" />
        </Grid>
      </Grid>
      <Grid item xs={4} style={{ textAlign: "left" }}>
        <img src={background} />
      </Grid>
    </Grid>
  );
};

export const Integrations = () => {
  const cryptoArray = [
    "ADA",
    "BCHA",
    "BNB",
    "BTC",
    "BUSD",
    "CHZ",
    "DOGE",
    "DOT",
    "ETC",
    "ETH",
    "FIL",
    "LINK",
    "LTC",
    "MATIC",
    "XRP",
    "SOL",
    "UNI",
    "USDC",
    "USDT",
  ];
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "40vh" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography
            variant="h2"
            style={{
              fontFamily: "Armata",
              color: "#8BBEDD",
            }}
          >
            powerful <strong>integrations</strong>.
          </Typography>
          <Typography
            variant="caption"
            style={{
              fontFamily: "Armata",
              color: "#8BBEDD",
              fontWeight: "bolder",
            }}
          >
            We support 300+ wallets and exchanges.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FadeCarousel dataArray={cryptoArray} />
        </Grid>
      </Grid>
    </Container>
  );
};

export const SecurityCard = () => {
  const homeStyles = useStyles();

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "40vh" }}>
      <Typography
        variant="h2"
        style={{
          fontFamily: "Armata",
          color: "#8BBEDD",
        }}
      >
        We take <strong>Security</strong> seriously.
      </Typography>

      <img src={shield} height={500} width={500} />
    </Container>
  );
};

export const Timeline = () => {
  const homeStyles = useStyles();

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "40vh" }}>
      <Typography
        variant="h2"
        style={{
          fontFamily: "Armata",
          color: "#E3697D",
        }}
      >
        Set up in <strong>3</strong> simple steps.
      </Typography>
      <div style={{ marginTop: "10%" }}>
        <HomeStepper />
      </div>
    </Container>
  );
};

export const Features = () => {
  const homeStyles = useStyles();
  const { portfolio, graphs, software } = FeatureStrings;
  const featureObjs = [
    {
      image: portfolioIMG,
      title: "Portfolio",
      subtitle: portfolio,
    },
    {
      image: softwareIMG,
      title: "Graphs",
      subtitle: graphs,
    },
    {
      image: graphIMG,
      title: "Software",
      subtitle: software,
    },
  ];

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "24vh" }}>
      <Typography variant="h2" className={homeStyles.typography}>
        Our <strong>features</strong>
      </Typography>

      <br />
      <Grid
        container
        spacing={15}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {featureObjs.map((i: any) => (
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <FeatureCard
              image={i.image}
              title={i.title}
              subtitle={i.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const Home = () => {
  const homeStyles = useStyles();

  return (
    <div className={homeStyles.root}>
      <HomeNavBar />
      <Hero />
      <Features />

      <Timeline />
      <Integrations />

      <SecurityCard />
    </div>
  );
};
