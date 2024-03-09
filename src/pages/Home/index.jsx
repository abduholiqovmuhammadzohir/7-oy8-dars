import React, { useEffect, useState } from 'react'

function Home() {

  

  useEffect(() => {
    fetch("E1MC8RZ-SB4MAVP-M1XD5EN-5DGPZ1P")
      .then(res => res.json())
      .then((el) => {
        console.log(el);
      })
      .catch((err) => {
        console.log(err);
      })
      

  }, [])

  return (
    <div>
      Trending
    </div>
  )
}

export default Home