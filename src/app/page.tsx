"use client";
import { Stack, Typography, Container, Box } from "@mui/material";
import React from "react";
import ItemCart from "./item-cart";

const formatNumber = (num: number) => num.toLocaleString('th-TH');

export default function Home() {
  const [total, setTotal] = React.useState(0);

  const handleIncremental = (price: number) => {
    setTotal(total + price);
  };

  const handleDecremental = (price: number) => {
    setTotal(total - price);
  };

  const myItems = [
    { itemname: "iPhone 15 Pro", price: 499 },
    { itemname: "iPhone 15", price: 399 },
    { itemname: "iPad Pro", price: 799 },
    { itemname: "iPad Air", price: 599 },
    { itemname: "iPad", price: 499 },
    { itemname: "iPad mini", price: 399 },
    { itemname: "MacBook Air", price: 999 },
    { itemname: "MacBook Pro", price: 1299 },
    { itemname: "iMac", price: 1799 },
    { itemname: "Mac mini", price: 699 },
    { itemname: "Mac Studio", price: 1999 },
  ];

  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {myItems.map((item) => (
        <ItemCart
          key={item.itemname}
          itemname={item.itemname}
          itemPrice={item.price}
          handleIncremantal={handleIncremental}
          handleDecremental={handleDecremental}
        />
      ))}
      <Box mt={4}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Typography variant="h4">Total</Typography>
          <Typography variant="h4">{formatNumber(total)} บาท</Typography>
        </Stack>
      </Box>
    </Container>
  );
}
