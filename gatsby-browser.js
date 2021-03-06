// // custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"
// // normalize CSS across browsers
// import "./src/normalize.css"
import "semantic-ui-css/semantic.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/scss/global.scss"

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
