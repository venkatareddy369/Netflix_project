import React from 'react';
import Card from '../../components/Card';

import cdata from '../../../src/cdata';

// console.log(cdata[1].title);
const App = () => {
  return (
    <>
      <h1 className='heading_style'>Trending web series in youtube 2021</h1>
      <Card
        imgSrc={cdata[0].imgSrc}
        title={cdata[0].title}
        link={cdata[0].link}
        sname={cdata[0].sname}
      />
      <Card
        imgSrc={cdata[1].imgSrc}
        title={cdata[1].title}
        link={cdata[1].link}
        sname={cdata[1].sname}
      />
      <Card
        imgSrc={cdata[2].imgSrc}
        title={cdata[2].title}
        link={cdata[2].link}
        sname={cdata[2].sname}
      />
      <Card
        imgSrc={cdata[3].imgSrc}
        title={cdata[3].title}
        link={cdata[3].link}
        sname={cdata[3].sname}
      />
      <Card
        imgSrc={cdata[4].imgSrc}
        title={cdata[4].title}
        link={cdata[4].link}
        sname={cdata[4].sname}
      />
      <Card
        imgSrc={cdata[5].imgSrc}
        title={cdata[5].title}
        link={cdata[5].link}
        sname={cdata[5].sname}
      />
        <Card
        imgSrc={cdata[6].imgSrc}
        title={cdata[6].title}
        link={cdata[6].link}
        sname={cdata[6].sname}
      />
      <Card
        imgSrc={cdata[7].imgSrc}
        title={cdata[7].title}
        link={cdata[7].link}
        sname={cdata[7].sname}
      />
        <Card
        imgSrc={cdata[8].imgSrc}
        title={cdata[8].title}
        link={cdata[8].link}
        sname={cdata[8].sname}
      />
        <Card
        imgSrc={cdata[9].imgSrc}
        title={cdata[9].title}
        link={cdata[9].link}
        sname={cdata[9].sname}
      />
       <Card
        imgSrc={cdata[10].imgSrc}
        title={cdata[10].title}
        link={cdata[10].link}
        sname={cdata[10].sname}
      />
        <Card
        imgSrc={cdata[11].imgSrc}
        title={cdata[11].title}
        link={cdata[11].link}
        sname={cdata[11].sname}
      />
        
    </>

  );
};

export default App;








