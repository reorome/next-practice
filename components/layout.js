import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import TwitterExsample from '@/components/TwitterExsample';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Theme, useMediaQuery } from '@material-ui/core';

const name = 'reorome';
export const siteTitle = 'Next.js Sample Website';
const drawerWidth = 300;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Layout({ children, home }) {
  // export const useWindowDimensions = () => {
  //   const getWindowDimensions = () => {
  //     const { innerWidth: width, innerHeight: height } = window;
  //     return {
  //       width,
  //       height,
  //     };
  //   };

  //   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  //   useEffect(() => {
  //     const onResize = () => {
  //       setWindowDimensions(getWindowDimensions());
  //     };
  //     window.addEventListener('resize', onResize);
  //     return () => window.removeEventListener('resize', onResize);
  //   }, []);
  //   return windowDimensions;
  // };

  // const { width, height } = useWindowDimensions();

  // const { isMbileSize } = useSize();
  // const theme = useTheme();
  // console.log(theme);
  // console.log(theme.breakpoints.up('xs'));

  const useSize = () => {
    const isMobileSize = useMediaQuery('(min-width:600px)');
    return { isMobileSize };
  };
  const { isMobileSize } = useSize();
  const [open, setOpen] = React.useState(isMobileSize);

  useEffect(() => {
    setOpen(isMobileSize);
  }, [isMobileSize]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <Image
                  priority
                  src='/images/profile.jpg'
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/'>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='right'
        open={open}
      >
        <DrawerHeader>
          {open ? (
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon />
            </IconButton>
          ) : (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronLeftIcon />
            </IconButton>
          )}
        </DrawerHeader>
        {open ? <TwitterExsample></TwitterExsample> : <></>}
      </Drawer>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
