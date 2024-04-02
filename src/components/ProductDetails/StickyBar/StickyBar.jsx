
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, far } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../animate.css'
import '../jquery.exzoom.css'
import '../nice-select.css'
// import '../rtl.css'
import '../slick.css'
import '../spacing.css'
import '../venobox.min.css'
const Stickybar = () => {
    return (
        <div className="col-xl-4 col-lg-4">
            <div id="sticky_sidebar">
                <div className="fp__blog_search blog_sidebar m-0 wow fadeInUp" data-wow-duration="1s">
                    <h3>Search</h3>
                    <form>
                        <input type="text" placeholder="Search" />
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
                    </form>
                </div>
                <div className="fp__related_blog blog_sidebar wow fadeInUp" data-wow-duration="1s">
                    <h3>Latest Post</h3>
                    <ul>
                        <li>
                            <img src="../src/assets/images/blog_1.jpg" alt="blog" className="img-fluid w-100" />
                            <div className="text">
                                <a href="#">Mechanic at car service tire change the car.</a>
                                <p><FontAwesomeIcon icon={faCalendarDays} /> 29 oct 2022</p>
                            </div>
                        </li>
                        {/* Thêm các bài viết khác tương tự */}
                        <li>
                            <img src="../src/assets/images/blog_2.jpg" alt="blog" class="img-fluid w-100"/>
                            <div class="text">
                                <a href="#">Transportation and logistics of container cargo ship.</a>
                                <p><FontAwesomeIcon icon={faCalendarDays} /> 29 oct 2022</p>
                            </div>
                        </li>
                        <li>
                            <img src="../src/assets/images/blog_3.jpg" alt="blog" class="img-fluid w-100"/>
                            <div class="text">
                                <a href="#">Commercial cleaning crew ladies working.</a>
                                <p><FontAwesomeIcon icon={faCalendarDays} /> 29 oct 2022</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="fp__blog_categori blog_sidebar wow fadeInUp" data-wow-duration="1s">
                    <h3>Categories</h3>
                    <ul>
                        <li><a href="#">Home Cleaning <span>10</span></a></li>
                        {/* Thêm các danh mục khác */}
                        <li><a href="#">Painting & Renovation <span>20</span></a></li>
                        <li><a href="#">Cleaning & Pest Control <span>14</span></a></li>
                        <li><a href="#">Emergency Services <span>41</span></a></li>
                        <li><a href="#">Car Care Services <span>05</span></a></li>
                        <li><a href="#">Electric & Plumbing <span>35</span></a></li>
                        <li><a href="#">Home Move <span>48</span></a></li>
                    </ul>
                </div>
                <div className="fp__blog_tags blog_sidebar wow fadeInUp" data-wow-duration="1s">
                    <h3>Popular Tags</h3>
                    <ul>
                        <li><a href="#">Cleaning </a></li>
                        {/* Thêm các thẻ khác */}
                        <li><a href="#">Car Repair</a></li>
                        <li><a href="#">Plumbing</a></li>
                        <li><a href="#">Painting</a></li>
                        <li><a href="#">Past Control</a></li>
                        <li><a href="#">AC Repair</a></li>
                        <li><a href="#">Home Move</a></li>
                        <li><a href="#">Disinfection</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stickybar;

