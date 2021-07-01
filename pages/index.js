// import Image from 'next/image'
import { useAppContext } from '@context/AppContext';
import styles from '../styles/Home.module.css';
import { useContext } from 'react';

export default function Home() {
  const { toggleMobileMenu } = useAppContext()
  return (
    <button onClick={ toggleMobileMenu }>menu</button>
  )
}
