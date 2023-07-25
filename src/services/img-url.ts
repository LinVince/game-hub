import React from 'react'


const getCropedImageUrl = (url:string) => {
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  const targetUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index)  

    return  targetUrl;
}

export default getCropedImageUrl