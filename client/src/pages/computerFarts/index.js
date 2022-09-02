import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_LISTINGS } from '../../utils/queries';
import './style.css';

export default function ComputerFarts() {
  const [queryData, setQueryData] = useState(useQuery(GET_LISTINGS));



  return (
    <>
      <h1>Yes this is text</h1>
    </>
  )
}