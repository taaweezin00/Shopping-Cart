"use client";
import {
  IconButton,
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

const imageMap: { [key: string]: string } = {
  "iMac": "/images/iMac.jpg",
  "iPad Air": "/images/iPad Air.jpg",
  "iPad mini": "/images/iPad mini.jpg",
  "iPad Pro": "/images/iPad Pro.jpg",
  "iPad": "/images/iPad.jpg",
  "iPhone 15 Pro": "/images/iPhone 15 Pro.jpg",
  "iPhone 15": "/images/iPhone 15.jpg",
  "Mac mini": "/images/Mac mini.jpg",
  "Mac Studio": "/images/Mac Studio.jpg",
  "MacBook Air": "/images/MacBook Air.jpg",
  "MacBook Pro": "/images/MacBook Pro.jpg",
};

const formatNumber = (num: number) => num.toLocaleString('th-TH');

export default function ItemCart({
  itemname,
  itemPrice,
  handleIncremantal,
  handleDecremental,
}: {
  itemname: string;
  itemPrice: number;
  handleIncremantal: (price: number) => void;
  handleDecremental: (price: number) => void;
}) {
  const [count, setCount] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleAddItemClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newTotalPrice = newCount * itemPrice;
    setTotalPrice(newTotalPrice);
    handleIncremantal(itemPrice);
  };

  const handleRemoveItemClick = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      const newTotalPrice = newCount * itemPrice;
      setTotalPrice(newTotalPrice);
      handleDecremental(itemPrice);
    }
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
        <Box flex={{ xs: 'none', md: '1 1 25%' }}>
          <CardMedia
            component="img"
            image={imageMap[itemname]}  
            alt={itemname}
            sx={{ height: 150, objectFit: 'contain' }}
          />
        </Box>
        <Box flex={{ xs: 'none', md: '1 1 75%' }}>
          <CardContent>
            <Typography variant="h6">{itemname}</Typography>
            <Stack direction="row" spacing={2} alignItems="center" mt={1}>
              <IconButton onClick={handleRemoveItemClick}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6">{count}</Typography>
              <IconButton onClick={handleAddItemClick}>
                <AddIcon />
              </IconButton>
              <Typography variant="h6">{formatNumber(totalPrice)} บาท</Typography>
            </Stack>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
}
