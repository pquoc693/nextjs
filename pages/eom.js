import React from 'react'
import style from '../styles/EOM.module.css'

export default function EOM({ employee }) {
  console.log(employee)
  return (
    <div className='page-container'>
      <h1 className={style.main}>Employee Of The Month</h1>
      <meta
        name="description"
        content={`This month's employee of the month is ${employee.name}`}
      />

      <meta property="og:image" content={employee.image} />
      <meta property="og:title" content="Employee Of The Month" />
      <meta
        property="og:description"
        content={`This month's employee of the month is ${employee.name}`}
      />

      <meta property="twitter:image" content={employee.image} />
      <meta property="twitter:title" content="Employee Of The Month" />
      <meta
        property="twitter:description"
        content={`This month's employee of the month is ${employee.name}`}
      />
    </div>
  )
}
export const getServerSideProps = async pageContext => {
  const apiResponse = await fetch(
    'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
  );
  const employee = await apiResponse.json();

  return {
    props: {
      employee,
    },
  };
};
