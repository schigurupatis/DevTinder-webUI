import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <footer className="footer bg-base-300 text-neutral-content items-center p-4 px-10 relative md:fixed bottom-0">
  <aside className="grid-flow-col items-center">
    {/* <p>Copyright © {new Date().getFullYear()} - All right reserved</p> */}
    <p>Designed & Developed by <Link to="https://www.linkedin.com/in/schigurupatis/" target="_blank" className="text-error">Santha Kumar Chigurupati</Link> for Educational purpose only</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <Link to="https://wa.me/9392441426" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current">
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0a12 12 0 0 0-12 12 11.94 11.94 0 0 0 1.64 6.02L0 24l6.34-1.64A11.94 11.94 0 0 0 12 24a12 12 0 0 0 8.52-20.52zM12 21.47a9.47 9.47 0 0 1-4.92-1.34l-.35-.2-3.77 1 1-3.72-.22-.38A9.51 9.51 0 1 1 12 21.47zm4.34-7.37c-.24-.12-1.43-.71-1.65-.79s-.38-.12-.55.12c-.16.24-.63.79-.78.95s-.28.18-.52.06a7.79 7.79 0 0 1-3.83-3.37c-.29-.49.29-.45.78-1.5a.46.46 0 0 0-.02-.43c-.06-.12-.55-1.33-.76-1.82s-.4-.4-.55-.41h-.47a1 1 0 0 0-.7.34 2.94 2.94 0 0 0-.9 2.17A5.15 5.15 0 0 0 8 14.67a9 9 0 0 0 5.56 2.94c.38 0 1.2-.16 1.82-.79s.78-1.58.89-1.86.1-.36-.12-.48z"></path>
  </svg>
</Link>

<Link to="https://www.linkedin.com/in/schigurupatis/" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current">
    <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.12 20.45H3.56V9h3.56zM5.34 7.5A2.06 2.06 0 1 1 7.4 5.44a2.07 2.07 0 0 1-2.06 2.06zM20.45 20.45h-3.55v-5.29c0-1.26-.02-2.89-1.76-2.89s-2 1.38-2 2.81v5.37h-3.56V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.86c3.61 0 4.28 2.38 4.28 5.47z"></path>
  </svg>
</Link>

<Link to="https://github.com/schigurupatis" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current">
    <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.6-4-1.6a3.2 3.2 0 0 0-1.4-1.8c-1.2-.8.1-.8.1-.8a2.5 2.5 0 0 1 1.8 1.2c1.2 2 3.1 1.4 3.9 1.1a3 3 0 0 1 .9-1.9c-2.7-.3-5.5-1.3-5.5-5.7a4.4 4.4 0 0 1 1.2-3 4.2 4.2 0 0 1 .1-3s1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2a4.2 4.2 0 0 1 .1 3 4.4 4.4 0 0 1 1.2 3c0 4.4-2.8 5.4-5.5 5.7a3.3 3.3 0 0 1 .9 2.5v3.7c0 .3.2.7.8.5A12 12 0 0 0 12 0z"></path>
  </svg>
</Link>



    <Link to="mailto:schigurupatis@gmail.com" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="fill-current">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 11 4 6.01V6zm0 12H4V8l8 5 8-5z"></path>
  </svg>
</Link>

  </nav>
</footer>
    </>
  )
}

export default Footer