import React from 'react'
import SchoolGradesPageContent from '@/app/components/pages/SchoolGradesPageContent';
const SchoolGradesPage = async({params}) => {

    const { route } = await params;
    console.log(route);
    
  return (
      <SchoolGradesPageContent route={route} />
  )
}

export default SchoolGradesPage