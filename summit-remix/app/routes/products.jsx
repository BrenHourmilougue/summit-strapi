import {  Outlet, useOutletContext } from "@remix-run/react"
import styles from "~/styles/products.css"

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles,
    },
  ]
}

const Store = () => {

  return (
    <main className="container">
      <Outlet
        context={useOutletContext()}
      />
    </main>
  )
}

export default Store
