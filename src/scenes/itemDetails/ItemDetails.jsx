import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../components/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bottomLoading, setBottomLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(`/api/products/${itemId}/`, {
      method: "GET",
    }).then(getItems());
    const itemJson = await item.json();
    setItem(itemJson[0]);
  }

  async function getItems() {
    setLoading(false);
    const items = await fetch(`/api/products`, {
      method: "GET",
    }).then(setBottomLoading(false));
    const itemsJson = await items.json();
    setItems(itemsJson);
  }

  const renderItem = () => {
    return (
      <Box width='80%' m='80px auto'>
        <Box display='flex' flexWrap='wrap' columnGap='40px'>
          {/* IMAGES */}
          <Box flex='1 1 40%' mb='40px'>
            <img
              alt={"test"}
              width='100%'
              height='100%'
              src={item?.image}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* ACTIONS */}
          <Box flex='1 1 50%' mb='40px'>
            <Box display='flex' justifyContent='space-between'>
              <Box>Home/Item</Box>
              <Box>Prev Next</Box>
            </Box>

            <Box m='65px 0 25px 0'>
              <Typography variant='h3'>{item?.name}</Typography>
              <Typography>${item?.price}</Typography>
              <Typography sx={{ mt: "20px" }}>
                {item?.shortDescription}
              </Typography>
            </Box>

            <Box display='flex' alignItems='center' minHeight='50px'>
              <Box
                display='flex'
                alignItems='center'
                border={`1.5px solid ${shades.neutral[300]}`}
                mr='20px'
                p='2px 5px'>
                <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#222222",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "150px",
                  padding: "10px 40px",
                }}
                onClick={() =>
                  dispatch(addToCart({ item: { ...item, count } }))
                }>
                ADD TO CART
              </Button>
            </Box>
            <Box>
              <Box m='20px 0 5px 0' display='flex'>
                <FavoriteBorderOutlinedIcon />
                <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
              </Box>
              <Typography>CATEGORIES: </Typography>
            </Box>
          </Box>
        </Box>

        {/* INFORMATION */}
        <Box m='20px 0'>
          <Tabs value={value} onChange={handleChange}>
            <Tab label='DESCRIPTION' value='description' />
            <Tab label='REVIEWS' value='reviews' />
          </Tabs>
        </Box>
        <Box display='flex' flexWrap='wrap' gap='15px'>
          {value === "description" && <div>{item?.longDescription}</div>}
          {value === "reviews" && <div>reviews</div>}
        </Box>

        {/* RELATED ITEMS */}
        <Box mt='50px' width='100%'>
          <Typography variant='h3' fontWeight='bold'>
            Related Products
          </Typography>
          <Box
            mt='20px'
            display='flex'
            flexWrap='wrap'
            columnGap='1.33%'
            justifyContent='space-between'>
            {bottomLoading ? (
              <>
                <h2>LOADING</h2>
              </>
            ) : (
              <>
                {items.slice(0, 4).map((item, i) => (
                  <Item key={`${item}-${i}`} item={item} />
                ))}
              </>
            )}
          </Box>
        </Box>
      </Box>
    );
  };

  useEffect(() => {
    getItem();
    // getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{loading ? <h1>LOADING</h1> : renderItem()}</>;
};

export default ItemDetails;
