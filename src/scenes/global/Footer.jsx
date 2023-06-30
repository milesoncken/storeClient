import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop='70px' padding='40px 0' backgroundColor={neutral.light}>
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px, 30px, 40px)'>
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb='30px'
            color={shades.secondary[600]}>
            RAZA
          </Typography>
          <div>
            Raza Clothing, a name synonymous with style and sophistication,
            invites you to embrace a sartorial revolution. Discover captivating
            designs, impeccable craftsmanship, and a multitude of options that
            empower you to express your unique personality through fashion.
          </div>
        </Box>

        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            About
          </Typography>
          <Typography mb='30px'>
            <a href='/about'>Our Mission</a>
          </Typography>
          <Typography mb='30px'>
            <a href='/terms'>Terms & Conditions</a>
          </Typography>
          <Typography mb='30px'>
            <a href='privacy'>Privacy Policy</a>
          </Typography>
        </Box>

        <Box width='clamp(20%, 25%, 30%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Contact
          </Typography>
          <Typography mb='30px'>
            1831 Nancy Street
            <br /> Raleigh NC 27604
          </Typography>
          <Typography mb='30px' sx={{ wordWrap: "break-word" }}>
            Email: razaclothing@gmail.com
          </Typography>
          <Typography mb='30px'>(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
