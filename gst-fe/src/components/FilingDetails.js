import React from 'react';
import { useParams } from 'react-router-dom';

function FilingDetails() {

    const {filingId} = useParams();

  return (
    <div className='container mt-3'>FilingDetails for {filingId}</div>
  )
}

export default FilingDetails