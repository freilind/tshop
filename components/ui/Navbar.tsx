import React, { FC } from "react";
import NextLink from "next/link";
import { AppBar, Toolbar, Link, Typography, Box, Button, IconButton, Badge } from "@mui/material";
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

export const Navbar: FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link display="flex" alignItems="center">
                        <Typography variant="h6">TShop |</Typography>
                        <Typography sx={{ ml: 0.5 }}>TShop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href="/category/men" passHref>
                        <Button>Hombres</Button>
                    </NextLink>
                    <NextLink href="/category/women" passHref>
                        <Button>Mujeres</Button>
                    </NextLink>
                    <NextLink href="/category/kid" passHref>
                        <Button>Niños</Button>
                    </NextLink>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>Menú</Button>
            </Toolbar>
        </AppBar>
    );
};
