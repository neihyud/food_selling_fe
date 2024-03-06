import { Image } from 'react-bootstrap'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'

import './notFound.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <DefaultLayout>
      <section className="fp__404">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-md-7 m-auto">
              <div className="fp__404_text wow fadeInUp" data-wow-duration="1s">
                <Image src="src/assets/images/404_img.png" alt="404" class="img-fluid w-100" />
                <h2>{"That Page Doesn't Exist!"}</h2>
                <p>Sorry, the page you were looking for could not be found.</p>
                <button className="common_btn" onClick={() => navigate('/')}>home</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default NotFound