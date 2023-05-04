import React from 'react'

function Welcome({welcome}) {

    const {content, image, title} = welcome
  return (
    <section className='welcome'>

        <style jsx='true'>{`
            .welcome{
                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data.attributes.url});
            }
        `}</style>

      <div className='container welcome-grid'>
        <div className='content'>
            <h2 className='heading'>{title}</h2>
            <p className='text'>{content}</p>
        </div>
      </div>
    </section>
  )
}

export default Welcome