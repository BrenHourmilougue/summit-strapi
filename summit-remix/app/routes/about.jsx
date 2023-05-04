import imagen from '../../public/img/aboutus.jpg'
import styles from '~/styles/about.css'

export function meta(){
    return (
        {
            title: 'Summit - About us'
        }
    )
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles,
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image',
    }
  ]
}

function about() {
  return (
    <main className="container us">
      <h2 className="heading">
        About us
      </h2>
      <div className="content">
        <img src={imagen} alt="image about us" />
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam labore magni magnam molestiae qui cumque blanditiis. Nesciunt, possimus aperiam expedita voluptatem tenetur voluptate facere voluptatum omnis, molestias, exercitationem recusandae!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam labore magni magnam molestiae qui cumque blanditiis. Nesciunt, possimus aperiam expedita voluptatem tenetur voluptate facere voluptatum omnis, molestias, exercitationem recusandae!</p>
        </div>
      </div>
    </main>
  )
}

export default about
