import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";

import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";

import { Navigate, useNavigate } from "react-router-dom";
import { shades } from "../../theme";

import { setIsCartOpen, setIsUserOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='60px'
      backgroundColor='rgba(255,255,255, 0.95)'
      color='black'
      position='fixed'
      top='0'
      left='0'
      zIndex='1'>
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        alignItems='center'>
        <Box
          onClick={() => {
            navigate("/");
          }}
          style={{ fontSize: 40, fontWeight: "400" }}
          color={shades.secondary[500]}
          sx={{ "&:hover": { cursor: "pointer" } }}>
          RAZA
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          columnGap={"20px"}
          zIndex={2}>
          {/* <IconButton sc={{ color: "black" }}>
            <SearchOutlined />
          </IconButton> */}
          <IconButton
            onClick={() => {
              navigate("/login");
            }}
            sc={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color='secondary'
            invisible={cart.length === 0}
            sx={{
              "& MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}>
            <IconButton
              onClick={() => {
                dispatch(setIsCartOpen({}));
              }}
              sc={{ color: "black" }}>
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          {/* <IconButton sc={{ color: "black" }}>
            <MenuOutlined />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
