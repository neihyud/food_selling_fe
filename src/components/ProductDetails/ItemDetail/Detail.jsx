import '../animate.css'
import '../jquery.exzoom.css'
import '../nice-select.css'
//  import '../rtl.css'
import '../slick.css'
import '../spacing.css'
import '../venobox.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart} from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft,faStar ,faStarHalfAlt,faMinus,faPlus,faChevronRight} from '@fortawesome/free-solid-svg-icons';
const Detail = () => {
    return (
        <>
        <div className="wow fadeInUp" data-wow-duration="1s">
            <div className="exzoom hidden" id="exzoom">
                <div className="exzoom_img_box fp__menu_details_images">
                    <ul className='exzoom_img_ul'>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu1.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu2.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu3.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu4.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu5.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu6.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu7.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu8.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu1.png" alt="product" /></li>
                        <li><img className="zoom ing-fluid w-100" src="../src/assets/images/menu2.png" alt="product" /></li>
                    </ul>
                </div>
                <div className="exzoom_nav"></div>
                <p className="exzoom_btn">
                    <a href="javascript:void(0);" className="exzoom_prev_btn"> <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                    <a href="javascript:void(0);" className="exzoom_next_btn"> <FontAwesomeIcon icon={faChevronRight} />
                    </a>
                </p>
            </div>
        </div>
        <div className="wow fadeInUp" data-wow-duration="1s">
                <div className="fp__menu_details_text">
                    <h2>Maxican Pizza Test Better</h2>
                    <p className="rating">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStarHalfAlt}/>
                        <span>(201)</span>
                    </p>
                    <h3 className="price">$320.00 <del>$350.00</del> </h3>
                    <p className="short_description">Pizza is a savory dish of Italian origin consisting of a usually
                        round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often
                        various other ingredients, which is then baked at a high temperature, traditionally in a
                        wood-fired oven. A small pizza is sometimes called a pizzetta.</p>

                    <div className="details_size">
                        <h5>select size</h5>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="large" checked />
                            <label className="form-check-label" htmlFor="large">
                                large <span>+ $350</span>
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="medium"/>
                            <label className="form-check-label" htmlFor="medium">
                                medium <span>+ $250</span>
                            </label>
                        </div>
                        <div class="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="small"/>
                            <label className="form-check-label" htmlFor="small">
                                small <span>+ $150</span>
                            </label>
                        </div>
                    </div>

                    <div className="details_extra_item">
                        <h5>select option <span>(optional)</span></h5>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="coca-cola" />
                            <label className="form-check-label" htmlFor="coca-cola">
                                coca-cola <span>+ $10</span>
                            </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="7up"/>
                        <label className="form-check-label" htmlFor="7up">
                            7up <span>+ $15</span>
                        </label>
                    </div>
                    </div>

                    <div className="details_quentity">
                        <h5>select quantity</h5>
                        <div className="quentity_btn_area d-flex flex-wrapa align-items-center">
                            <div className="quentity_btn">
                                <button className="btn btn-danger"><FontAwesomeIcon icon={faMinus}/></button>
                                <input type="text" placeholder="1" />
                                <button className="btn btn-success"><FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                            <h3>$320.00</h3>
                        </div>
                    </div>
                    <ul className="details_button_area d-flex flex-wrap">
                        <li><a className="common_btn" href="#">add to cart</a></li>
                        <li><a className="wishlist" href="#"><FontAwesomeIcon icon={faHeart}/></a></li>
                    </ul>
                </div>
        </div>
        </>
    );
}

export default Detail;



