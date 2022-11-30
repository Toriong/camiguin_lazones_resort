import NavBar from 'layout/navbar/NavBar'
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { FaAngleRight, FaAngleLeft, FaCircle, FaRegCircle } from 'react-icons/fa';
import Button from 'react-bootstrap/Button'
import { useState, MouseEvent, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { introPic } from 'interfaces/interfaces';
import MakeReservation from '../globalBtns/MakeReservation';
import IntroPic from './HomePg/IntroPic';
import Logo from 'layout/Logo';
import IntroPicsSec from './HomePg/sections/IntroPicsSec';

const Home: NextPage = () => {
  return (
    <>
      <div className={`${styles.container} noPadding homePage min-vh-100`}>
        <Head>
          <title>Camiguin Lazones Resort Home Page</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* ${styles.main} was using this below */}
        <main className="noPadding noMargin d-flex flex-column justify-content-start pb-2 min-vh-100">
          <IntroPicsSec/>
          <section className='row noMargin noPadding flex-nowrap'>
            <section className='d-flex justify-content-center align-items-center col-12'>
      
            </section>
          </section>
          {/* <section className='row noMargin noPadding flex-nowrap'>
            <section className="d-flex justify-content-center align-items-center pt-4 pe-4 col-12">
              <MakeReservation />
            </section>
          </section> */}
          
          <section className='row noPadding pitchSec'>
            <div className="curve"/>
            <section className='col-12 d-flex justify-content-center align-items-center'>
                <section className='pt-2'>
                    <Logo width={100} height={100}/>
                </section>
            </section>
            <section className='col-12 d-flex justify-content-center align-items-center'>
                  {/* put an animation of different ways of saying welcome */}
                  <span className="largerFontSize">Hello!</span>
            </section>
            <section className='col-12'>
                  {/* provide the verbal pitch here */}
            </section>
          </section>
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer> */}
      </div>
    </>
  )
}

export default Home
