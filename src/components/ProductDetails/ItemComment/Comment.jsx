import '../animate.css'
import '../jquery.exzoom.css'
import '../nice-select.css'
// import '../rtl.css'
import '../slick.css'
import '../spacing.css'
import '../venobox.min.css'

const Comments = () => {
    return (
        <><div className="fp__comment mt_100 xs_mt_70 wow fadeInUp" data-wow-duration="1s">
            <h4>03 Comments</h4>
            <div className="fp__single_comment m-0 border-0">
                <img src="../src/assets/images/comment_img_1.png" alt="review" className="img-fluid" />
                <div className="fp__single_comm_text">
                    <h3>Michel Holder <span>29 oct 2022 </span></h3>
                    <p>Sure there isn't anything embarrassing hidden in the middle of text. All erators on the Internet tend to repeat predefined chunks</p>
                    <a href="#">Reply <i className="fas fa-reply-all"></i></a>
                </div>
            </div>
            <div className="fp__single_comment">
                <img src="../src/assets/images/chef_1.jpg" alt="review" className="img-fluid" />
                <div className="fp__single_comm_text">
                    <h3>salina khan <span>29 oct 2022 </span></h3>
                    <p>Sure there isn't anything embarrassing hidden in the middle of text. All erators on the Internet tend to repeat predefined chunks</p>
                    <a href="#">Reply <i className="fas fa-reply-all"></i></a>
                </div>
            </div>
            <div className="fp__single_comment replay">
                <img src="../src/assets/images/comment_img_2.png" alt="review" className="img-fluid" />
                <div className="fp__single_comm_text">
                    <h3>Mouna Sthesia <span>29 oct 2022 </span></h3>
                    <p>Sure there isn't anything embarrassing hidden in the middle of text. All erators on the Internet tend to repeat predefined chunks</p>
                    <a href="#">Reply <i className="fas fa-reply-all"></i></a>
                </div>
            </div>
            <div className="fp__single_comment">
                <img src="../src/assets/images/chef_3.jpg" alt="review" className="img-fluid" />
                <div className="fp__single_comm_text">
                    <h3>marjan janifar <span>29 oct 2022 </span></h3>
                    <p>Sure there isn't anything embarrassing hidden in the middle of text. All erators on the Internet tend to repeat predefined chunks</p>
                    <a href="#">Reply <i className="fas fa-reply-all"></i></a>
                </div>
            </div>
            <a href="#" className="load_more">Load More</a>
        </div>

        <div className="comment_input mt_100 xs_mt_70 wow fadeInUp" data-wow-duration="1s">
            <h4>Leave A Comment</h4>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form>
                <div className="row">
                    <div className="col-xl-6 col-md-6">
                        <label>name</label>
                        <div className="fp__contact_form_input">
                            <span><i className="fal fa-user-alt"></i></span>
                            <input type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <label>email</label>
                        <div className="fp__contact_form_input">
                            <span><i className="fal fa-user-alt"></i></span>
                            <input type="email" placeholder="Mail" />
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <label>comment</label>
                        <div className="fp__contact_form_input textarea">
                            <span><i className="fal fa-user-alt"></i></span>
                            <textarea rows="5" placeholder="Your Comment"></textarea>
                        </div>
                        <button type="submit" className="common_btn mt_20">Submit comment</button>
                    </div>
                </div>
            </form>
        </div></>
    );
}

export default Comments;
