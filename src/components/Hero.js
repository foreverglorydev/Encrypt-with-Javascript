/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { getTranslations as t } from "../../locales";

// progressbar part here. bozo!
import NextNprogress from 'nextjs-progressbar';

const useStyles = makeStyles((theme) => ({
  heroTitle: {
    color: theme.palette.diamondBlack.main,
    marginTop: 20,
  },
  heroSubTitle: {
    color: theme.palette.diamondBlack.main,
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        className={classes.heroTitle}
      >
        {"Javascript Encrypt"}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        className={classes.heroSubTitle}
      >
        {t('sub_title')}
        <br/>
        <NextNprogress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
      </Typography>
    </Container>
  );
}
